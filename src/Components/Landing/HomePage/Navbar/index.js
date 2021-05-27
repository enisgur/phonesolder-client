// import React from "react";
import { Link } from "react-router-dom";
import {
  homePage,
  trackOrderPage,
  getQuotePage,
} from "../../../../configs/datas/links";

const index = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={homePage}>PhoneSolder</Link>
      </div>
      <ul className="nav">
        <li>
          <Link to={trackOrderPage}>Track Order</Link>
        </li>
        <li>
          <Link to={getQuotePage} className="hero-button">
            Get Quote
          </Link>
          {/* <a className="hero-button" href="quote.html">
            Get Quote
          </a> */}
        </li>
      </ul>
    </div>
  );
};

export default index;
