import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string;
    user?: {
      accessToken?: string;
    } & DefaultUser;
  }

  interface User extends DefaultUser {
    accessToken?: string;
  }
}
