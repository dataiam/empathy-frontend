import Image from 'next/image';
import logo from '@public/assets/images/logo.svg';
import googleIcon from '@public/assets/images/google_icon.svg';
import cloudIcon from '@public/assets/images/cloud.svg';
import Link from 'next/link';
import Inputs from '@components/inputs';
import { ButtonImage, Buttons } from '@components/buttons';

const Login = () => {
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
            <p className="sub-title">Not a customer? <Link href="/signup">Try for free</Link></p>
            <form>
              <Inputs id="email" placeholder="Email Address" type="text"/>
              <Inputs id="password" placeholder="Password" type="password"/>
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

export default Login;