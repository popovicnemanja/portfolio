import Profile from "../assets/hero_img.jpeg";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

const Home = () => {
  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__content-img">
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
              href="https://drive.google.com/file/d/1gnZDtwzVnEtw-1Ne_9A39ZOSwRy7tA2g/view"
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
                >
                  <RiLinkedinBoxFill size={30} fill="#2d6dce" />
                </a>
              </li>
              <li className="social__icon">
                <a
                  href="https://github.com/popovicnemanja"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiGithubFill fill="#2d6dce" size={30} />
                </a>
              </li>
              <li className="social__icon">
                <a
                  href="mailto:nemanjaapopovic@gmail.com"
                  target="_blank"
                  rel="noreferrer"
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

// TODO

// Check containers inside both pages and padding of home__content wrapper and about__content-wrapper
