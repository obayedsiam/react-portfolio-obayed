// src/components/EducationSection.jsx
import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaMedal, FaShieldAlt } from "react-icons/fa";
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
            A solid academic background rooted in Computer Science &amp; Engineering from premier universities, backed by the discipline of Sylhet Cadet College.
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

        {/* Sylhet Cadet College Discipline Feature Box */}
        <div className="cadet-spotlight-box glass-card">
          <div className="cadet-icon-col">
            <div className="cadet-shield-icon">
              <FaShieldAlt size={32} />
            </div>
          </div>
          <div className="cadet-text-col">
            <div className="cadet-tag">Military Boarding Heritage</div>
            <h3 className="cadet-title">The Cadet College Foundation: Discipline &amp; Rigor</h3>
            <ul className="cadet-bullets-list">
              <li className="cadet-bullet-item">
                <span className="cadet-bullet-marker">▹</span>
                <span><strong>Rigorous Discipline &amp; Punctuality:</strong> Six years of military boarding education instilling exceptional accountability and strict deadline execution.</span>
              </li>
              <li className="cadet-bullet-item">
                <span className="cadet-bullet-marker">▹</span>
                <span><strong>Mental Resilience Under Pressure:</strong> Composed, methodical problem-solving during high-stress production incidents and rapid release cycles.</span>
              </li>
              <li className="cadet-bullet-item">
                <span className="cadet-bullet-marker">▹</span>
                <span><strong>Ethical Integrity &amp; Leadership:</strong> Servant leadership foundation ensuring seamless, transparent collaboration with cross-functional global teams.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
