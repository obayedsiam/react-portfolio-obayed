// src/components/EducationSection.jsx
import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaMedal } from "react-icons/fa";
import { educationData } from "../data/portfolioData";
import "./EducationSection.css";

function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag amber">Academic Foundation</div>
          <h2 className="section-title">Education &amp; Qualifications</h2>
          <p className="section-subtitle">
            A solid academic background rooted in Computer Science &amp; Engineering from premier universities with rigorous technical and analytical foundations.
          </p>
        </div>

        {/* Education Grid */}
        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card glass-card">
              <div className="edu-card-top">
                <span className="edu-badge">{edu.badge}</span>
                <div className="edu-icon-wrap">
                  <FaGraduationCap size={22} />
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <div className="edu-institution-name">{edu.institution}</div>

              <div className="edu-meta-row">
                <span className="edu-meta-item">
                  <FaMapMarkerAlt size={12} /> {edu.location}
                </span>
                <span className="meta-separator">•</span>
                <span className="edu-meta-item">
                  <FaCalendarAlt size={12} /> {edu.period}
                </span>
              </div>

              <div className="edu-result-pill">
                <FaMedal size={13} />
                <span>{edu.result}</span>
              </div>

              <p className="edu-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
