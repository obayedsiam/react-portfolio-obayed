// ProfileSection.js
import React, { useState } from "react";
import "../Profile/ProfileSection.css";
import ExperienceSection from "./ExperienceSection.jsx";
import EducationSection from "./EducationSection.jsx";
import SkillsSection from "./SkillsSection.jsx";

function ProfileSection() {
  const [activeSection, setActiveSection] = useState("experience");
  const [showMoreAnwar, setShowMoreAnwar] = useState(false);
  const [showMoreAdventure, setShowMoreAdventure] = useState(false);
  const [showMoreEthics, setShowMoreEthics] = useState(false);
  const [showMoreRobotics, setShowMoreRobotics] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section id="profile" className="section">
      <div className="container">
        <h2>PROFILE</h2>
        {/* Section headers */}
        <div className="section-buttons">
          <button
            onClick={() => handleSectionClick("experience")}
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </button>
          <button
            onClick={() => handleSectionClick("education")}
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </button>
          <button
            onClick={() => handleSectionClick("skills")}
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </button>
        </div>

        {/* Content based on active section */}
        <div className="section-content">
          {activeSection === "experience" && (
            <ExperienceSection
              showMoreAnwar={showMoreAnwar}
              setShowMoreAnwar={setShowMoreAnwar}
              showMoreAdventure={showMoreAdventure}
              setShowMoreAdventure={setShowMoreAdventure}
              showMoreEthics={showMoreEthics}
              setShowMoreEthics={setShowMoreEthics}
              showMoreRobotics={showMoreRobotics}
              setShowMoreRobotics={setShowMoreRobotics}
            />
          )}
          {activeSection === "education" && <EducationSection />}
          {activeSection === "skills" && <SkillsSection />}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
