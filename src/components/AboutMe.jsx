import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaCode,
  FaGithub,
} from "react-icons/fa";

const skillsData = [
  {
    icon: <FaPython style={{ marginRight: "8px" }} />,
    name: "Python / Django",
    details: "Built backend APIs and web apps with Django and Python.",
    proficiency: 90,
  },
  {
    icon: <FaReact style={{ marginRight: "8px" }} />,
    name: "JavaScript / React",
    details: "Developed interactive UIs with React and modern JavaScript.",
    proficiency: 85,
  },
  {
    icon: <FaDatabase style={{ marginRight: "8px" }} />,
    name: "MySQL / PostgreSQL",
    details: "Designed and optimized relational databases.",
    proficiency: 80,
  },
  {
    icon: <FaCode style={{ marginRight: "8px" }} />,
    name: "REST APIs",
    details: "Created scalable RESTful APIs for web applications.",
    proficiency: 85,
  },
  {
    icon: <FaGithub style={{ marginRight: "8px" }} />,
    name: "Git / GitHub",
    details: "Managed version control and collaboration workflows.",
    proficiency: 90,
  },
];

const timelineData = [
  {
    year: "2025 - Present",
    title: "Full-Stack Developer",
    description: "Developed web applications using Django and React.",
  },
  {
    year: "2023 - 2025",
    title: "Master's Degree in Computer Science",
    description: "Completed postgraduate studies in Computer Science.",
  },
  {
    year: "2020-2023",
    title: "Computer Science Degree",
    description: "Graduated with a B.S. in Computer Science.",
  },
];

