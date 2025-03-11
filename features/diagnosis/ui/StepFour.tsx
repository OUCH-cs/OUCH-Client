import { View, StyleSheet, Button } from 'react-native';
import { Label } from '@/shared/components/label/Label';
import CustomButton from '@/shared/components/button/CustomButton';
import SelectedSymptoms from './SelectedSymptoms';
import PainLevelBar from './PainLevelBar';
import { useRouter } from 'expo-router';
import theme from '@/shared/styles/theme';
import { StepProps } from '../diagnosis.type';


const StepFour = ({ onNext }: StepProps) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Label style={styles.question}>How severe is the pain?</Label>
      <SelectedSymptoms/>
      <PainLevelBar/>
      <CustomButton style={styles.nextButton} onPress={() => {onNext()}}>
        <Label style={styles.nextButtonText}>Next</Label>
      </CustomButton>
      <Button title="뒤로 가기" onPress={() => router.back()} />
    </View>
  );
};

export default StepFour;

export const styles = StyleSheet.create({

  container: {
    paddingTop:46,
  },
  question: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 22,
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
