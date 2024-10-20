// ProjectSection.js
import React, { useState } from "react";

function ProjectSection() {
  const [activeProject, setActiveProject] = useState("java");

  // Handler for changing the active project category
  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  return (
    <section id="project" className="section">
      <div className="container">
        <h2>Projects</h2>
        {/* Project category buttons */}
        <button onClick={() => handleProjectClick("java")}>Java</button>
        <button onClick={() => handleProjectClick("robotics")}>Robotics</button>
        <button onClick={() => handleProjectClick("android")}>Android</button>
        <button onClick={() => handleProjectClick("react")}>React</button>

        <br />
        <br />

        {/* Content based on active project category */}
        <div className="project-content">
          {activeProject === "java" && (
            <div className="java-projects">
              <p>Library Management System</p>
              <p>Chat Application</p>
              <p>Data Structures and Algorithms</p>
            </div>
          )}
          {activeProject === "robotics" && (
            <div className="robotics-projects">
              <p>Autonomous Robot Navigation</p>
              <p>Robotic Arm Simulation</p>
            </div>
          )}
          {activeProject === "android" && (
            <div className="android-projects">
              <p>Weather App</p>
              <p>PDF Book Library</p>
              <p>Expense Tracker</p>
            </div>
          )}
          {activeProject === "react" && (
            <div className="react-projects">
              <p>Personal Portfolio</p>
              <p>Task Management App</p>
              <p>E-commerce Site</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