const AboutMe = ({ theme = "light" }) => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [expandedTimeline, setExpandedTimeline] = useState(null);

  const toggleSkill = (index) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  const toggleTimeline = (index) => {
    setExpandedTimeline(expandedTimeline === index ? null : index);
  };

  // Animation variants for skills
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      rotateX: 5,
      boxShadow: `0 6px 20px ${theme === "light" ? "rgba(0, 123, 255, 0.3)" : "rgba(33, 161, 241, 0.3)"}`,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for proficiency bar
  const proficiencyVariants = {
    initial: { width: 0 },
    animate: (proficiency) => ({
      width: `${proficiency}%`,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      background: `linear-gradient(90deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #4fc3f7"})`,
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for timeline items
  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      rotate: -2,
      boxShadow: `0 4px 16px ${theme === "light" ? "rgba(0, 123, 255, 0.2)" : "rgba(33, 161, 241, 0.2)"}`,
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for timeline marker
  const markerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.3, transition: { duration: 0.2 } },
  };

  // Animation variants for section divider
  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <style jsx>{`
        .about-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          background: ${theme === "light" ? "linear-gradient(135deg, #f9fafb, #e2e8f0)" : "linear-gradient(135deg, #374151, #1f2937)"};
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          min-height: calc(100vh - 60px);
        }

        .section-divider {
          width: 100%;
          max-width: 800px;
          height: 4px;
          background: linear-gradient(
            to right,
            transparent,
            ${theme === "light" ? "#007bff" : "#21a1f1"},
            transparent
          );
          margin: 2.5rem auto;
          border-radius: 2px;
        }

        .about-section h2,
        .about-section h3 {
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          margin-bottom: 2rem;
          font-weight: 800;
          position: relative;
        }

        .about-section h2 {
          font-size: 2.5rem;
        }

        .about-section h3 {
          font-size: 2rem;
        }

        .about-section h2::after,
        .about-section h3::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #4fc3f7"});
          border-radius: 2px;
        }

        .about-section p {
          max-width: 900px;
          margin: 0 auto 2.5rem;
          line-height: 1.8;
          font-size: 1.15rem;
          opacity: 0.9;
        }

        .skills-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 1.1rem;
          text-align: left;
          max-width: 900px;
          margin: 0 auto;
        }

        .skill-item {
          display: flex;
          align-items: center;
          padding: 16px;
          border-radius: 12px;
          background: ${theme === "light" ? "#ffffff" : "#4b5563"};
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid ${theme === "light" ? "#e5e7eb" : "#6b7280"};
        }

        .skill-item:hover {
          background: ${theme === "light" ? "#f1f5f9" : "#6b7280"};
          border-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
        }

        .skill-details {
          padding: 16px;
          font-size: 1rem;
          color: ${theme === "light" ? "#374151" : "#d1d5db"};
          border-left: 4px solid ${theme === "light" ? "#007bff" : "#21a1f1"};
          margin-left: 40px;
          background: ${theme === "light" ? "#f8fafc" : "#374151"};
          border-radius: 8px;
          margin-top: 8px;
        }

        .proficiency-bar {
          height: 10px;
          background: ${theme === "light" ? "#e5e7eb" : "#6b7280"};
          border-radius: 5px;
          margin-top: 12px;
          overflow: hidden;
        }

        .proficiency-fill {
          height: 100%;
          background: linear-gradient(90deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #4fc3f7"});
        }

        .timeline {
          list-style: none;
          padding: 0;
          text-align: left;
          max-width: 900px;
          margin: 2.5rem auto;
          position: relative;
        }

        .timeline-item {
          padding: 16px 16px 16px 40px;
          margin-bottom: 16px;
          position: relative;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 8px;
          width: 16px;
          height: 16px;
          background: ${theme === "light" ? "#007bff" : "#21a1f1"};
          border-radius: 50%;
          border: 2px solid ${theme === "light" ? "#ffffff" : "#374151"};
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          top: 36px;
          left: 15px;
          width: 2px;
          height: calc(100% - 24px);
          background: ${theme === "light" ? "#e5e7eb" : "#6b7280"};
        }

        .timeline-item:last-child::after {
          display: none;
        }

        .timeline-item:hover {
          background: ${theme === "light" ? "#f1f5f9" : "#4b5563"};
        }

        .timeline-item h4 {
          margin: 0;
          font-size: 1.3rem;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          font-weight: 600;
        }

        .timeline-item p {
          margin: 12px 0 0;
          color: ${theme === "light" ? "#374151" : "#d1d5db"};
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 15px;
          }

          .about-section h2 {
            font-size: 2rem;
          }

          .about-section h3 {
            font-size: 1.75rem;
          }

          .about-section p {
            font-size: 1rem;
            max-width: 100%;
          }

          .skills-list,
          .timeline {
            max-width: 100%;
          }

          .skill-item {
            padding: 12px;
          }

          .skill-details {
            margin-left: 30px;
            font-size: 0.95rem;
          }

          .timeline-item {
            padding: 12px 12px 12px 30px;
          }

          .timeline-item::before {
            left: 6px;
            width: 12px;
            height: 12px;
            top: 16px;
          }

          .timeline-item::after {
            left: 11px;
            top: 28px;
          }
        }
      `}</style>
      <motion.section
        id="about"
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        role="region"
        aria-label="About me section"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I’m a Full-Stack Developer specializing in Python, Django, and React.
          Currently pursuing my Master’s in Computer Science, I enjoy creating
          scalable web apps that solve real problems. With a strong foundation
          from my Bachelor’s degree, I’m passionate about learning new
          technologies and writing clean, efficient code. Outside of tech, I
          love traveling and playing chess.
        </motion.p>
        <motion.div
          className="section-divider"
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills
        </motion.h3>
        <ul className="skills-list" role="list">
          {skillsData.map((skill, index) => (
            <motion.li
              key={index}
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              whileHover="hover"
            >
              <motion.div
                className="skill-item"
                onClick={() => toggleSkill(index)}
                role="button"
                aria-expanded={expandedSkill === index}
                aria-label={`Toggle details for ${skill.name}`}
              >
                {skill.icon}
                {skill.name}
              </motion.div>
              <AnimatePresence>
                {expandedSkill === index && (
                  <motion.div
                    className="skill-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {skill.details}
                    <div className="proficiency-bar">
                      <motion.div
                        className="proficiency-fill"
                        variants={proficiencyVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        custom={skill.proficiency}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="section-divider"
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.h3
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Timeline
        </motion.h3>
        <ul className="timeline" role="list">
          {timelineData.map((item, index) => (
            <motion.li
              key={index}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              whileHover="hover"
            >
              <motion.div
                className="timeline-item"
                onClick={() => toggleTimeline(index)}
                role="button"
                aria-expanded={expandedTimeline === index}
                aria-label={`Toggle details for ${item.title}`}
              >
                <motion.div
                  className="timeline-marker"
                  variants={markerVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                />
                <h4>
                  {item.year}: {item.title}
                </h4>
                <AnimatePresence>
                  {expandedTimeline === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </>
  );
};

export default AboutMe;