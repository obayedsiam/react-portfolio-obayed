// src/components/ProjectsSection.jsx
import React, { useState } from "react";
import { FaServer, FaBrain, FaCode, FaRobot, FaCheck, FaGithub } from "react-icons/fa";
import { projectsData, personalInfo } from "../data/portfolioData";
import "./ProjectsSection.css";

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "Agentic AI & RAG" },
    { id: "java", label: "Java, Kafka & Microservices" },
    { id: "robotics", label: "Robotics & IoT" },
    { id: "react", label: "Web Applications" }
  ];

  const filteredProjects = activeTab === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case "ai":
        return <FaBrain size={18} />;
      case "java":
        return <FaServer size={18} />;
      case "robotics":
        return <FaRobot size={18} />;
      default:
        return <FaCode size={18} />;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">Applied Engineering</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Architectural implementations of autonomous multi-agent systems, pgvector RAG pipelines, event-driven streaming, and high-concurrency enterprise microservices.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-container">
          <div className="projects-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`project-tab-btn ${activeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Top */}
              <div className="project-card-top">
                <span className="project-badge">{project.badge}</span>
                <div className="project-icon-box">
                  {getCategoryIcon(project.category)}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Key Features */}
              <div className="project-features-wrap">
                <h4 className="features-heading">Architecture Highlights:</h4>
                <ul className="project-features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="project-feature-item">
                      <FaCheck className="feature-check" size={11} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="project-tech-row">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="project-tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="project-card-footer">
                <span className="project-client-type">{project.clientType}</span>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                  title="View on GitHub"
                >
                  <FaGithub size={15} /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
