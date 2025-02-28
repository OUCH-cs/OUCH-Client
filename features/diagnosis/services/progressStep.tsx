const navigateOrSetStep = (
    index: number,
    steps: string[],
    setStep: (step: string) => void,
    setCurrentStep: (step: string) => void,
    setProgress: (progress: number) => void,
  ) => {
    if (index >= 0 && index < steps.length) {
      const nextStep = steps[index];
      setStep(nextStep);
      setCurrentStep(nextStep);
      setProgress(((index + 1) / steps.length) * 100);
    }
  };
  
  export const handleNextClick =
    (
      getCurrentStepIndex: () => number,
      steps: string[],
      setStep: (step: string) => void,
      setCurrentStep: (step: string) => void,
      setProgress: (progress: number) => void,
    ) =>
    () => {
      const nextIndex = getCurrentStepIndex() + 1;
      navigateOrSetStep(nextIndex, steps, setStep, setCurrentStep, setProgress);
    };


    