
export interface StepProps {
    onNext: () => void;
  }

export type DestinationType = "Hospital" | "Pharmacy";

export interface SelectDestinationProps {
  selectedDestination?: DestinationType; 

}