import { storage, db } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { AudioSegment } from '../types/audio';

export async function uploadRecording(blob: Blob, childId: string): Promise<string> {
  const timestamp = Date.now();
  const filename = `recordings/${childId}/${timestamp}.webm`;
  const storageRef = ref(storage, filename);
  
  await uploadBytes(storageRef, blob);
  const url = await getDownloadURL(storageRef);
  
  await addDoc(collection(db, 'recordings'), {
    childId,
    timestamp,
    url,
    duration: 300000, // 5 minutes in milliseconds
  });
  
  return url;
}

export async function getRecordings(childId: string): Promise<AudioSegment[]> {
  const q = query(
    collection(db, 'recordings'),
    where('childId', '==', childId)
  );
  
  const querySnapshot = await getDocs(q);
  const recordings: AudioSegment[] = [];
  
  querySnapshot.forEach((doc) => {
    recordings.push({
      id: doc.id,
      ...doc.data()
    } as AudioSegment);
  });
  
  return recordings.sort((a, b) => b.timestamp - a.timestamp);
}