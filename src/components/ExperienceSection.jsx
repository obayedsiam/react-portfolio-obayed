// src/components/ExperienceSection.jsx
import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { experiences } from "../data/portfolioData";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag emerald">Career Progression</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            5+ years of engineering scalable Java microservices, workflow orchestration, and enterprise backend systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience-timeline">
          {experiences.map((job, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline Marker Dot & Line */}
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <FaBriefcase size={14} />
                </div>
                <div className="timeline-line"></div>
              </div>

              {/* Content Card */}
              <div className="timeline-card glass-card">
                {/* Card Header */}
                <div className="timeline-card-header">
                  <div className="job-role-row">
                    <h3 className="job-role">{job.role}</h3>
                    <span className={`status-badge ${job.status === "Current Role" ? "current" : "past"}`}>
                      {job.status}
                    </span>
                  </div>
                  <div className="job-meta">
                    <span className="job-company">{job.company}</span>
                    <span className="meta-separator">•</span>
                    <span className="job-period">
                      <FaCalendarAlt size={12} /> {job.period}
                    </span>
                    <span className="meta-separator">•</span>
                    <span className="job-location">
                      <FaMapMarkerAlt size={12} /> {job.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="job-summary">{job.summary}</p>

                {/* Key Achievements List */}
                <div className="job-achievements">
                  <ul className="achievements-list">
                    {job.keyAchievements.map((ach, idx) => (
                      <li key={idx} className="achievement-item">
                        <FaCheckCircle className="achievement-icon" size={13} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="job-tech-stack">
                  {job.techStack.map((tech, idx) => (
                    <span key={idx} className="job-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
