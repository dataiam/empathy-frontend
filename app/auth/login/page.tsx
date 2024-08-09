import { redirect } from "next/navigation";
import LoginForm from "./loginForm";
import "@styles/login.scss";
import { cookies } from "next/headers";

const getToken = () => {
  const token = cookies().get('access_token');
  return token;
};
const LoginPage = async () => {
  const token = getToken();
  
  if (typeof token !== 'undefined') {
    redirect("/dashboard");
  } else {
    return <LoginForm />;
  }
};

export default LoginPage;
