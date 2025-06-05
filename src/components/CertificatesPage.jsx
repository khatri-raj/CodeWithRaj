import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CertificatesPage = ({ theme = "light" }) => {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const manualCertificates = [
      {
        id: 1,
        name: "Amazon Q-Build: Smarter AI Assistants Workshop",
        issuer: "Amazon Web Services",
        description:
          "Actively participated in the Amazon Q-Build: Smarter AI Assistants Workshop, gaining hands-on experience in Conversational AI, NLP, and prompt engineering.",
        photo: "/certificates/Amazon.png",
        link: "https://drive.google.com/file/d/1O7qKesLpQuhlAa4h3YmP-2HTyVuzmEKR/view",
      },
      {
        id: 2,
        name: "Workplace Ready: Life and Employability Training",
        issuer: "Reliance Foundation",
        description:
          "Completed training in communication, adaptability, and teamwork through the RF Skilling Academy.",
        photo: "/certificates/RF_Skilling_Academy-1.png",
        link: "https://rfskillingacademy.com/user/login?prev_path=/certificate/group/514/165617",
      },
      {
        id: 3,
        name: "Web Development Fundamentals",
        issuer: "IBM SkillsBuild",
        description:
          "Earned foundational skills in HTML, CSS, JavaScript, responsive design, front-end and back-end development.",
        photo: "/certificates/IBM_Web_Development_Fundamentals-1.png",
        link: "https://www.credly.com/badges/d98910a6-2e41-4b74-8873-39ff8d9a6197",
      },
      {
        id: 4,
        name: "Fundamental AI Concepts",
        issuer: "Microsoft",
        description:
          "Learned the basics of AI including machine learning, neural networks, and real-world AI applications.",
        photo: "/certificates/Fundamental_AI_Concepts-1.png",
        link: "https://learn.microsoft.com/en-us/users/rajkhatri-0919/achievements/87lcb8bw?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      },
      {
        id: 5,
        name: "Fundamentals of Azure AI Services",
        issuer: "Microsoft",
        description:
          "Gained hands-on experience with Azure AI services including NLP, computer vision, and conversational AI.",
        photo: "/certificates/Fundamentals_of_Azure_AI_services-1.png",
        link: "https://learn.microsoft.com/en-us/users/rajkhatri-0919/achievements/yqu8lbkr?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      },
      {
        id: 6,
        name: "Fundamentals of Generative AI",
        issuer: "Microsoft",
        description:
          "Completed a course on generative AI, learning how AI models create new content like text and images.",
        photo: "/certificates/Fundamentals_of_Generative_AI-1.png",
        link: "https://learn.microsoft.com/en-us/users/rajkhatri-0919/achievements/aphn5as7?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      },
    ];
  
    setCertificates(manualCertificates);
    setIsLoading(false);
    setError(null);
  }, []);

  // Animation variants for certificate cards
  const cardVariants = {
    hidden: { opacity: 0, x: -100, rotateY: 90 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, delay: index * 0.15, type: 'spring', stiffness: 80 },
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: `0 12px 32px ${theme === "light" ? "rgba(0, 123, 255, 0.3)" : "rgba(33, 161, 241, 0.2)"}`,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Animation variants for timeline marker
  const markerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { 
      scale: 1.4, 
      backgroundColor: theme === "light" ? "#00c4ff" : "#6be3ff",
      boxShadow: `0 0 12px ${theme === "light" ? "rgba(0, 123, 255, 0.5)" : "rgba(33, 161, 241, 0.5)"}`,
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for section divider
  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  // Animation for the view certificate button
  const buttonVariants = {
    hover: {
      scale: 1.1,
      background: `linear-gradient(90deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #6be3ff"})`,
      boxShadow: `0 4px 12px ${theme === "light" ? "rgba(0, 123, 255, 0.4)" : "rgba(33, 161, 241, 0.4)"}`,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <>
      <style jsx>{`
        .certificates-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
          background: ${theme === "light" 
            ? "linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)" 
            : "linear-gradient(135deg, #374151 0%, #1f2937 100%)"};
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, ${theme === "light" ? 0.2 : 0.4});
          min-height: calc(100vh - 60px);
          text-align: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .section-divider {
          width: 100%;
          max-width: 900px;
          height: 4px;
          background: linear-gradient(
            to right,
            transparent,
            ${theme === "light" ? "#007bff" : "#21a1f1"},
            transparent
          );
          margin: 3rem auto;
          border-radius: 2px;
        }

        .certificates-section h2 {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 2.5rem;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          background: linear-gradient(45deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #6be3ff"});
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        .certificate-card {
          margin-bottom: 2.5rem;
          padding: 0;
          border-radius: 12px;
          background-color: ${theme === "light" ? "#fff" : "#4b5563"};
          text-align: left;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .certificate-image-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .certificate-photo {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 12px 12px 0 0;
          transition: transform 0.5s ease;
          max-height: 400px; /* Prevents overly large images */
        }

        .certificate-card:hover .certificate-photo {
          transform: scale(1.05);
        }

        .certificate-content {
          padding: 24px;
        }

        .timeline {
          position: absolute;
          left: -30px;
          top: 0;
          bottom: 0;
          width: 3px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-marker {
          width: 16px;
          height: 16px;
          background-color: ${theme === "light" ? "#007bff" : "#21a1f1"};
          border-radius: 50%;
          margin-top: 30px;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        }

        .timeline-line {
          width: 3px;
          flex-grow: 1;
          background: linear-gradient(
            ${theme === "light" ? "#e5e7eb" : "#6b7280"},
            ${theme === "light" ? "#007bff" : "#21a1f1"}
          );
        }

        .certificate-card h3 {
          margin-bottom: 0.75rem;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          font-size: 1.8rem;
          font-weight: 700;
        }

        .certificate-card span,
        .certificate-card p {
          color: ${theme === "light" ? "#444" : "#d1d5db"};
          margin-bottom: 0.75rem;
          display: block;
          font-size: 1rem;
          line-height: 1.6;
        }

        .certificate-card span strong {
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
        }

        .certificate-link {
          display: inline-block;
          margin-top: 1rem;
          padding: 10px 20px;
          border-radius: 8px;
          background: linear-gradient(90deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #6be3ff"});
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .certificate-link:hover {
          background: linear-gradient(90deg, ${theme === "light" ? "#0056b3, #0096cc" : "#1a91d0, #5ac8fa"});
          box-shadow: 0 4px 12px ${theme === "light" ? "rgba(0, 123, 255, 0.4)" : "rgba(33, 161, 241, 0.4)"};
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
          .certificates-section {
            padding: 60px 15px;
          }

          .certificates-section h2 {
            font-size: 2.2rem;
          }

          .certificate-card {
            max-width: 100%;
          }

          .certificate-image-container {
            max-height: 300px; /* Adjusted for smaller screens */
          }

          .certificate-photo {
            max-height: 300px;
          }

          .certificate-content {
            padding: 20px;
          }

          .timeline {
            left: -20px;
          }

          .timeline-marker {
            width: 12px;
            height: 12px;
            margin-top: 25px;
          }

          .certificate-card h3 {
            font-size: 1.5rem;
          }

          .certificate-card span,
          .certificate-card p {
            font-size: 0.95rem;
          }

          .certificate-link {
            padding: 8px 16px;
            font-size: 0.9rem;
          }

          .section-divider {
            max-width: 100%;
          }
        }
      `}</style>

      <motion.section
        className="certificates-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        role="region"
        aria-label="Certificates section"
      >
        <h2>Certificates</h2>

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
              Loading certificates...
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
          ) : certificates.length > 0 ? (
            certificates.map((cert, index) => (
              <React.Fragment key={cert.id}>
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
                  className="certificate-card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={index}
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
                  <div className="certificate-image-container">
                    <img src={cert.photo} alt={`${cert.name} certificate`} className="certificate-photo" />
                  </div>
                  <div className="certificate-content">
                    <h3>{cert.name}</h3>
                    <span><strong>Issuer:</strong> {cert.issuer}</span>
                    <p>{cert.description}</p>
                    {cert.link && (
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        View Certificate
                      </motion.a>
                    )}
                  </div>
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
                No certificates available.
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
};

export default CertificatesPage;