'use client'
import React, { FC } from "react";
import useMultiStepForm from "@utils/useMultiStepForm";
import CreateNewJobForm from "./createNewJobForm";
import RecipeSelectionForm from "./recipeSelectionForm";

const CreateJobModal = () => {
  const { steps, step, isFirstStep, isLastStep, backToPrevStep, goToNextStep } = useMultiStepForm([<CreateNewJobForm/>, <RecipeSelectionForm/>]);
 
  return (
    <div
      className="createJModal modal custom-modal fade"
      id="createJobModal"
      aria-labelledby="createJobModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="createJobModalLabel">
              New Job
            </h2>
            <button
              type="button"
              className="btn close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ><span className="ico icon-cross" aria-hidden="true"></span></button>
          </div>
          <div className="modal-body">
            <div className="selection-wrapper">
              <div className="separator-upload" aria-hidden="true"></div>
            </div>
            <div className="separator-holder">
              <p className="label-info">Select File</p>
              <p className="label-info">Recipe Selection</p>
            </div>
           {step}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-blue-outline md"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            {!isFirstStep && <button
              type="button"
              className="btn btn-blue-outline md"
              onClick={backToPrevStep}
            >
              Back
            </button>}
            <button type="button" className="btn btn-blue md" onClick={goToNextStep}>
              {isLastStep ? "Finish" : "Next: Recipe Selection"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;
