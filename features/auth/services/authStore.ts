import { create } from "zustand";
import { AuthState, ISignUpData, SignUpState, SignUpStatus } from "../types";
import { initialSignUpData } from "../consts/sign-up";

const useAuthStore = create<AuthState>((set) => ({
  isSignedIn: false,
  signIn: () => set({ isSignedIn: true }),
  signOut: () => set({ isSignedIn: false }),
}));

const useSignUpStatusStore = create<SignUpStatus>((set) => ({
  signUpStatus: 0,
  setSignUpStatus: (status) => set({ signUpStatus: status }),
}));

const useSignUpDataStore = create<SignUpState>((set) => ({
  signUpData: initialSignUpData,
  setSignUpData: (data: Partial<ISignUpData>) =>
    set((state) => ({
      signUpData: { ...state.signUpData, ...data },
    })),
}));
export { useAuthStore, useSignUpStatusStore, useSignUpDataStore };
