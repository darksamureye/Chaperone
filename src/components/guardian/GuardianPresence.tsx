import React, { useEffect, useState, useCallback } from 'react';
import { Heart } from 'lucide-react';
import { useSound } from '../../hooks/useSound';
import { HaloIcon } from '../icons/HaloIcon';

const GUARDIAN_CONNECT_SOUND = '/sounds/guardian-connect.mp3';

interface GuardianPresenceProps {
  isConnected?: boolean;
  isFirstConnection?: boolean;
  onConnectionComplete?: () => void;
}

export function GuardianPresence({ 
  isConnected = false, 
  isFirstConnection = false,
  onConnectionComplete
}: GuardianPresenceProps) {
  const { play, cleanup } = useSound();
  const [showAnimation, setShowAnimation] = useState(false);

  const handleConnection = useCallback(() => {
    if (isFirstConnection && isConnected) {
      try {
        const sound = play(GUARDIAN_CONNECT_SOUND, { 
          volume: 0.4,
          onEnd: () => {
            setShowAnimation(false);
            onConnectionComplete?.();
          }
        });
        
        setShowAnimation(true);
        sound.play();
        
        return () => {
          sound.stop();
          setShowAnimation(false);
        };
      } catch (error) {
        console.error('Failed to play connection sound:', error);
      }
    }
  }, [isConnected, isFirstConnection, onConnectionComplete, play]);

  useEffect(() => {
    const cleanupFn = handleConnection();
    return () => {
      cleanup();
      cleanupFn?.();
    };
  }, [handleConnection, cleanup]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className={`
        transition-all duration-300
        ${isConnected ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
      `}>
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-4 py-2
                      flex items-center gap-2 border-2 border-indigo-100">
          <div className="relative">
            <HaloIcon className="h-6 w-6" />
            <Heart className="absolute inset-0 w-full h-full text-red-500 animate-pulse" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Guardian is watching over you
          </span>
        </div>

        {showAnimation && (
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full
                        animate-ping pointer-events-none" />
        )}
      </div>
    </div>
  );
}