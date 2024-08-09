import NextAuth from "next-auth";
import Salesforce from "next-auth/providers/salesforce";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Salesforce({
      clientId: process.env.AUTH_SALESFORCE_ID,
      clientSecret: process.env.AUTH_SALESFORCE_SECRET,
       // The Salesforce OAuth endpoints
       authorization: {
        url: 'http://172.30.1.144//api/user/salesforce/auth/',
        params: {
          response_type: 'code',
          client_id: process.env.AUTH_SALESFORCE_ID,
          redirect_uri: 'http://localhost:3000/api/auth/callback/salesforce',
          scope: 'full',
          code_challenge_method: 'S256',
        },
      },
     //  token: 'https://login.salesforce.com/services/oauth2/token',
     //  userinfo: 'https://login.salesforce.com/services/oauth2/userinfo',
       profile: (profile) => {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          accessToken: profile.access_token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect URL:', url);
      console.log('Base URL:', baseUrl);
      try {
        new URL(url); // This will throw if the URL is invalid
        return url.startsWith(baseUrl) ? url : baseUrl;
      } catch (error) {
        console.error('Invalid URL:', error);
        return baseUrl;
      }
    },
  },
});
