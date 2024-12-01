import { useState, useEffect } from 'react';
import { fetchUserRecordings } from '../services/firebase/recordings';
import { AudioSegment } from '../types/audio';
import { useAuth } from '../store/authStore';
import toast from 'react-hot-toast';

export function useRecordings() {
  const [recordings, setRecordings] = useState<AudioSegment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const loadRecordings = async () => {
      if (!user?.id) return;
      
      try {
        setIsLoading(true);
        setError(null);
        const fetchedRecordings = await fetchUserRecordings(user.id);
        setRecordings(fetchedRecordings);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load recordings';
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecordings();
  }, [user?.id]);

  const refreshRecordings = async () => {
    if (!user?.id) return;
    
    try {
      const fetchedRecordings = await fetchUserRecordings(user.id);
      setRecordings(fetchedRecordings);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to refresh recordings';
      toast.error(errorMessage);
    }
  };

  return {
    recordings,
    isLoading,
    error,
    refreshRecordings
  };
}