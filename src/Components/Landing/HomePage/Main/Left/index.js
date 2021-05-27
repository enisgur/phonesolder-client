// import React from "react";
import { Link } from "react-router-dom";
import { getQuotePage } from "../../../../../configs/datas/links";

const index = () => {
  return (
    <div className="hero-left">
      <h1 className="hero-title">Phone Soldering</h1>
      <h2 className="hero-desc">
        Your phone is not turning on, touch screen, charging port doesn’t work
        or back glass is broken ?
      </h2>
      <Link to={getQuotePage} className="hero-button">
        Get Quote
      </Link>
    </div>
  );
};

export default index;
