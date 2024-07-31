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

const SignupForm = () => {
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
            <h2 className="title">Sign Up</h2>
            <p className="sub-title">Already have an account? <Link className="sub-text" href="/login">Sign In</Link></p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <FormField
                type="text"
                placeholder="Full Name"
                labelTitle="Full Name"
                name="fullName"
                id="fullName"
                register={register}
                error={errors.email}
                classValue="form-control"
                />
              </div>
              <div className="form-group">
                <FormField
                type="email"
                placeholder="Email"
                labelTitle="Email"
                name="email"
                id="email"
                register={register}
                error={errors.email}
                classValue="form-control"
                />
              </div>
              <div className="form-group">
                <FormField
                type="password"
                placeholder="Password"
                labelTitle="Password"
                name="password"
                id="password"
                register={register}
                error={errors.password}
                classValue="form-control"
                />
              </div>
              <Buttons type="submit" classValue="btn btn-blue w-100" title="Login"/>
            </form>
            <div className="seperator"><span className="text">OR</span></div>
            <ButtonImage type="button" btnClass="btn btn-blue-outline w-100 mb-3" title="Continue with Google"  imgClass="ico" url={googleIcon} width="16" height="16" alt="google icon"/>
            <ButtonImage type="button" btnClass="btn btn-blue-outline w-100" title="Continue with Salesforce"  imgClass="ico" url={cloudIcon} width="16" height="16" alt="cloud icon"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SignupForm;