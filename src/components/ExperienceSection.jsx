import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceSection = ({ theme = "light" }) => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    setExperiences([
      {
        id: 1,
        role: "Internship - Java By Kiran",
        company: "Kiran Academy",
        city: "Pune",
        start_date: "2025-01-01",
        end_date: "2025-06-30",
        description:
          "Currently working on a Job Portal project using Python and Django, gaining hands-on experience in full-stack web development. Developing, testing, and deploying features while following best practices.",
        image: "/certificates/Internship_Certificate.png",
        link: "https://drive.google.com/file/d/1FIq_46BiZL1DZMUzLWRdk0s1D9EDvhPP/view",
        details: "Technologies: Python, Django, PostgreSQL, HTML, CSS. Collaborated with a team of 5 to implement RESTful APIs and user authentication.",
      },
      {
        id: 2,
        role: "Intern",
        company: "SoftCrowd Technologies",
        city: "Nashik",
        start_date: "2024-03-13",
        end_date: "2024-04-30",
        description:
          "Completed Python internship, strengthening fundamentals. Training covered core concepts, and I worked on two modules, applying knowledge practically.",
        image: "/certificates/Industrial_Training.jpg",
        link: "https://drive.google.com/file/d/1ixg5jRNlI-W85nxl6Tum4tyZxU3Jb_1m/view?usp=sharing",
        details: "Developed two Python modules for data processing and file handling. Gained proficiency in writing clean, modular code.",
      },
    ]);
    setIsLoading(false);
    setError(null);
  }, []);

  const toggleExpand = (id) => setExpanded(expanded === id ? null : id);
  const highlightCard = (id) => {
    setHighlighted(id);
    toggleExpand(id);
    setTimeout(() => setHighlighted(null), 1000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotate: -2 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      boxShadow: `0 8px 24px ${theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const markerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hover: {
      scale: 1.2,
      boxShadow: `0 0 10px ${theme === "light" ? "#007bff" : "#21a1f1"}`,
      backgroundColor: theme === "light" ? "#0056b3" : "#1a8cd8",
      transition: { duration: 0.2, yoyo: Infinity },
    },
  };

  const dividerVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <>
      <style jsx>{`
        .experience-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
          background-color: ${theme === "light" ? "#f9fafb" : "#374151"};
          border-radius: 16px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          min-height: calc(100vh - 60px);
          text-align: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .section-divider {
          width: 100%;
          max-width: 800px;
          height: 3px;
          background: linear-gradient(to right, transparent, ${theme === "light" ? "#007bff" : "#21a1f1"}, transparent);
          margin: 2.5rem auto;
        }
        .experience-section h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          position: relative;
        }
        .experience-section h2::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          border-radius: 2px;
        }
        .experience-card {
          margin-bottom: 2rem;
          padding: 24px;
          border-radius: 12px;
          background-color: ${theme === "light" ? "#f9fafb" : "#374151"};
          text-align: left;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          cursor: pointer;
          border: 2px solid ${highlighted ? (theme === "light" ? "#007bff" : "#21a1f1") : "transparent"};
          transition: border 0.3s ease;
        }
        .timeline {
          position: absolute;
          left: -30px;
          top: 0;
          bottom: 0;
          width: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline-marker {
          width: 14px;
          height: 14px;
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          border-radius: 50%;
          margin-top: 30px;
          cursor: pointer;
        }
        .timeline-line {
          width: 2px;
          flex-grow: 1;
          background-color: ${theme === "light" ? "#e5e7eb" : "#6b7280"};
        }
        .experience-card h3 {
          margin-bottom: 0.75rem;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          font-size: 1.75rem;
          font-weight: 700;
        }
        .experience-card span,
        .experience-card p {
          color: ${theme === "light" ? "#444" : "#d1d5db"};
          margin-bottom: 0.75rem;
          display: block;
          font-size: 1rem;
          line-height: 1.6;
        }
        .experience-card span strong {
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
        }
        .experience-image {
          width: 100%;
          max-width: 300px;
          height: auto;
          border-radius: 8px;
          margin: 0 auto 1rem;
          display: block;
          border: 1px solid ${theme === "light" ? "#e5e7eb" : "#6b7280"};
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .experience-image:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px ${theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"};
        }
        .experience-link {
          color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .experience-link:hover {
          text-decoration: underline;
        }
        .toggle-button {
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 1rem;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .toggle-button:hover {
          background-color: ${theme === "light" ? "#0056b3" : "#1a8cd8"};
          box-shadow: 0 0 10px ${theme === "light" ? "rgba(0, 123, 255, 0.5)" : "rgba(33, 161, 241, 0.5)"};
        }
        .additional-details {
          margin-top: 1rem;
          padding: 12px;
          background-color: ${theme === "light" ? "#f9fafb" : "#374151"};
          border-radius: 8px;
          color: ${theme === "light" ? "#444" : "#d1d5db"};
        }
        .loading-spinner,
        .error-message {
          font-size: 1.2rem;
          text-align: center;
          padding: 20px;
          color: ${theme === "light" ? "#007bff" : "#21a1f1"};
        }
        .error-message {
          color: ${theme === "light" ? "#dc2626" : "#f87171"};
        }
        .loading-spinner::after {
          content: '';
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-left: 12px;
          border: 4px solid ${theme === "light" ? "#007bff" : "#21a1f1"};
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 768px) {
          .experience-section {
            padding: 60px 15px;
          }
          .experience-section h2 {
            font-size: 2rem;
          }
          .experience-card {
            padding: 20px;
            max-width: 100%;
          }
          .timeline {
            left: -20px;
          }
          .timeline-marker {
            width: 12px;
            height: 12px;
            margin-top: 25px;
          }
          .experience-card h3 {
            font-size: 1.5rem;
          }
          .experience-card span,
          .experience-card p,
          .additional-details {
            font-size: 0.95rem;
          }
          .section-divider {
            max-width: 100%;
          }
          .experience-image {
            max-width: 200px;
          }
          .toggle-button {
            padding: 6px 12px;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <motion.section
        className="experience-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        role="region"
        aria-label="Experience section"
      >
        <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          Experience
        </motion.h2>

        <motion.div className="section-divider" variants={dividerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />

        <AnimatePresence>
          {isLoading ? (
            <motion.div className="loading-spinner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              Loading experiences...
            </motion.div>
          ) : error ? (
            <>
              <motion.div className="section-divider" variants={dividerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
              <motion.div className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                {error}
              </motion.div>
            </>
          ) : experiences.length > 0 ? (
            experiences.map((exp, i) => (
              <React.Fragment key={exp.id}>
                {i > 0 && <motion.div className="section-divider" variants={dividerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />}
                <motion.div
                  className="experience-card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={i}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  onClick={() => toggleExpand(exp.id)}
                  style={{ border: highlighted === exp.id ? `2px solid ${theme === "light" ? "#007bff" : "#21a1f1"}` : "2px solid transparent" }}
                >
                  <div className="timeline">
                    <motion.div
                      className="timeline-marker"
                      variants={markerVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      onClick={(e) => { e.stopPropagation(); highlightCard(exp.id); }}
                    />
                    <div className="timeline-line" />
                  </div>
                  <motion.img
                    src={exp.image}
                    alt={`${exp.company} certificate`}
                    className="experience-image"
                    variants={contentVariants}
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                  />
                  <motion.h3 variants={contentVariants} custom={1} initial="hidden" whileInView="visible">
                    {exp.role}
                  </motion.h3>
                  <motion.span variants={contentVariants} custom={2} initial="hidden" whileInView="visible">
                    <strong>Company:</strong> {exp.company}
                  </motion.span>
                  <motion.span variants={contentVariants} custom={3} initial="hidden" whileInView="visible">
                    <strong>Location:</strong> {exp.city || "N/A"}
                  </motion.span>
                  <motion.span variants={contentVariants} custom={4} initial="hidden" whileInView="visible">
                    <strong>Start Date:</strong> {exp.start_date}
                  </motion.span>
                  <motion.span variants={contentVariants} custom={5} initial="hidden" whileInView="visible">
                    <strong>End Date:</strong> {exp.end_date || "Present"}
                  </motion.span>
                  <motion.p variants={contentVariants} custom={6} initial="hidden" whileInView="visible">
                    {exp.description}
                  </motion.p>
                  <motion.a
                    href={exp.link}
                    className="experience-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={contentVariants}
                    custom={7}
                    initial="hidden"
                    whileInView="visible"
                  >
                    View {exp.company} Certificate
                  </motion.a>
                  <motion.div variants={contentVariants} custom={8} initial="hidden" whileInView="visible">
                    <button
                      className="toggle-button"
                      onClick={(e) => { e.stopPropagation(); toggleExpand(exp.id); }}
                    >
                      {expanded === exp.id ? "Hide Details" : "Show Details"}
                    </button>
                  </motion.div>
                  <AnimatePresence>
                    {expanded === exp.id && (
                      <motion.div
                        className="additional-details"
                        initial={{ opacity: 0, height: 0, x: -20 }}
                        animate={{ opacity: 1, height: "auto", x: 0 }}
                        exit={{ opacity: 0, height: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p>{exp.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </React.Fragment>
            ))
          ) : (
            <>
              <motion.div className="section-divider" variants={dividerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                No experiences available.
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
};

export default ExperienceSection;