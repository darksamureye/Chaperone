import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../store/authStore';

export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const startTimeRef = useRef<number>(0);
  const { user } = useAuth();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus',
        audioBitsPerSecond: 32000 // Lower quality for storage efficiency
      });

      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((chunks) => [...chunks, event.data]);
        }
      };

      mediaRecorder.current.start(5000); // Collect data every 5 seconds
      startTimeRef.current = Date.now();
      setIsRecording(true);

      // Set up 5-minute segments
      setTimeout(() => {
        if (mediaRecorder.current?.state === 'recording') {
          stopRecording();
          startRecording(); // Start new segment
        }
      }, 5 * 60 * 1000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current?.state === 'recording') {
      mediaRecorder.current.stop();
      mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  useEffect(() => {
    return () => {
      if (mediaRecorder.current?.state === 'recording') {
        stopRecording();
      }
    };
  }, []);

  return {
    isRecording,
    startRecording,
    stopRecording,
    audioChunks
  };
}