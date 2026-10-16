// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiLeetcode, SiWordpress } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-main">
      <div className="container footer-container">
        {/* Brand & Summary */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            <span className="footer-monogram">OB</span>
            <span className="footer-brand-name">Obayed</span>
          </div>
          <p className="footer-tagline">
            AI-Native Backend Engineer • NLP Researcher (ACL &apos;23) • Distributed Systems
          </p>
          <div className="footer-socials">
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href={personalInfo.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <SiLeetcode size={17} />
            </a>
            <a href={personalInfo.socialLinks.wordpress} target="_blank" rel="noopener noreferrer" aria-label="WordPress">
              <SiWordpress size={17} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#about">About &amp; Bio</a></li>
            <li><a href="#solutions">Why Hire Me</a></li>
            <li><a href="#skills">Tech Skills</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Spotlights</h4>
          <ul className="footer-links-list">
            <li><a href="#research">ACL '23 Research</a></li>
            <li><a href="#projects">Enterprise Projects</a></li>
            <li><a href="#book-reviews">Book Reviews &amp; Blog</a></li>
            <li><a href="#contact">Contact / Hire</a></li>
          </ul>
        </div>

        {/* Back to top & Status */}
        <div className="footer-cta-col">
          <button onClick={scrollToTop} className="btn-back-to-top" title="Back to top">
            <FaArrowUp size={14} /> Back to Top
          </button>
          <div className="footer-availability-note">
            <span className="footer-status-indicator"></span>
            <span>Open for Remote &amp; Freelance</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p>© {new Date().getFullYear()} Obayed. All rights reserved.</p>
          <p className="footer-tech-stack">
            Engineered with React &amp; Modern Pure CSS • High Performance &amp; Responsive
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
