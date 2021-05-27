// import React from 'react'
import { Link } from "react-router-dom";
import { aboutPage } from "../../../../../configs/datas/links";

const index = () => {
  return (
    <section className="about-popup">
      <div className="popup-mid">
        <p className="inner-popup">
          We are working with professional companies who repair broken phones,
          tablets, and any other electronic devices.
        </p>
        <p className="inner-popup">
          Our goal is to find the best solution for your damaged device to solve
          the problems. We all have valid certificates and degrees for this
          purpose.
        </p>
        <div className="popup-btn">
          <Link to={aboutPage}>Read more...</Link>
        </div>
      </div>
    </section>
  );
};

export default index;
