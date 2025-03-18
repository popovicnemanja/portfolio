import Profile from "../assets/hero_img.jpeg";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

const Home = () => {
  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__img-wrapper">
          <img src={Profile} alt="Profile" />
        </div>
        <div className="home__description">
          <p className="greeting">Hi there! I`am</p>
          <h1 className="home__title">Nemanja Popović</h1>
          <p className="smallBio">
            A <span>Front-End Developer</span> passionate about creating
            interactive websites and web applications according to development
            standards.
          </p>
          <div className="social">
            <a
              href="https://docs.google.com/document/d/12hPVx5K1CMk5YLwwfhok5hZZuU7LXw43HvYtYjuAV58/edit?usp=sharing"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <ul className="social__list">
              <li className="social__icon">
                <a
                  href="https://www.linkedin.com/in/popovicn/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Linkedin"
                >
                  <RiLinkedinBoxFill size={30} fill="#2d6dce" />
                </a>
              </li>
              <li className="social__icon">
                <a
                  href="https://github.com/popovicnemanja"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <RiGithubFill fill="#2d6dce" size={30} />
                </a>
              </li>
              <li className="social__icon">
                <a
                  href="mailto:nemanjaapopovic@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                >
                  <RiMailLine fill="#2d6dce" size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
