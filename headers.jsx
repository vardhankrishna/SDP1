import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>SDP Project</h3>
            <h1>HEALTH & LIFE INSURANCE SYSTEM</h1>
            <p>
              BE AWARE BE ASSURED.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
