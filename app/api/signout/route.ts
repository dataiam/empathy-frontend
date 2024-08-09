// pages/api/auth/signout.ts
import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';

export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL('/auth/login', req.url).toString());
  res.headers.append('Set-Cookie', cookie.serialize('access_token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0), // Setting expiry to a past date
  }));

  return res;
}
