import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import axios, { AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads");

export async function POST(req: NextRequest) {
  try {
    // Parse form data
    const formData = await req.formData();
    const file = formData.get('uploadedFile') as Blob;
    const jobName = formData.get('jobName') as string;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = (file as File).name;

    // Ensure upload directory exists
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    // Write file to disk
    //fs.writeFileSync(path.resolve(UPLOAD_DIR, fileName), buffer);
    const payload  =  {
        file:file,
        name:jobName
    }
      const createJobEndPoint = process.env.API_HOST_LOCAL_URL+'/api/job/';
      const cookieStore = cookies();
      const token = cookieStore.get('access_token');
      try {
        const response = await axios.post(createJobEndPoint, payload, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        });
        return NextResponse.json({
            success: true,
            message: "File uploaded successfully",
            file,
            jobName
          });
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error exchanging code for token:', axiosError.message);
    
        if (axiosError.response) {
          console.error('Error status:', axiosError.response.status);
          console.error('Error data:', axiosError.response.data);
          return NextResponse.json({ error: axiosError.message, details: axiosError.response.data }, { status: axiosError.response.status });
        } else if (axiosError.request) {
          console.error('Error request:', axiosError.request);
          return NextResponse.json({ error: 'No response received from the server' }, { status: 500 });
        } else {
          console.error('Error message:', axiosError.message);
          return NextResponse.json({ error: axiosError.message }, { status: 500 });
        }
      }

    
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ success: false, message: "An error occurred" });
  }
}
