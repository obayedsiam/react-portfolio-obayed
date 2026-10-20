// src/components/GlobalCollaborationSection.jsx
import React from "react";
import {
  FaGlobe,
  FaComments,
  FaHandshake,
  FaSyncAlt,
  FaCheckCircle,
  FaClock,
  FaFileAlt
} from "react-icons/fa";
import { globalCollaborationData } from "../data/portfolioData";
import "./GlobalCollaborationSection.css";

function GlobalCollaborationSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "globe":
        return <FaGlobe size={24} />;
      case "language":
        return <FaComments size={24} />;
      case "handshake":
        return <FaHandshake size={24} />;
      case "sync":
        return <FaSyncAlt size={24} />;
      default:
        return <FaGlobe size={24} />;
    }
  };

  return (
    <section id="collaboration" className="section collaboration-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag cyan">Distributed Delivery &amp; Leadership</div>
          <h2 className="section-title">Global Collaboration &amp; Communication</h2>
          <p className="section-subtitle">
            Bridging complex technical architecture with high-bandwidth cross-border communication, structured asynchronous workflows, and executive stakeholder management across multi-time-zone engineering organizations.
          </p>
        </div>

        {/* Global Competency Grid */}
        <div className="collaboration-grid">
          {globalCollaborationData.map((item) => (
            <div key={item.id} className={`collab-card glass-card ${item.color}`}>
              <div className="collab-card-header">
                <div className={`collab-icon-box ${item.color}`}>
                  {getIcon(item.icon)}
                </div>
                <div className="collab-badge-wrap">
                  <span className={`collab-pill ${item.color}`}>{item.badge}</span>
                </div>
              </div>

              <h3 className="collab-card-title">{item.title}</h3>
              <p className="collab-card-desc">{item.description}</p>

              {/* Specific Country Badges (for Cross-Border Leadership) */}
              {item.countries && (
                <div className="collab-countries-wrap">
                  <span className="collab-micro-label">Stakeholders &amp; Teams:</span>
                  <div className="collab-pills-row">
                    {item.countries.map((c) => (
                      <span key={c.name} className="collab-country-pill">
                        <span className="country-flag">{c.flag}</span>
                        <span className="country-name">{c.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags (for other cards) */}
              {item.tags && (
                <div className="collab-tags-wrap">
                  {item.tags.map((tag) => (
                    <span key={tag} className="collab-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Highlights List */}
              <ul className="collab-highlights-list">
                {item.highlights.map((h, i) => (
                  <li key={i}>
                    <FaCheckCircle className="highlight-check" size={13} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Communication Strengths Banner */}
        <div className="collab-banner glass-card">
          <div className="banner-item">
            <div className="banner-icon-circle">
              <FaGlobe size={18} />
            </div>
            <div className="banner-info">
              <span className="banner-title">5+ International Regions</span>
              <span className="banner-desc">Japan, Austria, South Korea, India, Vietnam</span>
            </div>
          </div>

          <div className="banner-separator"></div>

          <div className="banner-item">
            <div className="banner-icon-circle">
              <FaClock size={18} />
            </div>
            <div className="banner-info">
              <span className="banner-title">Multi-Time-Zone Overlap</span>
              <span className="banner-desc">Reliable asynchronous &amp; real-time cadence</span>
            </div>
          </div>

          <div className="banner-separator"></div>

          <div className="banner-item">
            <div className="banner-icon-circle">
              <FaFileAlt size={18} />
            </div>
            <div className="banner-info">
              <span className="banner-title">Publication-Grade Technical Docs</span>
              <span className="banner-desc">Peer-reviewed author (ACL '23) &amp; ADRs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalCollaborationSection;
