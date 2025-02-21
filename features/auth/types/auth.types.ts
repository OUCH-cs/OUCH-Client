type AuthState = {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

export type { AuthState };
