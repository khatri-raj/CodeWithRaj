import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceSection = ({ theme = "light" }) => {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const manualExperiences = [
      {
        id: 1,
        role: "Internship - Java By Kiran",
        company: "Kiran Academy",
        city: "Pune",
        start_date: "2025-01-01",
        end_date: "2025-06-30",
        description:
          "I’m currently working on a Job Portal project using Python and Django, getting hands-on experience in full-stack web development. My role involves developing, testing, and deploying features while following best practices. Working alongside experienced developers.",
      },
      {
        id: 2,
        role: "Intern",
        company: "SoftCrowd Technologies",
        city: "Nashik",
        start_date: "2024-03-13",
        end_date: "2024-04-30",
        description:
          "Completed Python internship where I learned and strengthened the fundamentals of Python programming. The training covered core concepts, ensuring a clear understanding of the basics. As part of the internship, I worked on two modules, applying my knowledge practically.",
      },
    ];
    setExperiences(manualExperiences);
    setIsLoading(false);
    setError(null);
  }, []);

  // Animation variants for experience cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
    }),
    hover: {
      scale: 1.03,
      rotate: 0.5,
      boxShadow: `0 8px 24px ${theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1)"}`,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for timeline marker
  const markerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.2, backgroundColor: theme === "light" ? "#007bff" : "#21a1f1", transition: { duration: 0.2 } },
  };

  // Animation variants for section divider
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
          background: linear-gradient(
            to right,
            transparent,
            ${theme === "light" ? "#007bff" : "#21a1f1"},
            transparent
          );
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
          background-color: ${theme === "light" ? "#fff" : "#4b5563"};
          text-align: left;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          transition: all 0.3s ease;
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
          .experience-card p {
            font-size: 0.95rem;
          }

          .section-divider {
            max-width: 100%;
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
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="section-divider"
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <AnimatePresence>
          {isLoading ? (
            <motion.div
              className="loading-spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Loading experiences...
            </motion.div>
          ) : error ? (
            <>
              <motion.div
                className="section-divider"
                variants={dividerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.div
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {error}
              </motion.div>
            </>
          ) : experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <React.Fragment key={exp.id}>
                {index > 0 && (
                  <motion.div
                    className="section-divider"
                    variants={dividerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                )}
                <motion.div
                  className="experience-card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={index}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="timeline">
                    <motion.div
                      className="timeline-marker"
                      variants={markerVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                    />
                    <div className="timeline-line" />
                  </div>
                  <h3>{exp.role}</h3>
                  <span><strong>Company:</strong> {exp.company}</span>
                  <span><strong>Location:</strong> {exp.city || "N/A"}</span>
                  <span><strong>Start Date:</strong> {exp.start_date}</span>
                  <span><strong>End Date:</strong> {exp.end_date || "Present"}</span>
                  <p>{exp.description}</p>
                </motion.div>
              </React.Fragment>
            ))
          ) : (
            <>
              <motion.div
                className="section-divider"
                variants={dividerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
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