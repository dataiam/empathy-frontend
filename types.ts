import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
    email?: string;
    password?: string;
    fullName?: string;
    jobName?: string;
  };

  export type FormFieldProps = {
    type: string;
    labelTitle: string;
    placeholder: string;
    name: ValidFieldNames;
    id: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
    classValue:string;
  };
  
  export type ValidFieldNames =
  | "email"
  | "password"
  | "fullName"
  | "jobName";

  export const LoginSchema: ZodType<FormData> = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(1, { message: "Password cannot be empty" })
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
      fullName: z
      .string({
        required_error: "required field",
        invalid_type_error: "Years of Experience is required",
      })
  })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"], // path of error
//   });
export const CreateJobSchema: ZodType<FormData> = z
  .object({
    jobName: z.string({
      required_error: "required field",
      invalid_type_error: "Years of Experience is required",
    }),
  })