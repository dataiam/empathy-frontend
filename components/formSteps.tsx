import React from "react";

const FormSteps = () => {
  return (
    <div className="form-step-wrapper">
      <ul className="step-list">
        <li className="active">File Upload</li>
        <li>Recipe Selection</li>
        <li>Data Transformation</li>
        <li>Field Mappings</li>
      </ul>
    </div>
  );
};

export default FormSteps;
