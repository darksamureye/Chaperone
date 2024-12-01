import { collection, query, where, orderBy, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';

export const uploadRecording = async (
  audioBlob: Blob,
  childId: string,
  parentId: string
): Promise<void> => {
  try {
    // Upload to Firebase Storage
    const filename = `recordings/${childId}/${Date.now()}.webm`;
    const storageRef = ref(storage, filename);
    await uploadBytes(storageRef, audioBlob);
    const downloadURL = await getDownloadURL(storageRef);

    // Save metadata to Firestore
    await addDoc(collection(db, 'recordings'), {
      childId,
      parentId,
      url: downloadURL,
      timestamp: Date.now(),
      duration: 300000, // 5 minutes in milliseconds
    });
  } catch (error) {
    console.error('Error uploading recording:', error);
    throw error;
  }
};

export const getRecordings = async (parentId: string) => {
  try {
    const q = query(
      collection(db, 'recordings'),
      where('parentId', '==', parentId),
      orderBy('timestamp', 'desc')
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching recordings:', error);
    throw error;
  }
};