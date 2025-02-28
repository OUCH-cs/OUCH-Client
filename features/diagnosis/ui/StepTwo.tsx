import {Text, SafeAreaView } from "react-native";

export interface StepProps {
  onNext: () => void;
}

export default function StepTwo({ onNext }: StepProps) {
  return (
    <SafeAreaView>
      <Text>StepTwo</Text>
    </SafeAreaView>
  );
}
