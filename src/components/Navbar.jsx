import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <style>
        {`
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 40px;
            background-color: ${theme === "light" ? "#ffffff" : "#1f2937"};
            color: ${theme === "light" ? "#111827" : "#f9fafb"};
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 12px rgba(0, 0, 0, ${theme === "light" ? 0.15 : 0.3});
            transition: background-color 0.2s ease, box-shadow 0.2s ease;
          }

          .logo {
            font-size: 1.8rem;
            font-weight: 700;
            cursor: pointer;
            color: ${theme === "light" ? "#007bff" : "#21a1f1"};
            background: linear-gradient(45deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #6be3ff"});
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: opacity 0.2s ease, filter 0.2s ease;
          }

          .logo:hover {
            opacity: 0.9;
            filter: brightness(1.2);
          }

          .nav-links {
            display: flex;
            gap: 25px;
          }

          .nav-links a {
            color: ${theme === "light" ? "#111827" : "#f9fafb"};
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            position: relative;
            padding-bottom: 6px;
            transition: color 0.2s ease;
          }

          .nav-links a:hover,
          .nav-links a.active {
            color: ${theme === "light" ? "#007bff" : "#21a1f1"};
            text-shadow: 0 0 8px ${theme === "light" ? "rgba(0, 123, 255, 0.3)" : "rgba(33, 161, 241, 0.3)"};
          }

          .nav-links a.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #6be3ff"});
            border-radius: 2px;
          }

          .theme-toggle {
            background: none;
            border: none;
            color: ${theme === "light" ? "#111827" : "#f9fafb"};
            font-size: 1.4rem;
            cursor: pointer;
            padding: 8px 12px;
            border-radius: 50%;
            transition: transform 0.2s ease, color 0.2s ease, background 0.2s ease;
          }

          .theme-toggle:hover {
            transform: rotate(15deg);
            background: ${theme === "light" ? "rgba(0, 123, 255, 0.1)" : "rgba(33, 161, 241, 0.2)"};
          }

          .hamburger {
            display: none;
            cursor: pointer;
            flex-direction: column;
            gap: 6px;
            padding: 5px;
          }

          .hamburger div {
            width: 28px;
            height: 4px;
            background: linear-gradient(90deg, ${theme === "light" ? "#007bff, #00c4ff" : "#21a1f1, #6be3ff"});
            border-radius: 2px;
            transition: background 0.2s ease;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }

            .mobile-menu {
              position: fixed;
              top: 70px;
              right: 0;
              height: calc(100vh - 70px);
              background-color: ${theme === "light" ? "#ffffff" : "#1f2937"};
              flex-direction: column;
              width: 240px;
              padding: 40px 20px;
              display: flex;
              gap: 25px;
              z-index: 101;
              box-shadow: -4px 0 12px rgba(0, 0, 0, ${theme === "light" ? 0.15 : 0.3});
            }

            .mobile-menu a {
              font-size: 1.2rem;
              font-weight: 600;
            }

            .hamburger {
              display: flex;
            }
          }
        `}
      </style>
      <nav role="navigation" aria-label="Main navigation">
        <Link to="/" className="logo" aria-label="Go to home">
          MyPortfolio
        </Link>

        <div className="nav-links">
          {navLinks.map(({ path, label }, index) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={path}
                className={location.pathname === path ? "active" : ""}
                aria-current={location.pathname === path ? "page" : undefined}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </motion.button>

        <div
          className="hamburger"
          onClick={toggleMenu}
          role="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <motion.div
            animate={isOpen ? { rotate: -45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            animate={isOpen ? { rotate: 45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="mobile-menu"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              {navLinks.map(({ path, label }, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={path}
                    className={location.pathname === path ? "active" : ""}
                    onClick={() => setIsOpen(false)}
                    aria-current={location.pathname === path ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;