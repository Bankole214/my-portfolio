import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Layout, Smartphone, Github } from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="category-icon" />,
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Server className="category-icon" />,
      skills: ["Node.js", "Express", "Python", "REST APIs", "Authentication"]
    },
    {
      title: "Database & Tools",
      icon: <Database className="category-icon" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Git / GitHub", "Cloudinary"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, i) => (
              <motion.div 
                key={i} 
                className="skill-category-card"
                variants={itemVariants}
              >
                <div className="category-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                <ul className="skill-list">
                  {category.skills.map((skill, j) => (
                    <li key={j} className="skill-tag">
                      <span className="bullet">▹</span> {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
