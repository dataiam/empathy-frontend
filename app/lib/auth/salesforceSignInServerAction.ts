'use server';

import { signIn } from "@app/lib/auth/authConfig";
import { isRedirectError, redirect } from "next/dist/client/components/redirect";

export const handleSalesforceSignIn = async () => {
    try {
        const result = await signIn('salesforce', { redirect: false });
    console.log(result, 'Sign-in result');
    if (result?.url) {
      console.log('Redirecting to:', result.url);
      redirect(result.url);
    } else {
      console.error('Sign-in result is missing URL or session data');
    }
      } catch (err) {
        console.error('Error during sign-in:', err);
      }
}