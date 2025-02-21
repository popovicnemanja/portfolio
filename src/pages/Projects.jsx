import GithubFinder from "../assets/GithubFinder.png";
import FeedbackApp from "../assets/FeedbackApp.png";
import Ortoperla from "../assets/Ortoperla.png";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container about__container">
        <div className="projects__wrapper">
          <h1 className="section__title">Projects</h1>
          <ul className="projects__list">
            <li className="projects__item">
              <div className="projects__item-img">
                <img src={Ortoperla} alt="" />
              </div>
              <div className="projects__item-info">
                <p className="projects__item-title">Ortoperla</p>
                <p className="projects__item-description">Ortopedic Aids</p>
                <div className="projects__item-links">
                  <a
                    href="https://www.ortoperla.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="projects__item-link"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/popovicnemanja/perla"
                    className="projects__item-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </li>

            <li className="projects__item">
              <div className="projects__item-img">
                <img src={GithubFinder} alt="" />
              </div>
              <div className="projects__item-info">
                <p className="projects__item-title">Github Finder</p>
                <p className="projects__item-description">
                  App to search GitHub profile and see details.
                </p>
                <div className="projects__item-links">
                  <a
                    href="https://github-finder-smoky-five.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="projects__item-link"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/popovicnemanja/github-finder"
                    className="projects__item-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </li>

            <li className="projects__item">
              <div className="projects__item-img">
                <img src={FeedbackApp} alt="" />
              </div>
              <div className="projects__item-info">
                <p className="projects__item-title">Feedback App</p>
                <p className="projects__item-description">
                  App to leave a feedback for a product or service
                </p>
                <div className="projects__item-links">
                  <a
                    href="https://starlit-selkie-f0caf3.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="projects__item-link"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/popovicnemanja/feedback-app"
                    className="projects__item-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
