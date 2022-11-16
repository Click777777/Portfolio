import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a
        href="https://m.me/HenaryVikes"
        className="footer_logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Real Coder
      </a>

      <ul className="permaLinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/HenaryVikes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.instagram.com/real_coder_one"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
      </div>

      {/* <small>&copy; RealCoder.All rights reserved.</small> */}
    </footer>
  );
};

export default Footer;
