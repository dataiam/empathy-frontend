
import { FormFieldProps } from "@/types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  labelTitle,
  placeholder,
  name,
  register,
  error,
  classValue,
  valueAsNumber,
}) => (
  <>
    <label className="label" htmlFor={name}>{labelTitle}</label>
    <input
      type={type}
      className={classValue}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="error-message">{error.message}</span>}
  </>
);
export default FormField;