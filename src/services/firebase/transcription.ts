import { db } from './config';
import { doc, updateDoc } from 'firebase/firestore';

export const saveTranscript = async (recordingId: string, transcript: string): Promise<void> => {
  try {
    const recordingRef = doc(db, 'recordings', recordingId);
    await updateDoc(recordingRef, { transcript });
  } catch (error) {
    console.error('Error saving transcript:', error);
    throw new Error('Failed to save transcript');
  }
};

export const transcribeAudio = async (audioUrl: string): Promise<string> => {
  try {
    const response = await fetch(audioUrl);
    const audioBlob = await response.blob();
    
    // Convert audio to base64
    const reader = new FileReader();
    const audioBase64 = await new Promise<string>((resolve) => {
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(audioBlob);
    });

    // Here you would typically send the audio to your backend for processing
    // For now, we'll use a placeholder implementation
    return "Transcript will be available soon...";
  } catch (error) {
    console.error('Error transcribing audio:', error);
    throw new Error('Failed to transcribe audio');
  }
};