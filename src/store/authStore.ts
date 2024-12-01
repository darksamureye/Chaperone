import { create } from 'zustand';
import { User } from '../types/audio';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isAnonymous: boolean;
  setUser: (user: User | null) => void;
  setAnonymous: (value: boolean) => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isAnonymous: false,
  setUser: (user) => set({ user, isAuthenticated: !!user, isAnonymous: false }),
  setAnonymous: (value) => set({ isAnonymous: value, isAuthenticated: value, user: null }),
}));