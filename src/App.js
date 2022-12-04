import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Divide as Hamburger } from "hamburger-react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="layout">
        <button
          className={`navButton ${isOpen ? "isOpen" : ""}`}
          onClick={handleClick}
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={isOpen}
        >
          {/* <Hamburger toggled={isOpen} color={"#0d3b80"} /> */}
          <svg className="navButton-icon" viewBox="0 0 100 100">
            <rect class="line top"></rect>
            <rect class="line middle"></rect>
            <rect class="line bottom"></rect>
          </svg>
        </button>
        <Sidebar toggled={isOpen} handleClick={handleClick} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
