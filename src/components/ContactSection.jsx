// src/components/ContactSection.jsx
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaCopy,
  FaPaperPlane,
  FaCheckCircle
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "./ContactSection.css";

function ContactSection({ selectedProjectType, showToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: selectedProjectType || "remote",
    timeline: "Flexible",
    message: ""
  });

  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, typeLabel) => {
    navigator.clipboard.writeText(text);
    setCopiedType(typeLabel);
    if (showToast) {
      showToast(`Copied ${typeLabel} to clipboard!`);
    }
    setTimeout(() => setCopiedType(null), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProjectTypeSelect = (typeId) => {
    setFormData({ ...formData, projectType: typeId });
  };

  const handleSubmitMailto = (e) => {
    e.preventDefault();
    const typeNames = {
      remote: "Remote Full-Time / Contract Position",
      freelance: "Freelance / MVP Software Project",
      local: "Local Enterprise / Government Consultation",
      general: "General Inquiry"
    };

    const subject = encodeURIComponent(
      `[Opportunity] ${typeNames[formData.projectType] || "Contact Inquiry"} from ${formData.name || "Client"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${typeNames[formData.projectType]}\nEstimated Timeline: ${formData.timeline}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyInquiry = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nTimeline: ${formData.timeline}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    if (showToast) {
      showToast("Inquiry text copied! You can paste it into your email or message.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag emerald">Let's Build Together</div>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-subtitle">
            Whether you have a remote engineering role, a high-concurrency backend contract, or an AI systems challenge, I'm ready to deliver high-impact results.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">Direct Communication</h3>
              <p className="contact-card-desc">
                Fast responses guaranteed within 24 hours. Feel free to reach out directly via email or phone.
              </p>

              {/* Contact Item 1: Email */}
              <div className="contact-detail-row">
                <div className="detail-icon email">
                  <FaEnvelope size={17} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Direct Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="detail-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  className="btn-copy-icon"
                  onClick={() => handleCopy(personalInfo.email, "Email")}
                  title="Copy email to clipboard"
                >
                  {copiedType === "Email" ? <FaCheckCircle color="#10b981" /> : <FaCopy />}
                </button>
              </div>

              {/* Contact Item 2: Phone */}
              <div className="contact-detail-row">
                <div className="detail-icon phone">
                  <FaPhoneAlt size={16} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Direct Phone</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="detail-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  className="btn-copy-icon"
                  onClick={() => handleCopy(personalInfo.phone, "Phone number")}
                  title="Copy phone number"
                >
                  {copiedType === "Phone number" ? <FaCheckCircle color="#10b981" /> : <FaCopy />}
                </button>
              </div>

              {/* Contact Item 3: Location & Timezone */}
              <div className="contact-detail-row">
                <div className="detail-icon location">
                  <FaMapMarkerAlt size={17} />
                </div>
                <div className="detail-content">
                  <span className="detail-label">Location &amp; Work Hours</span>
                  <span className="detail-value-static">
                    {personalInfo.location}
                  </span>
                  <span className="detail-subtext">
                    <FaClock size={11} /> GMT+6 (Flexible overlap with US, Europe, and Asia)
                  </span>
                </div>
              </div>

              {/* Quick Action Buttons Row */}
              <div className="quick-actions-bar">
                <a
                  href={`mailto:${personalInfo.email}?subject=Project%20Inquiry%20for%20Obayed%20Bin%20Mahfuz`}
                  className="btn btn-primary quick-action-btn"
                  style={{ width: "100%" }}
                >
                  <FaEnvelope size={16} /> Send Direct Email
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Builder */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              <h3 className="form-title">Send a Structured Project Inquiry</h3>
              <p className="form-subtitle">
                Select your inquiry type to help tailor my proposal and availability.
              </p>

              <form onSubmit={handleSubmitMailto} className="inquiry-form">
                {/* Inquiry Type Selector */}
                <div className="form-group">
                  <label className="form-label">Inquiry Focus:</label>
                  <div className="project-type-selector">
                    <button
                      type="button"
                      className={`type-select-btn ${formData.projectType === "remote" ? "active" : ""}`}
                      onClick={() => handleProjectTypeSelect("remote")}
                    >
                      🌐 Foreign Remote Role
                    </button>
                    <button
                      type="button"
                      className={`type-select-btn ${formData.projectType === "freelance" ? "active" : ""}`}
                      onClick={() => handleProjectTypeSelect("freelance")}
                    >
                      🚀 Freelance / MVP
                    </button>
                    <button
                      type="button"
                      className={`type-select-btn ${formData.projectType === "local" ? "active" : ""}`}
                      onClick={() => handleProjectTypeSelect("local")}
                    >
                      🏛️ Local Enterprise
                    </button>
                    <button
                      type="button"
                      className={`type-select-btn ${formData.projectType === "general" ? "active" : ""}`}
                      onClick={() => handleProjectTypeSelect("general")}
                    >
                      💬 General Chat
                    </button>
                  </div>
                </div>

                {/* Name & Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe / Tech Lead"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. contact@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="form-group">
                  <label className="form-label">Desired Timeline / Urgency</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Immediate / ASAP">Immediate / ASAP (&lt; 2 weeks)</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="Flexible / Q1-Q2">Flexible / Planning stage</option>
                    <option value="Part-time / Hourly">Part-time / Advisory</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label">Project Details / Role Requirements *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your objectives, tech stack, or problem statement..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="form-actions-row">
                  <button type="submit" className="btn btn-primary btn-submit-inquiry">
                    <FaPaperPlane size={15} /> Send Message via Email
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="btn btn-secondary btn-copy-inquiry"
                    title="Copy your message to clipboard"
                  >
                    <FaCopy size={15} /> Copy Text
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
