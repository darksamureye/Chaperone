import { useRef, useCallback } from 'react';

interface AudioOptions {
  volume?: number;
  loop?: boolean;
}

interface AudioController {
  stop: () => void;
  pause: () => void;
  resume: () => Promise<void>;
  setVolume: (volume: number) => void;
}

export function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const contextRef = useRef<AudioContext | null>(null);

  const initAudioContext = useCallback(() => {
    if (!contextRef.current) {
      contextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return contextRef.current;
  }, []);

  const playSound = useCallback(async (src: string, options: AudioOptions = {}): Promise<AudioController> => {
    try {
      // Clean up any existing audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }

      const context = initAudioContext();
      const audio = new Audio();
      
      // Configure audio settings
      audio.volume = options.volume ?? 1.0;
      audio.loop = options.loop ?? false;

      // Create and connect audio nodes
      const source = context.createMediaElementSource(audio);
      const gainNode = context.createGain();
      gainNode.gain.value = audio.volume;
      
      source.connect(gainNode);
      gainNode.connect(context.destination);

      // Load and play audio
      return new Promise((resolve, reject) => {
        audio.addEventListener('canplaythrough', async () => {
          try {
            audioRef.current = audio;
            await audio.play();
            
            resolve({
              stop: () => {
                if (audio) {
                  audio.pause();
                  audio.currentTime = 0;
                }
              },
              pause: () => audio?.pause(),
              resume: async () => audio?.play(),
              setVolume: (vol: number) => {
                const newVol = Math.max(0, Math.min(1, vol));
                if (audio) {
                  audio.volume = newVol;
                  gainNode.gain.value = newVol;
                }
              }
            });
          } catch (error) {
            reject(error);
          }
        }, { once: true });

        audio.addEventListener('error', () => {
          reject(new Error('Failed to load audio'));
        }, { once: true });

        audio.src = src;
        audio.load();
      });
    } catch (error) {
      console.error('Error initializing audio:', error);
      throw error;
    }
  }, [initAudioContext]);

  return { playSound };
}