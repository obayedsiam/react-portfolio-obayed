// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaSun,
  FaMoon
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Focused, spacious navigation links
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Collaboration", href: "#collaboration" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container flex items-center justify-between w-full px-4">
        {/* Brand Monogram, Name & Title Badge */}
        <a href="#about" className="navbar-brand min-w-0 max-w-[210px] xs:max-w-[260px] sm:max-w-none flex items-center gap-2 sm:gap-2.5 shrink">
          <div className="brand-logo-ring shrink-0">
            <span>OB</span>
            <div className="brand-status-dot" title="Available for hire"></div>
          </div>
          <div className="brand-name-group min-w-0 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <span className="brand-name text-xs sm:text-sm md:text-base font-bold truncate">
              Obayed Bin Mahfuz
            </span>
            <span className="brand-title-badge text-[10px] sm:text-xs font-semibold px-1.5 py-0.5 rounded-md border border-sky-400/30 bg-sky-500/10 text-sky-400 shrink-0 whitespace-nowrap">
              (AI Native Backend Engineer)
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with generous breathing room */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Theme Toggle + CV + Hire Me + Mobile Toggle */}
        <div className="nav-actions flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Dark / Light Mode Switch Button */}
          <button
            className="theme-toggle-btn w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] flex items-center justify-center rounded-xl shrink-0"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <FaMoon className="theme-icon moon" /> : <FaSun className="theme-icon sun" />}
          </button>

          <a
            href={personalInfo.cvFile}
            download="CV_OF_OBAYED_BIN_MAHFUZ.pdf"
            className="btn btn-secondary btn-nav-cv hidden sm:inline-flex items-center gap-1.5 shrink-0"
            title="Download Full Resume"
          >
            <FaDownload size={13} />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="btn btn-primary btn-nav-hire hidden lg:inline-flex shrink-0"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn flex lg:hidden shrink-0 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer w-full ${mobileMenuOpen ? "open" : ""}`} id="mobile-nav-menu">
        <div className="mobile-theme-bar">
          <span className="mobile-theme-label">Theme Mode:</span>
          <button
            className="theme-toggle-btn mobile-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
          >
            {theme === "light" ? (
              <span className="theme-btn-content"><FaMoon /> Dark Mode</span>
            ) : (
              <span className="theme-btn-content"><FaSun /> Light Mode</span>
            )}
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name} className="mobile-nav-item">
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={handleNavClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-footer">
          <div className="mobile-social-group">
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
          </div>
          <a
            href={personalInfo.cvFile}
            download="CV_OF_OBAYED_BIN_MAHFUZ.pdf"
            className="btn btn-emerald"
            style={{ width: "100%", marginTop: "12px" }}
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
