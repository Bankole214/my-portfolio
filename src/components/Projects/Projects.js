import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "./Projects.css";
import ProjectCard1 from "../../assets/images/E-commerce.png";
import ProjectCard2 from "../../assets/images/Task-management-app.png";
import ProjectCard3 from "../../assets/images/personal_finance_tracker.png"
import ProjectCard4 from "../../assets/images/Nigeria_holiday_calendar.png";
import ProjectCard5 from "../../assets/images/QR-CODE.png";
import ProjectCard6 from "../../assets/images/GAME.png"
import ProjectCard7 from "../../assets/images/invoice.png";
import ProjectCard8 from "../../assets/images/efficiency.png"
import ProjectCardHireRight from "../../assets/images/Hireright.png"

const Projects = () => {
  const projects = [
    {
      title: "Efficiency Furniture",
      description: "A live full-stack e-commerce platform with real users, featuring product listings, Cloudinary-powered media, Firebase integration, and a dual payment flow (full payment & deposit) via Paystack.",
      technologies: ["React", "Node.js", "MongoDB", "Paystack", "Firebase", "Cloudinary"],
      github: "https://github.com/Bankole214/efficiency.NG",
      demo: "https://efficiencyfurniture.com.ng/",
      image: ProjectCard8,
    },
    {
      title: "HireRight",
      description: "A live job platform with real users, connecting candidates and employers across Nigeria. Focus on employer dashboards, candidate management, and role-based auth.",
      technologies: ["React", "TypeScript", "TanStack Query", "shadcn/ui", "sonner"],
      github: "#",
      demo: "https://hirerightapp.com",
      image: ProjectCardHireRight,
    },
    {
      title: "E-Commerce Solution",
      description: "A full-stack e-commerce solution with product listings, cart management, and Stripe integration, built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AtlasDB"],
      github: "https://github.com/Bankole214/mernstack",
      image: ProjectCard1,
    },
    {
      title: "Task Management",
      description: "Real-time task management application with Firebase backend, featuring live updates and intuitive task organization.",
      technologies: ["React", "Firebase", "Material-UI", "JQuery"],
      github: "https://github.com/Bankole214/TO_DO-APP-WITH-JQUERY",
      demo: "https://bankole214.github.io/TO_DO-APP-WITH-JQUERY/",
      image: ProjectCard2,
    },
    {
      title: "Personal Finance",
      description: "A finance tracking app to monitor income, expenses, and savings with an interactive dashboard.",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/Bankole214/PERSONAL_FINANCE_TRACKER",
      demo: "https://bankole214.github.io/PERSONAL_FINANCE_TRACKER/",
      image: ProjectCard3,
    },
    {
      title: "Invoice Generator",
      description: "A collaborative invoice generator for freelancers with automated PDF generation and tracking.",
      technologies: ["React", "Material-UI", "JavaScript"],
      github: "https://github.com/Bankole214/freelance-invoice-generator",
      demo: "https://freelance-invoice-generator-sigma.vercel.app/",
      image: ProjectCard7,
    },
    {
      title: "Nigeria Holidays Calendar",
      description: "A web app that lists all Nigerian public holidays, integrated with the Google Calendar API to help users track and plan around official holidays.",
      technologies: ["React", "Firebase", "Material-UI", "Google Calendar API"],
      github: "https://github.com/Bankole214/FRONTEND-AUTH-CALENDER",
      demo: "https://frontend-auth-calender.vercel.app/",
      image: ProjectCard4,
    },
    {
      title: "Quick Response QR Code",
      description: "A lightweight browser-based tool that instantly generates QR codes from any URL or text input, built with vanilla HTML, CSS, and JavaScript.",
      technologies: ["Html", "css", "Material-UI", "JavaScript"],
      github: "https://github.com/Bankole214/QR_CODE_GENERATOR",
      demo: "https://bankole214.github.io/QR_CODE_GENERATOR/",
      image: ProjectCard5,
    },
    {
      title: "Simple Rock Paper Scissors Game",
      description: "A fun interactive Rock Paper Scissors game with score tracking and instant game results, built with vanilla HTML, CSS, and JavaScript.",
      technologies: ["Html", "css", "Material-UI", "JavaScript"],
      github: "https://github.com/Bankole214/ROCK-PAPER-SCISSORS-WITH-JS",
      demo: "https://bankole214.github.io/ROCK-PAPER-SCISSORS-WITH-JS/",
      image: ProjectCard6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Some Things I've Built</h2>
          
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-box">
                  <div className="image-overlay-tint"></div>
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub Link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="icon-link" aria-label="Live Demo Link">
                        <ExternalLink strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
