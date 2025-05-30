import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    name: "Email",
    icon: <FaEnvelope size={24} style={{ marginRight: "10px" }} />,
    link: "mailto:rajkhatri8060@gmail.com",
    text: "rajkhatri8060@gmail.com",
    color: "#D44638",
    copyable: true,
  },
  {
    id: 2,
    name: "Phone",
    icon: <FaPhone size={24} style={{ marginRight: "10px" }} />,
    link: "tel:+918262813490",
    text: "+91 8262813490",
    color: "#25D366",
    copyable: true,
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin size={24} style={{ marginRight: "10px" }} />,
    link: "https://www.linkedin.com/in/your-profile", // Replace with your LinkedIn
    text: "Connect with me on LinkedIn",
    color: "#0077B5",
  },
  {
    id: 4,
    name: "GitHub",
    icon: <FaGithub size={24} style={{ marginRight: "10px" }} />,
    link: "https://github.com/your-profile", // Replace with your GitHub
    text: "Check out my projects on GitHub",
    color: "#181717",
  },
];

const ContactPage = ({ theme = "light" }) => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
  };

  // Animation variants for contact cards
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20, delay: index * 0.2 },
    }),
    hover: {
      scale: 1.08,
      boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2)`,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for icons
  const iconVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: {
      scale: 1.3,
      opacity: 1,
      filter: "brightness(1.2) drop-shadow(0 0 8px currentColor)",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for section divider
  const dividerVariants = {
    hidden: { opacity: 0, scaleX: 0.5 },
    visible: {
      opacity: [0, 1, 0.8, 1],
      scaleX: 1,
      transition: { duration: 1, times: [0, 0.3, 0.6, 1], ease: "easeOut" },
    },
  };

  // Animation for copy confirmation
  const copyVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <style jsx>{`
        .contact-page {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
          background: ${theme === "light" ? "radial-gradient(circle, #e2e8f0, #f9fafb)" : "radial-gradient(circle, #1f2937, #374151)"};
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          min-height: calc(100vh - 60px);
          text-align: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .contact-page h2 {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 2.5rem;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          position: relative;
        }

        .contact-page h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 5px;
          background: linear-gradient(90deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #4fc3f7"});
          border-radius: 3px;
        }

        .section-divider {
          width: 100%;
          max-width: 900px;
          height: 5px;
          background: linear-gradient(
            to right,
            transparent,
            ${theme === "light" ? "#007bff" : "#21a1f1"},
            transparent
          );
          margin: 3rem auto;
          border-radius: 3px;
        }

        .contact-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-card {
          background: ${theme === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(75, 85, 99, 0.9)"};
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          border: 2px solid transparent;
          transition: border-color 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .contact-card:hover {
          border-color: var(--contact-color);
        }

        .contact-card h3 {
          font-size: 1.6rem;
          font-weight: 700;
          color: ${theme === "light" ? "#111827" : "#f9fafb"};
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-card a {
          font-size: 1.1rem;
          color: ${theme === "light" ? "#374151" : "#d1d5db"};
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-card a:hover {
          color: var(--contact-color);
        }

        .copy-message {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: ${theme === "light" ? "#48bb78" : "#68d391"};
          color: #fff;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 60px 15px;
          }

          .contact-page h2 {
            font-size: 2.25rem;
          }

          .contact-list {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .contact-card {
            padding: 20px;
          }

          .contact-card h3 {
            font-size: 1.4rem;
          }

          .contact-card a {
            font-size: 1rem;
          }

          .section-divider {
            max-width: 100%;
          }

          .copy-message {
            font-size: 0.85rem;
            padding: 6px 12px;
            top: -35px;
          }
        }
      `}</style>
      <motion.section
        className="contact-page"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        role="region"
        aria-label="Contact section"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="section-divider"
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <div className="contact-list">
          {contactData.map((contact, index) => (
            <motion.div
              key={contact.id}
              className="contact-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              whileHover="hover"
              onClick={() => contact.copyable && handleCopy(contact.text, contact.id)}
              style={{ "--contact-color": contact.color }}
            >
              <h3>
                <motion.span
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  style={{ color: contact.color }}
                >
                  {contact.icon}
                </motion.span>
                {contact.name}
              </h3>
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                {contact.text}
              </a>
              <AnimatePresence>
                {copied === contact.id && (
                  <motion.div
                    className="copy-message"
                    variants={copyVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    Copied to clipboard!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;