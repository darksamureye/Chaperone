import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './config';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './config';

export const uploadAudioSegment = async (
  blob: Blob,
  userId: string
): Promise<{ url: string; timestamp: number }> => {
  try {
    const timestamp = Date.now();
    const filename = `recordings/${userId}/${timestamp}.webm`;
    const storageRef = ref(storage, filename);
    
    await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(storageRef);
    
    await addDoc(collection(db, 'recordings'), {
      userId,
      timestamp,
      url,
      duration: 300000, // 5 minutes in milliseconds
      type: 'audio'
    });
    
    return { url, timestamp };
  } catch (error) {
    console.error('Error uploading audio segment:', error);
    throw new Error('Failed to upload audio segment');
  }
};