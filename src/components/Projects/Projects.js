import React from "react";
import "./Projects.css";
import ProjectCard1 from "../../assets/images/E-commerce.png";
import ProjectCard2 from "../../assets/images/Task-management-app.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe","AtlasDB"],
      github: "https://github.com/Bankole214/mernstack",
      demo: "https://yourproject1.demo.com",
      image: ProjectCard1,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application",
      technologies: ["React", "Firebase", "Material-UI","JQuery", "AJAX"],
      github: "https://github.com/yourusername/project2",
      demo: "https://bankole214.github.io/TO_DO-APP-WITH-JQUERY/",
      image: ProjectCard2,
    },
    {
      title: "Personal Finance Tracker",
      description: "A collaborative Finance Tracker application",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/project2",
      demo: "https://bankole214.github.io/PERSONAL_FINANCE_TRACKER/",
      image: "/project2.jpg",
    },
    {
      title: "Nigeria Holidays Calendar",
      description:
        "A collaborative Nigeria Holidays Calendar application which lists all public holidays in Nigeria",
      technologies: ["React", "Firebase", "Material-UI","Google Calendar API"],
      github: "https://github.com/yourusername/project2",
      demo: "https://frontend-auth-calender.vercel.app/",
      image: "/project2.jpg",
    },
    {
      title: "Quick Response QR Code",
      description: "A collaborative task management application",
      technologies: ["Html", "css", "Material-UI", "JavaScript"],
      github: "https://github.com/Bankole214/QR_CODE_GENERATOR",
      demo: "https://bankole214.github.io/QR_CODE_GENERATOR/",
      image: "/project2.jpg",
    },
    {
      title: "Simple Rock Paper Scissors Game",
      description: "A collaborative task management application",
      technologies: ["Html", "css", "Material-UI", "JavaScript"],
      github: "https://github.com/Bankole214/QR_CODE_GENERATOR",
      demo: "https://bankole214.github.io/QR_CODE_GENERATOR/",
      image: "/project2.jpg",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
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
                  <a href={project.github} className="project-link">
                    GitHub
                  </a>
                  <a href={project.demo} className="project-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
