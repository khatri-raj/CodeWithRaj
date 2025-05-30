import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage = ({ theme = "light" }) => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "🎓 CourseRec-ML-Study",
        description:
          "A full-stack web application built to help students in Pune compare educational courses and institutes based on fees, placement rates, and student ratings. The platform simplifies the decision-making process by offering easy-to-use comparison tools, real...",
        link: "https://github.com/khatri-raj/Course-Comparison",
        tech_stack: "HTML5, CSS3, Bootstrap, JavaScript, Python, Django, MySQL",
      },
      {
        id: 2,
        title: "🏥 Healthcare Web App – Patient & Doctor Portal with Blog System",
        description:
          "A full-featured healthcare platform built using Django and Bootstrap 5, designed to connect doctors and patients seamlessly. Separate dashboards and profile management for Patients and Doctors, Patients can view doctors, select a specialty, choose a date...",
        link: "https://github.com/khatri-raj/healthcare-app",
        tech_stack: "Python 3, Django 5, HTML5, CSS3, Bootstrap, JavaScript",
      },
      {
        id: 3,
        title: "Serverless Email API",
        description:
          "This is a simple REST API built with the Serverless Framework and Node.js. It allows users to send emails by providing the receiver’s email address, subject, and message body. The project uses Nodemailer with Ethereal email for testing locally and AWS ...",
        link: "https://github.com/khatri-raj/email-api-serverless",
        tech_stack: "JavaScript (Node.js), Serverless Framework, Node.js, AWS",
      },
      {
        id: 4,
        title: "🔐 Secure Blog Portal",
        description:
          "A secure, user-friendly blogging platform built with Django that allows users to create, edit, delete, and manage blog posts. The platform includes robust authentication and authorization features, user profile management, and an admin interface for mana...",
        link: "https://github.com/khatri-raj/Secure_Blog_Portal",
        tech_stack: "Python, Django, HTML5, CSS3, Bootstrap, MySQL",
      },
      {
        id: 5,
        title: "💰 Personal Expense Tracker",
        description:
          "A Django-based web application to manage personal finances. It allows users to add, view, filter, edit, and delete income and expense transactions. It also includes secure authentication, profile management, and planned features like CSV export and chart...",
        link: "https://github.com/khatri-raj/expense-tracker",
        tech_stack: "Python, Django, HTML5, CSS3, Bootstrap, MySQL (development uses SQLite)",
      },
      {
        id: 6,
        title: "🏡 Real Estate Portal",
        description:
          "A full-stack real estate web platform that simplifies the process of property discovery, listing, and user-agent interaction. The portal allows users to search, view, and connect over real estate properties with a responsive design and modern interface...",
        link: "https://github.com/khatri-raj/Real-Estate-Portal",
        tech_stack: "React.js, JavaScript, HTML, CSS, Django (Python), SQLite (configurable to MySQL/PostgreSQL)",
      },
      {
        id: 7,
        title: "🎮 Pygame Classics Collection",
        description:
          "A curated set of three classic games built with Python and Pygame, designed to demonstrate fundamental game development concepts. This project showcases your skills in event handling, collision detection, game loops, and real-time interactivity — makin...",
        link: "https://github.com/khatri-raj/Pygame-Classics-Collection",
        tech_stack: "Python, Pygame library",
      },
    ],
    []
  );

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.tech_stack
          .toLowerCase()
          .split(",")
          .map((tech) => tech.trim())
          .some((tech) => tech.includes(filter.toLowerCase()))
      );
      setFilteredProjects(filtered);
    }
  }, [filter, projects]);

  const handleFilterChange = (tech) => {
    setFilter(tech);
  };

  const techStacks = [
    "all",
    ...new Set(
      projects
        .filter(
          (project) =>
            project.tech_stack && typeof project.tech_stack === "string"
        )
        .flatMap((project) =>
          project.tech_stack.split(",").map((tech) => tech.trim().toLowerCase())
        )
        .filter((tech) => tech)
    ),
  ];

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      boxShadow: `0 8px 24px ${theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  // Animation variants for tech badges
  const badgeVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      backgroundColor: theme === "light" ? "#007bff" : "#21a1f1",
      color: "#fff",
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for project link
  const linkVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: 2,
      backgroundColor: theme === "light" ? "#005bb5" : "#1e88e5",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <>
      <style jsx>{`
        .projects-page {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
          background-color: ${theme === "light" ? "#f9fafb" : "#374151"};
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-height: calc(100vh - 60px);
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          text-align: center;
        }

        .section-divider {
          width: 100%;
          max-width: 600px;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            ${theme === "light" ? "#007bff" : "#21a1f1"},
            transparent
          );
          margin: 2rem auto;
        }

        .projects-page h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          position: relative;
        }

        .projects-page h2::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          border-radius: 2px;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 30px;
        }

        .filter-buttons button {
          padding: 10px 20px;
          border: none;
          border-radius: 20px;
          background-color: ${theme === "light" ? "#e5e7eb" : "#4b5563"};
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-buttons button:hover {
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .filter-buttons button[aria-checked="true"] {
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          color: white;
        }

        .project-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .project-card {
          border: 1px solid ${theme === "light" ? "#e5e7eb" : "#4b5563"};
          border-radius: 12px;
          padding: 24px;
          background-color: ${theme === "light" ? "#fff" : "#4b5563"};
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .project-card h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
        }

        .project-description {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 16px;
          color: ${theme === "light" ? "#444" : "#d1d5db"};
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .tech-badge {
          padding: 6px 14px;
          background-color: ${theme === "light" ? "#e0f0ff" : "#4b5563"};
          color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          border-radius: 16px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
        }

        .project-link::after {
          content: "→";
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .project-link:hover::after {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .projects-page {
            padding: 40px 15px;
          }

          .projects-page h2 {
            font-size: 2rem;
          }

          .project-card {
            padding: 20px;
          }

          .project-card h3 {
            font-size: 1.5rem;
          }

          .project-description {
            font-size: 0.95rem;
          }

          .tech-badge {
            font-size: 0.85rem;
            padding: 5px 12px;
          }

          .project-link {
            padding: 8px 16px;
            font-size: 0.9rem;
          }

          .section-divider {
            max-width: 100%;
          }

          .project-list {
            max-width: 100%;
          }
        }
      `}</style>
      <motion.section
        className="projects-page"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        aria-label="Projects section"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>
        <div className="section-divider" />
        <div className="filter-buttons" role="radiogroup" aria-label="Project filters">
          {techStacks.map((tech, index) => (
            <motion.button
              key={tech}
              onClick={() => handleFilterChange(tech)}
              role="radio"
              aria-checked={filter === tech}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </motion.button>
          ))}
        </div>
        <div className="section-divider" />
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            <div className="project-list" role="list">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="project-card"
                  role="listitem"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover="hover"
                  exit="exit"
                  tabIndex={0}
                  aria-label={`Project: ${project.title}`}
                >
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack" aria-label="Tech stack used">
                    {project.tech_stack
                      .split(",")
                      .map((tech) => tech.trim())
                      .map((tech, i) => (
                        <motion.span
                          key={i}
                          className="tech-badge"
                          variants={badgeVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          {tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </motion.span>
                      ))}
                  </div>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      variants={linkVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      View Project
                    </motion.a>
                  )}
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.p
              key="no-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              No projects found for the selected filter.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
};

export default ProjectsPage;