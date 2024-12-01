import { AudioSegment } from '../types/audio';

export const formatDuration = (duration: number): string => {
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const createAudioUrl = (blob: Blob): string => {
  return URL.createObjectURL(blob);
};

export const cleanupAudioUrl = (url: string): void => {
  URL.revokeObjectURL(url);
};

export const decodeAudioData = async (context: AudioContext, arrayBuffer: ArrayBuffer) => {
  try {
    return await context.decodeAudioData(arrayBuffer);
  } catch (error) {
    console.error('Error decoding audio data:', error);
    throw new Error('Failed to decode audio data');
  }
};

export const loadAudioFile = async (url: string): Promise<ArrayBuffer> => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.arrayBuffer();
  } catch (error) {
    console.error('Error loading audio file:', error);
    throw new Error('Failed to load audio file');
  }
};