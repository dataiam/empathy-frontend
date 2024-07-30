import { FormData, CreateJobSchema } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./formFields";
import Image from "next/image";
import googleDrive from "@public/assets/images/google_drive.png";
import cloud from "@public/assets/images/cloud_img.png";
import ftp from "@public/assets/images/ftp.png";

const CreateNewJobForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(CreateJobSchema), // Apply the zodResolver
  });
  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
}
  return (
    <form className="createJobForm">
      <div className="form-group">
        <FormField
          type="text"
          labelTitle="Job Name"
          placeholder="Type job name..."
          name="jobName"
          register={register}
          error={errors.jobName}
          classValue="form-control"
        />
      </div>
      <div className="upload-section">
        <div className="upload-file-wrapper"></div>
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
    </form>
  );
};

export default CreateNewJobForm;
