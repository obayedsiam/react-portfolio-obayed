// src/components/ResearchSection.jsx
import React, { useState } from "react";
import { FaBrain, FaMicrochip, FaDna, FaAward, FaBookOpen } from "react-icons/fa";
import { researchPublications } from "../data/portfolioData";
import "./ResearchSection.css";

function ResearchSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Publications" },
    { id: "nlp", label: "NLP & Sentiment Analysis" },
    { id: "iot", label: "IoT & Smart Systems" },
    { id: "bioinformatics", label: "Bioinformatics & Algorithms" }
  ];

  const filteredPapers = activeCategory === "all"
    ? researchPublications
    : researchPublications.filter((p) => p.category === activeCategory);

  const getDomainIcon = (cat) => {
    switch (cat) {
      case "nlp":
        return <FaBrain size={20} />;
      case "iot":
        return <FaMicrochip size={20} />;
      case "bioinformatics":
        return <FaDna size={20} />;
      default:
        return <FaBookOpen size={20} />;
    }
  };

  return (
    <section id="research" className="section research-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag purple">Academic &amp; Scientific Research</div>
          <h2 className="section-title">Peer-Reviewed Publications</h2>
          <p className="section-subtitle">
            Rigorous scientific investigation in Natural Language Processing, Internet of Things, and Computational Biology published at world-class venues including ACL 2023 in Toronto.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="research-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`research-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="research-cards-grid">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="research-card glass-card">
              {/* Card Header */}
              <div className="research-card-header">
                <div className="research-badge-group">
                  <span className="research-venue-pill">
                    <FaAward size={12} /> {paper.venueBadge}
                  </span>
                  <span className="research-thesis-pill">{paper.thesisType}</span>
                </div>
                <div className="research-icon-wrap">
                  {getDomainIcon(paper.category)}
                </div>
              </div>

              {/* Title */}
              <h3 className="research-paper-title">{paper.title}</h3>

              {/* Venue */}
              <div className="research-venue-name">{paper.venue}</div>

              {/* Abstract */}
              <p className="research-abstract">{paper.abstract}</p>

              {/* Key Highlights */}
              <div className="research-highlights">
                <h4 className="highlights-title">Research Contributions:</h4>
                <ul className="highlights-list">
                  {paper.highlights.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <span className="highlight-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="research-tags-row">
                {paper.tags.map((tag, idx) => (
                  <span key={idx} className="research-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;
