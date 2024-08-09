declare module 'formidable' {
    import { IncomingForm as FormidableIncomingForm, Fields, Files } from 'formidable';
    
    export interface IncomingForm extends FormidableIncomingForm {
        parse(request: Request, arg1: (err: any, fields: any, files: any) => void): unknown;
}
    
    export const IncomingForm: {
      new (options?: any): IncomingForm;
    };
    
    export type Fields = Fields;
    export type Files = Files;
    export interface File {
        filepath: string;
        originalFilename?: string;
        mimetype?: string;
        size?: number;
      }
  }
  