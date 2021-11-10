import React from "react";
import web from "./Healthinsurance.jpg";
import web1 from "./motor.jpg";
import web2 from "./accident.jpg";
import web3 from "./overseas.jpg";
import web4 from "./onlinepolicysupport.jpg";
import web5 from "./moreonline.jpg";
const Policy = () => {
  return (
    <div className="Policy">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="Policy">
              <div className="Policy__img">
                <img src={web} alt="Health" className="col-10 mz-auto" />
              </div>
              <h1 className="Policy__heading"> Health Insurance Policy</h1>
              <p className="Policy__text">
              In few easy steps just secure your entire family's health needs ,take a online policy today.
              </p>

              <div className="about__btn">
              <a href="" className="btn btn-smart">
                Explore
              </a>
            </div>

            </div>
          </div>

          <div className="col-4">
            <div className="Policy">
              <div className="Policy__img">
                <img src={web1} alt="vechiles" className="col-10 mz-auto" />
              </div>
              <h1 className="Policy__heading">Motor Policy</h1>
              <p className="Policy__text">
              Just in 4 easy steps, get your Motor Policy (New/Renewal) online. IDV is auto computed by system.
              </p>
              
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                Explore
              </a>
            </div>

            </div>
          </div>

          <div className="col-4">
            <div className="Policy">
              <div className="Policy__img">
              <img src={web2} alt="vechiles" className="col-10 mz-auto" />
              </div>
              <h1 className="Policy__heading">Personal Accident Policy</h1>
              <p className="Policy__text">
              Secure yourself from any unseen eventuality by taking a PA policy. Buy online in few quick steps.
              </p>
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                Explore
              </a>
            </div>
            </div>
          </div>

          <div className="col-4">
            <div className="Policy">
              <div className="Policy__img">
              <img src={web3} alt="vechiles" className="col-10 mz-auto" />
              </div>
              <h1 className="Policy__heading">Overseas Travel Policy</h1>
              <p className="Policy__text">
              Breath easy when you travel overseas with UIIC Overseas Travel Policy.
              </p>

              <div className="about__btn">
              <a href="" className="btn btn-smart">
                Explore
              </a>
            </div>

            </div>
          </div>

          <div className="col-4">
            <div className="Policy">
              <div className="Policy__img">
              <img src={web4} alt="vechiles" className="col-10 mz-auto" />
              </div>
              <h1 className="Policy__heading">Online Policy Support</h1>
              <p className="Policy__text">
              Get our full support to resolve your queries and doubts related to Online Policies.
              </p>
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                Explore
              </a>
            </div>
            </div>
          </div>
          <div className="col-4">
            <div className="Policy">
              <div className="Policy__img">
              <img src={web5} alt="vechiles" className="col-10 mz-auto" />
              </div>
              <h1 className="Policy__heading">More Online Policies</h1>
              <p className="Policy__text">
              Buy a policy from our bouquet of  Online Policies in few easy steps with a click.
              </p>
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                Explore
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
