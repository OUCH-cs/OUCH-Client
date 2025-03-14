import { create } from "zustand";

interface SymptomsState {
  customSymptoms: string[];
  addSymptom: (symptom: string) => void;
  removeSymptom: (symptom: string) => void;
}

export const useSymptomsStore = create<SymptomsState>((set) => ({
  customSymptoms: [],
  addSymptom: (symptom) =>
    set((state) => ({ customSymptoms: [...state.customSymptoms, symptom] })),
  removeSymptom: (symptom) =>
    set((state) => ({ customSymptoms: state.customSymptoms.filter((s) => s !== symptom) })),
}));
