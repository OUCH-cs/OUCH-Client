import {create} from 'zustand';

type State = {
  selectedDestination: 'Hospital' | 'Pharmacy' | null;
  setDestination: (destination: 'Hospital' | 'Pharmacy') => void;

  selectedSymptoms: string[];
  addSymptom: (symptom: string) => void;
  removeSymptom: (symptom: string) => void;


  duration: string | null;
  setDuration: (value: string) => void;


  painLevel: number;
  setPainLevel: (value: number) => void;

  additionalNotes: string;
  setAdditionalNotes: (text: string) => void;

};

export const useStore = create<State>((set) => ({
  selectedDestination: null,
  setDestination: (destination) => set({ selectedDestination: destination }),

  selectedSymptoms: [],
  addSymptom: (symptom) =>
    set((state) => ({
      selectedSymptoms: [...state.selectedSymptoms, symptom],
    })),
  removeSymptom: (symptom) =>
    set((state) => ({
      selectedSymptoms: state.selectedSymptoms.filter((s) => s !== symptom),
    })),


  duration: null,
  setDuration: (value) => set({ duration: value }),

  painLevel: 5,
  setPainLevel: (value) => set({ painLevel: value}),

  additionalNotes: '',
  setAdditionalNotes: (text) => set({ additionalNotes: text }),


  
}));
