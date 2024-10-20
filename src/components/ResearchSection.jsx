// ResearchSection.js
import React, { useState } from "react";

function ResearchSection() {
  const [activeResearch, setActiveResearch] = useState("nlp");

  // Handler for changing the active research category
  const handleResearchClick = (research) => {
    setActiveResearch(research);
  };

  return (
    <section id="research" className="section">
      <div className="container">
        <h2>Research</h2>
        {/* Research category buttons */}
        <button onClick={() => handleResearchClick("nlp")}>NLP</button>
        <button onClick={() => handleResearchClick("iot")}>IoT</button>
        <button onClick={() => handleResearchClick("bioinformatics")}>
          Bioinformatics
        </button>

        <br />
        <br />

        {/* Content based on active research category */}
        <div className="research-content">
          {activeResearch === "nlp" && (
            <div className="nlp-research">
              <p>Text Classification</p>
              <p>Named Entity Recognition</p>
              <p>Sentiment Analysis</p>
            </div>
          )}
          {activeResearch === "iot" && (
            <div className="iot-research">
              <p>Smart Home Automation</p>
              <p>Wearable Devices</p>
              <p>Sensor Data Analysis</p>
            </div>
          )}
          {activeResearch === "bioinformatics" && (
            <div className="bioinformatics-research">
              <p>Gene Sequencing</p>
              <p>Protein Structure Prediction</p>
              <p>Computational Genomics</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;
