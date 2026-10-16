// src/components/SkillsSection.jsx
import React, { useState } from "react";
import {
  FaCode,
  FaServer,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaCheckDouble
} from "react-icons/fa";
import { skillsData } from "../data/portfolioData";
import "./SkillsSection.css";

function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData.items
      : skillsData.items.filter((item) => item.category === activeTab);

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case "ai":
        return <FaBrain size={14} />;
      case "backend":
        return <FaServer size={14} />;
      case "cloud":
        return <FaCloud size={14} />;
      case "database":
        return <FaDatabase size={14} />;
      case "research":
        return <FaBrain size={14} />;
      case "testing":
        return <FaCheckDouble size={14} />;
      default:
        return <FaCode size={14} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">Technical Arsenal</div>
          <h2 className="section-title">Skills &amp; Competencies</h2>
          <p className="section-subtitle">
            5+ years of enterprise Java microservices and workflow orchestration converging with Spring AI, pgvector RAG pipelines, and top-tier ACL &apos;23 NLP research.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-container">
          <div className="skills-tabs-wrap">
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                className={`skill-tab-btn ${activeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-name-wrap">
                  <span className="skill-cat-icon">
                    {getCategoryIcon(skill.category)}
                  </span>
                  <h3 className="skill-title">{skill.name}</h3>
                </div>
                <span className={`skill-rating-badge ${skill.rating.toLowerCase()}`}>
                  {skill.rating}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Specific Competencies Text */}
              <p className="skill-details-text">{skill.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
