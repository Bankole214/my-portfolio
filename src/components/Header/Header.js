import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <a href="#home">Adegunle Nurudeen Dimeji</a>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
            <li>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>

          <div
            className={`hamburger ${isMenuOpen ? "toggle" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
