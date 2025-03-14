import { create } from "zustand";

type DiagnosisStore = {
  currentPage: "main" | "add"; 
  setPage: (step: "main" | "add") => void;
};

export const useDiagnosisStore = create<DiagnosisStore>((set) => ({
  currentPage: "main", 
  setPage: (step) => set({ currentPage: step }),
}));