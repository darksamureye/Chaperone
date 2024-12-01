import { create } from 'zustand';
import { uploadRecording } from '../services/recordingService';
import { useAuth } from './authStore';

interface RecordingState {
  recordings: Blob[];
  isUploading: boolean;
  addRecording: (recording: Blob) => Promise<void>;
  clearRecordings: () => void;
}

export const useRecordingStore = create<RecordingState>((set, get) => ({
  recordings: [],
  isUploading: false,
  addRecording: async (recording: Blob) => {
    set({ isUploading: true });
    try {
      const user = useAuth.getState().user;
      if (user?.id) {
        await uploadRecording(recording, user.id);
        set((state) => ({ 
          recordings: [...state.recordings, recording],
          isUploading: false 
        }));
      }
    } catch (error) {
      console.error('Error uploading recording:', error);
      set({ isUploading: false });
    }
  },
  clearRecordings: () => set({ recordings: [] }),
}));