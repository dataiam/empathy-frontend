'use client';
import Image from 'next/image';
import logo from '@public/assets/images/logo.svg';
import googleIcon from '@public/assets/images/google_icon.svg';
import cloudIcon from '@public/assets/images/cloud.svg';
import Link from 'next/link';
import { ButtonImage, Buttons } from '@components/buttons';
import { useForm } from "react-hook-form";
import { FormData, LoginSchema } from "@/types";
import FormField from "@components/formFields";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
      } = useForm<FormData>({
        resolver: zodResolver(LoginSchema), // Apply the zodResolver
      });
      const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    }
  return (
    <section className="login-section">
    {/* <SpreadsheetModal /> */}
    <div className="login-container container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-6">
          <div className="logo-holder">
            <a href="#">
            <Image
              src={logo}
              width={88}
              height={88}
              alt="Logo"
              />
              <span className="sub-title">Sign In or Create an account</span>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="login-wrapper">
            <h2 className="title">Sign In</h2>
            <p className="sub-title">Not a customer? <Link className="sub-text" href="/signup">Try for free</Link></p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <FormField
                type="email"
                labelTitle="Email"
                placeholder="Email"
                name="email"
                register={register}
                error={errors.email}
                classValue="form-control"
                />
              </div>
              <div className="form-group">
                <FormField
                type="password"
                labelTitle="Password"
                placeholder="Password"
                name="password"
                register={register}
                error={errors.password}
                classValue="form-control"
                />
              </div>
              <Buttons type="submit" classValue="btn btn-blue w-100" title="Login"/>
            </form>
            <div className="seperator"><span className="text">OR</span></div>
            <ButtonImage type="button" btnClass="btn btn-blue-outline w-100 mb-3" title="Continue with Google"  imgClass="ico" url={googleIcon} width="16" height="16" alt="google icon"/>
            <Link className="btn btn-blue-outline w-100" target="_blank" href="https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9WVXk15qiz1JnhTsoAkAoWS9NV.xFAQZ8qEC.ZgKDLOaDtBXO4JvnoOCIyvS.KmP4jVkxjWRxkzSnUV4J&redirect_uri=http://localhost:5173/callback&scope=full">
              <Image className="ico" src={cloudIcon} width="16" height="16" alt="cloud icon"/>
              Continue with Salesforce
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LoginForm;