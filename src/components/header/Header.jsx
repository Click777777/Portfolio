import React from "react";
import Cta from "./Cta";
import Me from "../../assets/cartonC.gif";
import HeaderSocial from "./HeaderSocial";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container" id="home">
        <h5>Hello I'm</h5>
        <h1>Henary Vike</h1>
        <h5 className="text-light">Front-End Developer</h5>

        <Cta />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="Error" className="wImg" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
