import React from "react";
import { FaAward } from "react-icons/fa";
import "./about.css";
import me from "../../assets/giyuu.gif";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="error" className="h100" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ year </small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Clients</h5>
              <small>Secret</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Let's me introduce about me.
            <br /> I'm self taught developer.I really love with in Coding and
            Researching.
            <br /> See more detail at my CV.
          </p>
          <a href="#contact" className="btn btn-primary flex">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
