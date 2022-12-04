import React from "react";
import Logo from "../assets/logo.svg";
import { RiHome4Line, RiUser3Line, RiPhoneLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ toggled, handleClick }) => {
  return (
    <aside
      data-state={toggled ? "opened" : "closed"}
      className={`sidebar ${toggled ? "isVisible" : ""}`}
    >
      <div className="logo">
        <img src={Logo} alt="Logo" style={{ width: "36px" }} />
      </div>
      <nav className="nav">
        <ul className="nav__list" id="navigation">
          <li className="nav__item">
            <Link
              to="/"
              className="nav__link"
              onClick={handleClick}
              aria-Label="Home"
            >
              <RiHome4Line size={30} />{" "}
              <span className="nav__link-text">Home</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/about"
              className="nav__link"
              onClick={handleClick}
              aria-Label="About"
            >
              <RiUser3Line size={30} />{" "}
              <span className="nav__link-text">About</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/projects"
              className="nav__link"
              onClick={handleClick}
              aria-Label="Projects"
            >
              <MdWorkOutline size={30} />{" "}
              <span className="nav__link-text">Projects</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/contact"
              className="nav__link"
              onClick={handleClick}
              aria-Label="Contact"
            >
              <RiPhoneLine size={30} />{" "}
              <span className="nav__link-text">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <footer className="copyrights">
        <p>&copy; 2022</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
