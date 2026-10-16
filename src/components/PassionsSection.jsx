// src/components/PassionsSection.jsx
import React from "react";
import { FaTrophy, FaPlane, FaCamera, FaBook, FaGlobeAmericas, FaAward, FaCalendarAlt } from "react-icons/fa";
import { extraCurriculars, hobbiesAndPassions } from "../data/portfolioData";
import "./PassionsSection.css";

function PassionsSection() {
  const getHobbyIcon = (icon) => {
    switch (icon) {
      case "plane":
        return <FaPlane size={24} />;
      case "camera":
        return <FaCamera size={24} />;
      case "book":
        return <FaBook size={24} />;
      case "globe":
        return <FaGlobeAmericas size={24} />;
      default:
        return <FaAward size={24} />;
    }
  };

  return (
    <section id="passions" className="section passions-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">Beyond Code</div>
          <h2 className="section-title">Passions &amp; Extra-Curriculars</h2>
          <p className="section-subtitle">
            From robotics hackathons and literary competitions to photography expeditions and deep scientific curiosity.
          </p>
        </div>

        {/* Part 1: Competitions & Extra-Curriculars Grid */}
        <h3 className="sub-section-title">
          <FaTrophy className="sub-title-icon" /> Contests &amp; Extra-Curricular Honors
        </h3>
        <div className="contests-grid">
          {extraCurriculars.map((item, idx) => (
            <div key={idx} className="contest-card glass-card">
              <div className="contest-card-top">
                <span className="contest-type-badge">{item.type}</span>
                <span className="contest-year">
                  <FaCalendarAlt size={11} /> {item.year}
                </span>
              </div>
              <h4 className="contest-title">{item.title}</h4>
              <p className="contest-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Part 2: Passions & Personal Interests */}
        <h3 className="sub-section-title" style={{ marginTop: "60px" }}>
          <FaGlobeAmericas className="sub-title-icon" /> Personal Passions &amp; Creative Drives
        </h3>
        <div className="passions-grid">
          {hobbiesAndPassions.map((hobby, idx) => (
            <div key={idx} className="hobby-card glass-card">
              <div className="hobby-icon-wrap">
                {getHobbyIcon(hobby.icon)}
              </div>
              <h4 className="hobby-title">{hobby.title}</h4>
              <p className="hobby-desc">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PassionsSection;
