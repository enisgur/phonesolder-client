// import React from 'react'
import Background from "./Background-SVG";
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import MailIn from "./Mail-in";

const index = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Main />
      <MailIn />
      <About />
    </>
  );
};

export default index;
