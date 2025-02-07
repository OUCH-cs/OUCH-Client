import { create } from "zustand";

type AuthState = {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isSignedIn: false,
  signIn: () => set({ isSignedIn: true }),
  signOut: () => set({ isSignedIn: false }),
}));

export { useAuthStore };
