import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError, AxiosResponse } from 'axios';
import cookie from 'cookie';
import qs from 'qs';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'Authorization code is missing' }, { status: 400 });
  }

  const payload = {
    code,
    redirect_uri: process.env.NEXT_PUBLIC_SALESFORCE_REDIRECT_URI,
    flow: 'login',
  };

  const encodedData = qs.stringify(payload);
  const tokenEndpoint = process.env.API_HOST_LOCAL_URL+'/api/user/salesforce/auth/';

  try {
    const tokenResponse: AxiosResponse<TokenResponse> = await axios.post<TokenResponse>(tokenEndpoint, encodedData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { token } = tokenResponse.data;
    const userInfoEndPoint = process.env.API_HOST_LOCAL_URL+"/api/user/me/"

    const userResponse: AxiosResponse<UserResponse> = await axios.get<UserResponse>(userInfoEndPoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = userResponse.data;

    const serializedAccessToken = cookie.serialize('access_token', token, { httpOnly: true, path: '/' });

    const res = NextResponse.redirect(new URL('/dashboard', req.url).toString());
    res.headers.append('Set-Cookie', serializedAccessToken);

    return res;
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
}
