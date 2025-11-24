import React from "react";
import "./About.css";
import profileImage from "../../assets/images/IMG_5994.jpg";
import resumePDF from "../../assets/images/Nurudeen's CV.pdf";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="profile-image-container">
                <img 
                  src={profileImage} 
                  alt="Nurudeen Dimeji" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                Hello! I'm Nurudeen Dimeji, a passionate full-stack developer with a love for
                creating digital solutions that make a difference. With
                expertise in modern web technologies, I enjoy turning complex
                problems into simple, beautiful designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor
                activities. I believe in continuous learning and staying
                up-to-date with the latest industry trends.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="about-cta">
              <a 
                href={resumePDF} 
                download="Nurudeen-Dimeji-Resume.pdf" 
                className="btn btn-primary"
              >
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="experience-section">
          <h3 className="experience-title">My Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h4>Junior Developer</h4>
                <p>Deovaze Software Solutions</p>
                <p>
                  Developing scalable web applications and collaborating with senior developers
                  on enterprise-level projects using modern technologies.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021 - 2023</div>
              <div className="timeline-content">
                <h4>Frontend Intern</h4>
                <p>HIIT Plc</p>
                <p>
                  Developed user-friendly web applications and collaborated with
                  cross-functional teams to implement responsive designs and improve user experience.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020 - 2021</div>
              <div className="timeline-content">
                <h4>Manager</h4>
                <p>Patience Depot</p>
                <p>
                  Developed strong communication and customer interaction skills while managing
                  daily operations and leading a small team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;