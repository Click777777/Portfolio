import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/myPortfolio.jpg";
import Img3 from "../../assets/convertor.jpg";
import Img4 from "../../assets/bank.jpg";
import Img5 from "../../assets/management.png";
import Img6 from "../../assets/marketing.png";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Crypto Currency Dashboard ",
    github: "https://github.com/Click777777",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: Img2,
    title: "Portfolio",
    github: "https://github.com/Click777777",
    demo: "https://click777777.github.io/Portfolio/",
  },
  {
    id: 3,
    image: Img3,
    title: "Exchange-Rate-Converter",
    github: "https://github.com/Click777777",
    demo: "https://click777777.github.io/Exchange-Rate-Converter/",
  },
  {
    id: 4,
    image: Img4,
    title: "Morden Bank App",
    github: "https://github.com/Click777777",
    demo: "https://click777777.github.io/Morden-Bank/",
  },
  {
    id: 5,
    image: Img5,
    title: "Management System",
    github: "https://github.com/Click777777",
    demo: "https://click777777.github.io/Management/",
  },
  {
    id: 6,
    image: Img6,
    title: "Marketing",
    github: "https://github.com/Click777777",
    demo: "https://click777777.github.io/Marketing/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_imgae">
                <img src={image} alt="err" />
              </div>
              <h3>{title}</h3>
              <div className="showBtn">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fontBtn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  className="btn btn-primary fontBtn"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
