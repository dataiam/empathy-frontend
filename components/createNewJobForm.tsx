import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./formFields";
import Image from "next/image";
import googleDrive from "@public/assets/images/google_drive.png";
import cloud from "@public/assets/images/cloud_img.png";
import ftp from "@public/assets/images/ftp.png";
import UploadFile from "./uploadFile";
import useMultiStepForm from "@utils/useMultiStepForm";
import RecipeSelectionForm from "./recipeSelectionForm";
import { useEffect, useState } from "react";
import { CreateJobSchema, createJobSchema } from "@app/types/schema";
import axios from "axios";

const CreateNewJobForm = () => {
  const { steps, step, isFirstStep, isLastStep, backToPrevStep, goToNextStep } =
    // eslint-disable-next-line react/jsx-key
    useMultiStepForm([<CreateNewJobForm />, <RecipeSelectionForm/>]);
    const [fileName, setFileName] =  useState('');
   
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid},
    setError,
    watch,
    setValue
  } = useForm<CreateJobSchema>({
    resolver: zodResolver(createJobSchema),
    mode: "onChange" // Apply the zodResolver
  });
  const removeUploadedFile = () => {
    setFileName("");
    setValue('uploadedFile', undefined);
  }
  const getUploadedFileContent = () => {
    const jobUploadedFile = watch('uploadedFile');
    if(jobUploadedFile) 
      Object.values(jobUploadedFile).map((file)=>(
        setFileName(file.name)
      ));
  }
  useEffect(() => {
    getUploadedFileContent();
  });
  
  const onSubmit = async (data: CreateJobFormData) => {
    console.log("SUCCESS", data);
    const file = data.uploadedFile?.[0];
    if (!file) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    const blob = new Blob([file], { type: "text/csv" });
    formData.append('uploadedFile', blob); // `data.uploadedFile` is an array
    formData.append('jobName', data.jobName);
    try {
      const response = await fetch('/api/createJob', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Upload Result:', result);
    } catch (error) {
      console.error('Upload Error:', error);
    }
}
  return (
    <form className="">
      <div className="createJobForm">
        <h3 className="title">New Job Creation</h3>
        <div className="form-group">
        <label className="label" htmlFor="jobName">Job Name</label>
        <input
          {...register("jobName")}
          type="text"
          className="form-control"
          placeholder="Type job name..."
          id="jobName"/>
          {errors.jobName && (
            <p className="error-message">{`${errors.jobName.message}`}</p>
          )}
        </div>
        <div className="upload-section">
        <div className="upload-wrapper mb-1">
          <div className="upload-box">
          <input
          {...register("uploadedFile")}
          type="file"
          className="upload-input"
          accept=".csv"
          id="uploadedFile"/>
            <button className="btn btn-grey-outline"><span className="ico icon-upload" aria-hidden="true"></span>Upload Files</button>
            <p>or Drop Files here</p>
          </div>
        </div>
        {errors.uploadedFile && (
          <p className="error-message">{`${errors.uploadedFile.message}`}</p>
        )}
        {fileName ? 
          <div className="uploaded-file-preview">
            <h4 className="title">File Uploaded</h4>
            <div className="uploaded-file-holder">
              <p className="title">{fileName}</p>
              <button type="button" className="btn p-0" onClick={removeUploadedFile}><span className="ico icon-delete" aria-hidden="true"></span></button>
            </div>
          </div> 
          : "" }
          <div className="upload-cloud-wrapper">
            <h3 className="title">or Connect & Import from</h3>
            <ul className="upload-item-list">
              <li>
                <a href="#">
                  <Image
                    src={googleDrive}
                    alt="Google drive image"
                    width={66}
                    height={66}
                  />
                  <span className="item-title">Google Drive</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={cloud} alt="Cloud image" width={66} height={66} />
                  <span className="item-title">One Drive</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={ftp} alt="FTP image" width={66} height={66} />
                  <span className="item-title">FTP/STP</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-holder justify-content-end">
        {!isFirstStep && (
          <button
            type="button"
            className="btn btn-blue-outline md"
            onClick={backToPrevStep}
          >
            Back
          </button>
        )}
        <button
          type="button"
          className="btn btn-blue md"
          disabled={!isDirty || !isValid}
          onClick={handleSubmit(onSubmit)}
        >
          {isLastStep ? "Finish" : "Next: Recipe Selection"}
        </button>
      </div>
    </form>
  );
};

export default CreateNewJobForm;
