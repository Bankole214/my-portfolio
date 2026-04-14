import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Award, Users } from "lucide-react";
import "./About.css";
import profileImage from "../../assets/images/IMG_5994.jpg";
import resumePDF from "../../assets/images/Nurudeen_Dimeji_CV.pdf";

const About = () => {
  const stats = [
    { icon: <Award className="stat-icon" />, value: "4+", label: "Years Experience" },
    { icon: <Briefcase className="stat-icon" />, value: "50+", label: "Projects Completed" },
    { icon: <Users className="stat-icon" />, value: "20+", label: "Happy Clients" },
  ];

  const timeline = [
    {
      date: "2025 - Present",
      role: "Frontend Developer",
      company: "HireRight",
      description: "Building and maintaining a live job platform serving real users across Nigeria. Developing employer dashboards and application tracking flows using React, TypeScript, and TanStack Query."
    },
    {
      date: "2023 - 2025",
      role: "Junior Developer",
      company: "Deovaze Software Solutions",
      description: "Developing scalable web applications and collaborating with senior developers on enterprise-level projects using modern technologies."
    },
    {
      date: "2021 - 2023",
      role: "Frontend Intern",
      company: "HIIT Plc",
      description: "Developed user-friendly web applications and collaborated with cross-functional teams to implement responsive designs."
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-text-content">
              <div className="about-description">
                <p>
                  Hello! I'm <span className="highlight">Nurudeen Dimeji</span>, a passionate full-stack developer with a love for
                  creating digital solutions that make a difference. With
                  expertise in modern web technologies, I enjoy turning complex
                  problems into simple, beautiful designs.
                </p>
                <p>
                  My goal is to always build products that provide pixel-perfect, 
                  performant experiences. I've worked across different layers of 
                  the stack, but I have a special place in my heart for 
                  Frontend Engineering and UX design.
                </p>
              </div>

              <div className="about-stats-grid">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {stat.icon}
                    <div className="stat-info">
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="about-cta-row">
                <a href={resumePDF} download className="btn btn-primary">
                  Download Resume
                </a>
                <a href="#contact" className="btn btn-outline">
                  Let's Talk
                </a>
              </div>
            </div>

            <div className="experience-timeline">
              <h3 className="timeline-heading">My Journey</h3>
              <div className="timeline-container">
                {timeline.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="timeline-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-content">
                      <h4>{item.role}</h4>
                      <p className="company">{item.company}</p>
                      <p className="description">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;