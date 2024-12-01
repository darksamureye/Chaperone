import { useRef, useCallback } from 'react';
import { Howl } from 'howler';

interface SoundOptions {
  volume?: number;
  loop?: boolean;
  onEnd?: () => void;
}

interface SoundController {
  play: () => void;
  stop: () => void;
  pause: () => void;
  volume: (value: number) => void;
}

export function useSound() {
  const soundRef = useRef<Howl | null>(null);

  const play = useCallback((src: string, options: SoundOptions = {}): SoundController => {
    // Clean up existing sound
    if (soundRef.current) {
      soundRef.current.unload();
    }

    // Create new sound
    const sound = new Howl({
      src: [src],
      volume: options.volume ?? 1,
      loop: options.loop ?? false,
      onend: options.onEnd,
      html5: true // Enable HTML5 Audio for better mobile support
    });

    soundRef.current = sound;

    return {
      play: () => sound.play(),
      stop: () => sound.stop(),
      pause: () => sound.pause(),
      volume: (value: number) => sound.volume(value)
    };
  }, []);

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.unload();
      soundRef.current = null;
    }
  }, []);

  return { play, cleanup };
}