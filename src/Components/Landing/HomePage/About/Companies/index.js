// import React from 'react'
import { Link } from "react-router-dom";
import { contactPage } from "../../../../../configs/datas/links";

const index = () => {
  return (
    <div className="about-companies">
      <ul className="comp-lists">
        <li className="comp-list">Pro-Tech</li>
        <li className="comp-list">Touch-Tel</li>
      </ul>

      <div className="about-end">
        <p className="about-info">
          Do you have repair store and if you want to work with us please
          <Link to={contactPage} className="about-contact">
            contact us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default index;
