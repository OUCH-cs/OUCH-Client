import { View, StyleSheet, Button } from 'react-native';
import { Label } from '@/shared/components/label/Label';
import { useRouter } from 'expo-router';
import theme from '@/shared/styles/theme';
import CustomButton from '@/shared/components/button/CustomButton';
import SelectDestination from '../SelectDestination';
import { useFormContext } from "react-hook-form"; 
import { DestinationType, StepProps } from "../../diagnosis.type";

const StepOne = ({ onNext }: StepProps) => {
  const { watch } = useFormContext<{ destination: DestinationType }>(); 
  const selectedDestination = watch("destination") ?? undefined; 
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Label style={styles.question}>Where do you want to go?</Label>
      <SelectDestination selectedDestination={selectedDestination}/>
      <CustomButton style={styles.nextButton} disabled={!selectedDestination} onPress={()=>{onNext()}}>
        <Label style={styles.nextButtonText}>Next</Label>
      </CustomButton>
      <Button title="뒤로 가기" onPress={() => router.back()} />
    </View>
  );
}

export default StepOne

export const styles = StyleSheet.create({
  container: {
    paddingTop:46,
  },

  question: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 49,
  },

  nextButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    height:48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextButtonText: {
    color: theme.colors.white,
    fontSize: 18,

  },
});
