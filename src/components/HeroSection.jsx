import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = ({ theme = "light" }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for buttons
  const buttonVariants = {
    initial: { scale: 1, opacity: 0.9 },
    hover: {
      scale: 1.1,
      opacity: 1,
      boxShadow: `0 0 15px ${theme === "light" ? "rgba(0, 123, 255, 0.5)" : "rgba(33, 161, 241, 0.5)"}`,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  // Animation variants for photo
  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 2,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  // Animation variants for social icons
  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15, delay: index * 0.2 },
    }),
    hover: {
      scale: 1.3,
      color: theme === "light" ? "#007bff" : "#21a1f1",
      transition: { duration: 0.3 },
    },
  };

  // Split text for letter-by-letter animation
  const nameText = "Hi, I'm Raj — ";
  const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];

  return (
    <>
      <style jsx>{`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 40px;
          background: ${theme === "light" ? "radial-gradient(circle, #e0f0ff, #f0f8ff)" : "radial-gradient(circle, #374151, #1f2937)"};
          min-height: 100vh;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          flex-wrap: wrap;
          gap: 40px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, 
            ${theme === "light" ? "rgba(0, 123, 255, 0.1), rgba(0, 196, 255, 0.1)" : "rgba(33, 161, 241, 0.1), rgba(79, 195, 247, 0.1)"},
            transparent);
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0% { transform: translateX(-20%) translateY(-20%); }
          50% { transform: translateX(20%) translateY(20%); }
          100% { transform: translateX(-20%) translateY(-20%); }
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
          gap: 60px;
          flex-wrap: wrap;
          z-index: 1;
        }

        .intro-text {
          max-width: 600px;
          text-align: left;
          flex: 1;
          min-width: 320px;
        }

        .intro-text h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
        }

        .typed-text {
          color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          font-weight: bold;
          display: inline-block;
          min-height: 1.5em;
          vertical-align: middle;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .typed-text span {
          display: inline-block;
          animation: typing 9s steps(30, end) infinite;
        }

        @keyframes typing {
          0%, 20% { content: "${roles[0]}"; opacity: 1; }
          25%, 45% { content: "${roles[1]}"; opacity: 1; }
          50%, 70% { content: "${roles[2]}"; opacity: 1; }
          75%, 100% { content: "${roles[0]}"; opacity: 1; }
        }

        .intro-text p {
          font-size: 1.4rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
        }

        .hero-buttons a {
          padding: 14px 28px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          color: white;
          text-align: center;
          min-width: 160px;
          background: ${theme === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(75, 85, 99, 0.2)"};
          backdrop-filter: blur(10px);
          border: 1px solid ${theme === "light" ? "rgba(0, 123, 255, 0.3)" : "rgba(33, 161, 241, 0.3)"};
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .hero-buttons a:nth-child(1) {
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
        }

        .hero-buttons a:nth-child(1):hover {
          background-color: ${theme === "light" ? "#005bb5" : "#1e88e5"};
        }

        .hero-buttons a:nth-child(2) {
          background-color: ${theme === "light" ? "#6b7280" : "#9ca3af"};
        }

        .hero-buttons a:nth-child(2):hover {
          background-color: ${theme === "light" ? "#4b5563" : "#6b7280"};
        }

        .hero-buttons a:nth-child(3) {
          background-color: ${theme === "light" ? "#10b981" : "#34d399"};
        }

        .hero-buttons a:nth-child(3):hover {
          background-color: ${theme === "light" ? "#059669" : "#22c55e"};
        }

        .hero-buttons a::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }

        .hero-buttons a:hover::before {
          width: 200px;
          height: 200px;
        }

        .hero-buttons a.downloading::after {
          content: "✓ Downloaded";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${theme === "light" ? "#10b981" : "#34d399"};
          color: white;
          font-size: 1rem;
          animation: fadeInOut 2s ease-in-out;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }

        .hero-photo {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 320px;
          position: relative;
        }

        .hero-photo img {
          width: 400px;
          height: 400px;
          object-fit: cover;
          border-radius: 50%;
          border: 5px solid ${theme === "light" ? "#007bff" : "#21a1f1"};
          background-color: ${theme === "light" ? "#fff" : "#4b5563"};
          position: relative;
          z-index: 1;
        }

        .hero-photo::before {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: linear-gradient(45deg, 
            ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #4fc3f7"});
          opacity: 0.3;
          animation: pulseRing 3s ease-in-out infinite;
        }

        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
          100% { transform: scale(0.95); opacity: 0.3; }
        }

        .social-links {
          display: flex;
          gap: 24px;
          margin-top: 2.5rem;
          justify-content: flex-start;
        }

        .social-links a {
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          font-size: 2.5rem;
          background: ${theme === "light" ? "rgba(255, 255, 255, 0.2)" : "rgba(75, 85, 99, 0.2)"};
          backdrop-filter: blur(10px);
          border-radius: 50%;
          padding: 10px;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: ${theme === "light" ? "rgba(0, 123, 255, 0.3)" : "rgba(33, 161, 241, 0.3)"};
        }

        @media (max-width: 1024px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .intro-text {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .hero-photo img {
            width: 320px;
            height: 320px;
          }

          .hero-photo::before {
            width: 340px;
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 20px;
            min-height: auto;
          }

          .intro-text h1 {
            font-size: 2.5rem;
          }

          .intro-text p {
            font-size: 1.2rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-photo img {
            width: 280px;
            height: 280px;
          }

          .hero-photo::before {
            width: 300px;
            height: 300px;
          }

          .social-links a {
            font-size: 2rem;
            padding: 8px;
          }
        }

        @media (max-width: 480px) {
          .intro-text h1 {
            font-size: 2rem;
          }

          .intro-text p {
            font-size: 1rem;
          }

          .hero-buttons a {
            padding: 12px 20px;
            min-width: 120px;
            font-size: 1rem;
          }

          .hero-photo img {
            width: 220px;
            height: 220px;
          }

          .hero-photo::before {
            width: 240px;
            height: 240px;
          }
        }
      `}</style>
      <section id="home" className="hero-section" aria-label="Hero section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="intro-text"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>
              {nameText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
              <motion.span className="typed-text">
                <AnimatePresence mode="wait">
                  {roles.map((role, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      style={{ position: "absolute" }}
                    >
                      {role}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </motion.span>
            </h1>
            <motion.p variants={textVariants}>
            Building smarter web apps, one line at a time.
            </motion.p>
            <div className="hero-buttons">
              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Link to="/projects" role="button" aria-label="View projects">
                  View Projects
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                <Link to="/contact" role="button" aria-label="Contact me">
                  Contact Me
                </Link>
              </motion.div>
              <motion.a
                href="/resume.pdf"
                download
                className={isDownloading ? "downloading" : ""}
                onClick={handleDownload}
                role="button"
                aria-label="Download resume"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                {isDownloading ? "Downloading..." : "Download Resume"}
              </motion.a>
            </div>
            <div className="social-links">
              <motion.a
                href="https://github.com/khatri-raj"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                whileHover="hover"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rajkhatri2002/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                custom={1}
                whileHover="hover"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="hero-photo"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/your-photo.jpg"
              alt="Raj, Full Stack Developer"
              onError={(e) => (e.target.src = "https://via.placeholder.com/400?text=Profile+Image")}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;