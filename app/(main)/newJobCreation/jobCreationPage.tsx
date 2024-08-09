"use client";
import CreateNewJobForm from "@components/createNewJobForm";
import FormSteps from "@components/formSteps";
import RecipeSelectionForm from "@components/recipeSelectionForm";
import useMultiStepForm from "@utils/useMultiStepForm";
import React from "react";

const JobCreationPage = () => {
  const { steps, step, isFirstStep, isLastStep, backToPrevStep, goToNextStep } =
    // eslint-disable-next-line react/jsx-key
    useMultiStepForm([<CreateNewJobForm />]);

  return (
    <div className="createJModal">
      <FormSteps />
      {step}
    </div>
  );
};

export default JobCreationPage;
