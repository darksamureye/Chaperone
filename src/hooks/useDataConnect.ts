import { useState, useEffect } from 'react';
import { dataConnect } from '../services/firebase/dataConnect';

export function useDataConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        setIsInitializing(true);
        const connected = await dataConnect.initializeConnection();
        setIsConnected(connected);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize Data Connect'));
      } finally {
        setIsInitializing(false);
      }
    };

    initialize();
  }, []);

  return {
    isConnected,
    isInitializing,
    error,
    dataConnect
  };
}