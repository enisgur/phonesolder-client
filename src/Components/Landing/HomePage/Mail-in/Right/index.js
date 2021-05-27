// import React from 'react'
import { Link } from "react-router-dom";
import { mailInPage } from "../../../../../configs/datas/links";

const index = () => {
  return (
    <div className="mail-right">
      <div className="reg-title">Mail-In Repair</div>
      <ul className="mail-steps">
        <li className="step start">
          <div className="step-title">Get Quote</div>
          <div className="step-arrow"></div>
          <div className="step-desc">
            Contact us and tell us what kind of issue do you have with your
            phone
          </div>
        </li>
        <li className="step right">
          <div className="step-title">Send it</div>
          <div className="step-arrow"></div>
          <div className="step-desc">
            Pack your phone and send it to our repair center
          </div>
        </li>
        <li className="step left">
          <div className="step-title">We will Fix</div>
          <div className="step-arrow"></div>
          <div className="step-desc">
            We will start working on your device as soon as we receive it
          </div>
        </li>
        <li className="step end">
          <div className="step-title">Receive it DONE !</div>
          <div className="step-arrow"></div>
          <div className="step-desc">
            When the repair is done. We will send you back
          </div>
        </li>
      </ul>
      <Link to={mailInPage} className="mail-info">
        Check here for more information
      </Link>
    </div>
  );
};

export default index;
