import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  stopPin: string;
  setStopPin: (pin: string) => void;
  validatePin: (pin: string) => boolean;
  resetPin: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      stopPin: '1234', // Default PIN
      setStopPin: (pin: string) => {
        if (pin.length === 4 && /^\d+$/.test(pin)) {
          set({ stopPin: pin });
          return true;
        }
        return false;
      },
      validatePin: (pin: string) => get().stopPin === pin,
      resetPin: () => set({ stopPin: '1234' }),
    }),
    {
      name: 'settings-storage',
    }
  )
);