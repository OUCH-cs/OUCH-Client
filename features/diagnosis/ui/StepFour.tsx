import {Text, SafeAreaView } from "react-native";

export interface StepProps {
  onNext: () => void;
}

export default function StepFour({ onNext }: StepProps) {
  return (
    <SafeAreaView>
      <Text>MyPages</Text>
    </SafeAreaView>
  );
}
