import React from "react";
import HtmlIcon from "../assets/icons/html.png";
import CssIcon from "../assets/icons/css.png";
import JavascriptIcon from "../assets/icons/javascript.png";
import ReactIcon from "../assets/icons/react.png";
import SassIcon from "../assets/icons/sass.png";
import TailwindIcon from "../assets/icons/tailwind.png";
import Webflow from "../assets/icons/webflow.svg";
import VSCode from "../assets/icons/vscode.png";

const About = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <section className="about__content-wrapper">
          <h1 className="section__title">About Me</h1>
          <div className="about__content">
            <p>
              I’m a front-end web developer based in Serbia. My journey as a
              developer started several years ago when my two cousins showed me
              HTML and CSS. In the meanwhile, I changed a lot of different jobs
              until I started to work as a front-end developer at Vyntex.
              Currently, I am spending my time learning React because I am blown
              away by its capabilities and versatility.
            </p>
          </div>
        </section>
        <section className="about__content-wrapper">
          <h2 className="section__title">Skills</h2>
          <ul className="skills__list">
            <li>
              <img src={HtmlIcon} alt="Html icon" />
              <p>Html</p>
            </li>
            <li>
              <img src={CssIcon} alt="Css icon" />
              <p>Css</p>
            </li>
            <li>
              <img src={SassIcon} alt="Sass icon" />
              <p>Sass</p>
            </li>
            <li>
              <img src={TailwindIcon} alt="Tailwind icon" />
              <p>Tailwind</p>
            </li>
            <li>
              <img src={JavascriptIcon} alt="Javascript icon" />
              <p>Javascript</p>
            </li>
            <li>
              <img src={ReactIcon} alt="React icon" />
              <p>React</p>
            </li>
            <li>
              <img src={Webflow} alt="Webflow icon" />
              <p>Webflow</p>
            </li>
            <li>
              <img src={VSCode} alt="VSCode icon" />
              <p>VS Code</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;
