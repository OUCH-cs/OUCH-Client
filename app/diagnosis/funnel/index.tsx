import { Text, StyleSheet } from 'react-native';
import DiagnosisPost from '@/features/diagnosis/ui/Funnel';
import { useFunnel } from '@/features/diagnosis/lib/useFunnel';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '@/features/diagnosis/ui/ProgressBar';
import useProgress from '@/features/diagnosis/lib/useProgress';
import { handleNextClick } from '@/features/diagnosis/services/updateProgress';
import theme from '@/shared/styles/theme';

const steps = ['1', '2', '3', '4', '5'];

const DiagnosisPostPage = () => {

  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  const { currentStep, setCurrentStep, initialProgress, getCurrentStepIndex } = useProgress(steps);
  const [progress, setProgress] = useState<number>(initialProgress);

  const nextClickHandler = handleNextClick(
    getCurrentStepIndex,
    steps,
    setStep,
    setCurrentStep,
    setProgress,
  );

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Self-diagnosis</Text>
        <ProgressBar progress={progress} currentStep={currentStep}/>
        <DiagnosisPost steps={steps} nextClickHandler={nextClickHandler} Funnel={Funnel} Step={Step} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal:16,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop:12,
    marginBottom: 48,
  },
});

export default DiagnosisPostPage;
