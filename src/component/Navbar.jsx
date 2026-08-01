import "../CSS/Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [dark]);

  return (
    <nav className="navbar">

      <div className="logo">
        Mansi<span>.</span>
      </div>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setMenu(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenu(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenu(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenu(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setMenu(false)}>Education</a></li>
        <li><a href="#certificates" onClick={() => setMenu(false)}>Certificates</a></li>
        <li><a href="#contact" onClick={() => setMenu(false)}>Contact</a></li>
      </ul>

      <div className="nav-icons">

        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
