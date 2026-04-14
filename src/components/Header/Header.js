import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="logo"
          >
            <a href="#home">
              <span className="logo-accent">N</span>D.
            </a>
          </motion.div>

          <ul className="nav-links">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <a href={link.href} className="nav-link">
                  <span className="link-number">0{i + 1}.</span> {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X color="var(--accent)" /> : <Menu color="var(--accent)" />}
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="mobile-menu"
              >
                <ul className="mobile-nav-links">
                  {navLinks.map((link, i) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="link-number">0{i + 1}.</span> {link.name}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a 
                      href="/CV.pdf" 
                      className="btn btn-primary"
                      style={{ marginTop: '20px' }}
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;
