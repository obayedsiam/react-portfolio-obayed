// src/components/ClientSolutionsSection.jsx
import React from "react";
import { FaGlobe, FaRocket, FaBuilding, FaCheck, FaArrowRight } from "react-icons/fa";
import { clientValueProps } from "../data/portfolioData";
import "./ClientSolutionsSection.css";

function ClientSolutionsSection({ onSelectProjectType }) {
  const getIcon = (id) => {
    switch (id) {
      case "remote":
        return <FaGlobe size={26} />;
      case "freelance":
        return <FaRocket size={26} />;
      case "local":
        return <FaBuilding size={26} />;
      default:
        return <FaRocket size={26} />;
    }
  };

  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag emerald">Tailored Client Value</div>
          <h2 className="section-title">Why Work With Me?</h2>
          <p className="section-subtitle">
            Whether you are a global engineering team seeking a dependable remote Java/AI engineer, a startup founder needing a fast MVP, or a local enterprise requiring high-throughput architecture.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="solutions-grid">
          {clientValueProps.map((item) => (
            <div key={item.id} className={`solution-card ${item.color}`}>
              {/* Header Badge */}
              <div className="card-top-bar">
                <span className={`solution-badge ${item.color}`}>
                  {item.badge}
                </span>
                <div className={`solution-icon-wrap ${item.color}`}>
                  {getIcon(item.id)}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="solution-title">{item.title}</h3>
              <p className="solution-desc">{item.description}</p>

              {/* Benefits Checklist */}
              <div className="solution-benefits">
                <h4 className="benefits-heading">Key Value Delivered:</h4>
                <ul className="benefits-list">
                  {item.benefits.map((b, idx) => (
                    <li key={idx} className="benefit-item">
                      <span className={`check-icon ${item.color}`}>
                        <FaCheck size={11} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Link */}
              <div className="solution-cta-wrapper">
                <a
                  href="#contact"
                  className={`btn-solution-action ${item.color}`}
                  onClick={() => onSelectProjectType && onSelectProjectType(item.id)}
                >
                  <span>{item.ctaText}</span>
                  <FaArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientSolutionsSection;
