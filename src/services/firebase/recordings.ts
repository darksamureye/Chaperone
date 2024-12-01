import { collection, query, where, orderBy, getDocs, DocumentData } from 'firebase/firestore';
import { db } from './config';
import { AudioSegment } from '../../types/audio';

export const fetchUserRecordings = async (userId: string): Promise<AudioSegment[]> => {
  try {
    const q = query(
      collection(db, 'recordings'),
      where('userId', '==', userId),
      where('type', '==', 'audio'),
      orderBy('timestamp', 'desc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp,
      duration: doc.data().duration
    })) as AudioSegment[];
  } catch (error) {
    console.error('Error fetching recordings:', error);
    throw new Error('Failed to fetch recordings');
  }
};

export const processRecordingMetadata = (doc: DocumentData): AudioSegment => {
  return {
    id: doc.id,
    url: doc.data().url,
    timestamp: doc.data().timestamp,
    duration: doc.data().duration,
    userId: doc.data().userId
  };
};