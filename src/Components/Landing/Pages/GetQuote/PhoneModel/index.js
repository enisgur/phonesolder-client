// import React from 'react'
import { Link } from "react-router-dom";

import Footer from "../../../Footer";

import "../../../../../css/quote2.css";
import { imgLogo } from "../../../../../configs/datas/staticDatas";

const index = () => {
  return (
    <>
      <div className="quote-page">
        <header>
          <nav>
            <Link to="/">
              <img src={imgLogo} alt="logo phonesolder" />
            </Link>
          </nav>
        </header>

        <section className="titles">
          <h1 className="title">Quote</h1>
          <h2 className="sub-title">Choose Your Model</h2>
        </section>

        <section className="models">
          <Link className="model" to="/getquote/samsung">
            Samsung
          </Link>
          <Link className="model" to="/getquote/apple">
            Apple
          </Link>
          <Link className="model" to="/getquote/other">
            Other
          </Link>
          {/* <a className="model" href="getquote.html">
          Samsung
        </a>
        <a className="model" href="getquote.html">
          Apple
        </a>
        <a className="model" href="getquote.html">
          Other
        </a> */}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default index;
