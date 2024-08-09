
import { FormFieldUploadProps } from "@/types";

const FormFieldUpload: React.FC<FormFieldUploadProps> = ({
  type,
  id,
  name,
  register,
  classValue,
  valueAsNumber,
  accept
}) => (
  <>
    <input
      type={type}
      className={classValue}
      id={id} accept={accept}
      {...register(name, { valueAsNumber })}
    />
  </>
);
export default FormFieldUpload;