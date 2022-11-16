import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a
        href="https://github.com/Click777777"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
        <AiFillDribbbleCircle />
      </a>
    </div>
  );
};

export default HeaderSocial;
