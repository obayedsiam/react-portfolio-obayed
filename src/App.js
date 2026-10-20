// src/App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ClientSolutionsSection from "./components/ClientSolutionsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import GlobalCollaborationSection from "./components/GlobalCollaborationSection";
import ResearchSection from "./components/ResearchSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import "./index.css";

function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [selectedProjectType, setSelectedProjectType] = useState("remote");

  // Dark and Light Mode Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSelectProjectType = (typeId) => {
    setSelectedProjectType(typeId);
  };

  return (
    <div className="App w-full max-w-full overflow-x-hidden min-h-screen relative">
      {/* Navigation Header with Dark/Light Toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Section: Bio, Dynamic Typing, Resume Download, Badges & Zoomable Photo */}
        <HeroSection />

        {/* 2. Client Value Proposition: Foreign Remote, Freelance, Local Enterprise */}
        <ClientSolutionsSection onSelectProjectType={handleSelectProjectType} />

        {/* 4. Core Tech Matrix: Filterable Skills, Progress, Strengths */}
        <SkillsSection />

        {/* 4. Professional Work Experience: Timeline with Architectural Deep-Dives */}
        <ExperienceSection />

        {/* 5. Global Collaboration & Communication: Cross-Border Leadership, English, Agile */}
        <GlobalCollaborationSection />

        {/* 6. Peer-Reviewed Academic Research: ACL '23 Toronto, ICERIE, ICIEV */}
        <ResearchSection />

        {/* 6. Featured Projects: BANBEIS IEIMS, BanglaBook, Travel Booking, IoT */}
        <ProjectsSection />

        {/* 7. Education & Academic Background: IUT M.Sc., BRACU */}
        <EducationSection />

        {/* 9. Interactive Contact & Inquiry: Direct Actions, WhatsApp, Form */}
        <ContactSection
          selectedProjectType={selectedProjectType}
          showToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <FaCheckCircle color="#10b981" size={18} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
