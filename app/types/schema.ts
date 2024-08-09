import { z, ZodType } from "zod";

// export const createJobSchema: ZodType<CreateJobFormData> = z.object({
//   jobName: z.string().min(1, {
//     message: "Job Name is required",
//   }),
//   uploadedFile: z.array(z.instanceof(File))
//     .nonempty({ message: "File is required." })
//     .refine(files => files[0].size <= MAX_FILE_SIZE, {
//       message: `Max file size is 5MB.`,
//     })
//     .refine(files => ACCEPTED_FILE_TYPES.includes(files[0].type), {
//       message: ".csv files are accepted.",
//     }),
// });
const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/png'];
export const createJobSchema: ZodType<CreateJobFormData> = z.object({
  jobName: z.string().min(1, {
    message: "Job Name is required",
  }),
  uploadedFile: z
    .any()
    .refine((files) => files?.length == 1, "File is required.")
   // .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    // .refine(
    //   (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
    //   ".csv files are accepted."
    // ),
});

export type CreateJobSchema = z.infer<typeof createJobSchema>