// App.js
import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
import ResearchSection from "./components/ResearchSection"; // Import the ResearchSection
import HobbiesSection from "./components/HobbiesSection"; // Import the HobbiesSection
import ContactSection from "./components/ContactSection"; // Import the HobbiesSection
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <ProfileSection />
      <ProjectSection />
      <ResearchSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
