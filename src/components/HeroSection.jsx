// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaArrowRight
} from "react-icons/fa";
import { SiLeetcode, SiWordpress } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";
import "./HeroSection.css";

function HeroSection() {
  // Dynamic typing effect for multiple roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.typingRoles;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        if (currentText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-left">
          {/* Availability Pill */}
          <div className="availability-pill">
            <span className="pulse-dot"></span>
            <span>{personalInfo.availability}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-name">
            Hi, I'm <span className="highlight-text">{personalInfo.name}</span>
          </h1>

          {/* Typing Subtitle */}
          <div className="hero-typing-wrapper">
            <span className="typing-prefix">&gt; </span>
            <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          {/* Bio Highlights - Bullet Structured for High Readability */}
          <div className="hero-bio-bullets">
            <div className="bio-bullet-item">
              <span className="bio-bullet-icon">▹</span>
              <span><strong>5+ Years Enterprise Backend:</strong> High-concurrency Java &amp; Spring Boot microservices, Kafka event streams, and resilient system architecture.</span>
            </div>
            <div className="bio-bullet-item">
              <span className="bio-bullet-icon">▹</span>
              <span><strong>Agentic AI &amp; Enterprise RAG:</strong> Spring AI, pgvector embeddings, hybrid search retrieval, and MCP-based multi-agent workflows.</span>
            </div>
            <div className="bio-bullet-item">
              <span className="bio-bullet-icon">▹</span>
              <span><strong>Published NLP Researcher:</strong> Peer-reviewed research author published at top-tier global venue <strong>ACL Findings 2023</strong> (Toronto).</span>
            </div>
          </div>

          {/* Target audience bullet pills */}
          <div className="hero-focus-tags">
            <span className="focus-tag">🤖 Agentic AI &amp; Multi-Agent (MCP)</span>
            <span className="focus-tag">⚡ Spring AI &amp; pgvector RAG</span>
            <span className="focus-tag">🚀 Java Microservices (5+ Years)</span>
            <span className="focus-tag">🧠 NLP Research (ACL &apos;23 Author)</span>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a
              href={personalInfo.cvFile}
              download="CV_OF_OBAYED_BIN_MAHFUZ.pdf"
              className="btn btn-primary"
            >
              <FaDownload /> Download Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              Explore Projects <FaArrowRight size={13} />
            </a>
            <a href="#contact" className="btn btn-outline-primary">
              Get in Touch
            </a>
          </div>

          {/* Social Icons Bar */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-row">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn linkedin"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={19} />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn github"
                title="GitHub Repositories"
              >
                <FaGithub size={19} />
              </a>
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn leetcode"
                title="LeetCode Problem Solving"
              >
                <SiLeetcode size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.wordpress}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn wordpress"
                title="WordPress Blog & Writings"
              >
                <SiWordpress size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Photo Card with Floating Stats */}
        <div className="hero-right">
          <div className="photo-card-wrapper">
            {/* Glowing Backdrop Circle */}
            <div className="photo-glow-effect"></div>

            {/* Photo Frame */}
            <div className="photo-frame">
              <img
                src={personalInfo.profilePic}
                alt={personalInfo.fullName}
                className="hero-profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
