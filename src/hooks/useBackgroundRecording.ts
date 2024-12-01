import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../store/authStore';
import { useRecordingStore } from '../store/recordingStore';
import { VoiceRecorder } from 'capacitor-voice-recorder';
import { App } from '@capacitor/app';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import toast from 'react-hot-toast';

export function useBackgroundRecording() {
  const [isActive, setIsActive] = useState(false);
  const { user } = useAuth();
  const { addRecording } = useRecordingStore();
  const recordingInterval = useRef<NodeJS.Timeout>();
  const currentRecordingStart = useRef<number>(0);

  const startRecording = async () => {
    try {
      const permissionStatus = await VoiceRecorder.requestAudioRecordingPermission();
      
      if (!permissionStatus.value) {
        throw new Error('Permission denied');
      }

      await Haptics.impact({ style: ImpactStyle.Heavy });
      await VoiceRecorder.startRecording();
      
      currentRecordingStart.current = Date.now();
      setIsActive(true);

      recordingInterval.current = setInterval(async () => {
        await stopCurrentSegment();
        await startNewSegment();
      }, 5 * 60 * 1000);

      App.addListener('appStateChange', async ({ isActive: newState }) => {
        if (!newState) {
          console.log('App went to background, recording continues');
        }
      });

      return true;
    } catch (error) {
      console.error('Error starting recording:', error);
      setIsActive(false);
      throw error;
    }
  };

  const stopCurrentSegment = async () => {
    try {
      const result = await VoiceRecorder.stopRecording();
      const duration = Date.now() - currentRecordingStart.current;
      
      if (result.value && result.value.recordDataBase64) {
        const response = await fetch(
          `data:${result.value.mimeType};base64,${result.value.recordDataBase64}`
        );
        const blob = await response.blob();
        await addRecording(blob);
      }
    } catch (error) {
      console.error('Error stopping segment:', error);
      throw error;
    }
  };

  const startNewSegment = async () => {
    try {
      await VoiceRecorder.startRecording();
      currentRecordingStart.current = Date.now();
    } catch (error) {
      console.error('Error starting new segment:', error);
      setIsActive(false);
      throw error;
    }
  };

  const stopRecording = async () => {
    try {
      if (recordingInterval.current) {
        clearInterval(recordingInterval.current);
      }

      await stopCurrentSegment();
      await Haptics.impact({ style: ImpactStyle.Medium });
      
      setIsActive(false);
      return true;
    } catch (error) {
      console.error('Error stopping recording:', error);
      throw error;
    }
  };

  useEffect(() => {
    return () => {
      if (recordingInterval.current) {
        clearInterval(recordingInterval.current);
      }
      if (isActive) {
        stopRecording().catch(console.error);
      }
    };
  }, []);

  return {
    isActive,
    startRecording,
    stopRecording
  };
}