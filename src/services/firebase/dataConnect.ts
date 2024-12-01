import { db } from './config';
import { collection, query, where, getDocs, DocumentData } from 'firebase/firestore';

class DataConnect {
  private static instance: DataConnect;
  
  private constructor() {}
  
  static getInstance(): DataConnect {
    if (!DataConnect.instance) {
      DataConnect.instance = new DataConnect();
    }
    return DataConnect.instance;
  }

  async initializeConnection(): Promise<boolean> {
    try {
      const systemRef = collection(db, 'system');
      const statusQuery = query(systemRef, where('status', '==', 'active'));
      const snapshot = await getDocs(statusQuery);
      return !snapshot.empty;
    } catch (error) {
      console.error('Error initializing Data Connect:', error);
      return false;
    }
  }

  async syncData(collectionName: string, queryParams: Record<string, any>): Promise<DocumentData[]> {
    try {
      const collectionRef = collection(db, collectionName);
      const constraints = Object.entries(queryParams).map(
        ([field, value]) => where(field, '==', value)
      );
      const q = query(collectionRef, ...constraints);
      const snapshot = await getDocs(q);
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error syncing data:', error);
      throw error;
    }
  }
}

export const dataConnect = DataConnect.getInstance();