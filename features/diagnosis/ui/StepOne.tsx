import { View, Pressable, StyleSheet, Button } from 'react-native';
import { Label } from '@/shared/components/label/Label';
import { useRouter } from 'expo-router';
import { useStore } from '../services/useStore';
import theme from '@/shared/styles/theme';
import CustomButton from '@/shared/components/button/CustomButton';
import SelectDestination from './SelectDestination';

export interface StepProps {
  onNext: () => void;
}

const StepOne = ({ onNext }: StepProps) => {
  const { selectedDestination, setDestination } = useStore();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Label style={styles.question}>Where do you want to go?</Label>
      <SelectDestination/>
      <CustomButton style={styles.nextButton} disabled={!selectedDestination} onPress={()=>{onNext()}}>
        <Label style={styles.nextButtonText}>Next</Label>
      </CustomButton>
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
