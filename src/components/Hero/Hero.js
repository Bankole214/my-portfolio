import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import photo from "../../assets/images/IMG_5994.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content">
            <motion.p variants={itemVariants} className="hero-overline">
              Hi, my name is
            </motion.p>
            <motion.h1 variants={itemVariants} className="hero-title">
              Adegunle Nurudeen <span className="highlight">Dimeji.</span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="hero-subtitle">
              I build scalable & user-centric digital solutions.
            </motion.h2>
            <motion.p variants={itemVariants} className="hero-description">
              I'm a full-stack developer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on building 
              high-performance web applications with React and Node.js.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Check out my work!
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="image-wrapper">
              <img
                src={photo}
                alt="Adegunle Nurudeen Dimeji"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="hero-glow"></div>
    </section>
  );
};

export default Hero;