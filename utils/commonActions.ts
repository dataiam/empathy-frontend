'use server';

import { cookies } from "next/headers";

// export async function fetchConsumerId() {
//   try {
//     const response = await fetch("/api/salesforce/consumerId");
//     const data = await response.json();
//     cookies().set('salesforce_key', data.salesforce_key, { secure: true })
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// export const getToken = () => {
//   const token = cookies().get("access_token");
//   console.log(token,'tokentoken')
//   return token;
// };
