import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { SiMessenger } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_dzgjd9m",
        "template_ioosw8j",
        form.current,
        "_IDnjCaH-maB1PHtM" //public key
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className="onlyContact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contacts">
          <article className="about_contact">
            <HiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <h5 className="text-light">absenceisbeautyinerrrorlog@gmail.com</h5>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="about_contact">
            <SiMessenger className="contact_icon" />
            <h4>Messenger</h4>
            <h5 className="text-light">Henary Vike</h5>
            <a
              href="https://m.me/HenaryVikes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="about_contact">
            <FaTelegram className="contact_icon" />
            <h4>Telegram</h4>
            <h5 className="text-light">Username : code_no_jutu</h5>
            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Now
            </a>
          </article>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="marTop btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
