import { ReactElement, useState } from 'react';

const useMultiStepForm = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrentStepindex] = useState(0);

    function goToNextStep() {
        setCurrentStepindex(i => {
            if(i >= steps.length - 1) return i
            return i + 1;
        });
    }

    function backToPrevStep() {
        setCurrentStepindex(i => {
            if(i <= 0) return i
            return i - 1;
        }); 
    }

    function goToFinalStep(index:number){
        setCurrentStepindex(index);
    }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex  === steps.length -1,
    goToFinalStep,
    goToNextStep,
    backToPrevStep
  }
}

export default useMultiStepForm