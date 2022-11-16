import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BsBook } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import "./nav.css";
import { useState } from "react";

// ES6 Imports
import { Link } from "react-scroll";

const Nav = () => {
  const [checkActive] = useState("home");
  return (
    <nav>
      <Link to="home" spy={true} smooth={true} offset={-70} duration={2}>
        <FaHome />
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-60}
        duration={2}
        className={checkActive === "#about" ? "active" : ""}
      >
        <IoMdContact />
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth={true}
        offset={-60}
        duration={2}
        className={checkActive === "#experience" ? "active" : ""}
      >
        <BsBook />
      </Link>
      <Link
        to="services"
        spy={true}
        smooth={true}
        offset={-60}
        duration={2}
        className={checkActive === "#services" ? "active" : ""}
      >
        <RiCustomerService2Line />
      </Link>

      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-60}
        duration={2}
        className={checkActive === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </Link>
    </nav>
  );
};

export default Nav;
