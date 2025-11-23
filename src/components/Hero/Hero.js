import React from "react";
import "./Hero.css";
import photo from "../../assets/images/IMG_5994.jpg";
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Adegunle Nurudeen Dimeji</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I create amazing web experiences using modern technologies.
            Passionate about clean code and user-friendly design.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image-container">
            <img
              src={photo}
              alt="Adegunle Nurudeen Dimeji"
              className="profile-image"
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;