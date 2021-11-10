import React from "react";
import web from "./incurance.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
                <h3>About Us</h3>
                <h1>WELCOME TO THE KL POLICIES</h1>
                <p>
                BE AWARE BE ASSURED.
                Make your life safe, get your insurance done immediately.
                </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                Know More
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src={web} alt="insurance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
