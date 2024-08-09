'use client';
import Image from "next/image";
import logo from "@public/assets/images/logo.svg";
import loggedInUser from "@public/assets/images/user.png";
import Navbar from "./navbar";
import '@styles/header.scss';

const Header = () => {
 
  return (
    <header className="header">
      <div className="row">
        <div className="col-1 col-md-6">
          <a href="#">
            <Image className="logo" src={logo} width={32} height={32} alt="Logo" />
          </a>
        </div>
        <div className="col-6 order-md-2 order-3">
          <ul className="top-nav">
            <li>
              <a href="#">
                <span aria-hidden="true" className="ico icon-question"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span aria-hidden="true" className="ico icon-bell"></span>
              </a>
            </li>
            <li>
              <div className="btn-group user-btn">
                <button
                  type="button"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <div className="img-holder">
                    <Image src={loggedInUser} width={30} height={30} alt="Loggedin user" />
                  </div>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="/api/signout" className="dropdown-item" type="button">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-12 col-5 order-md-3 order-2">
          <Navbar/>
        </div>
      </div>
    </header>
  );
};

export default Header;
