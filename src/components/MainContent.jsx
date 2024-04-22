import React, { useEffect, useState } from "react";
import ExampleDoc from "../assets/CV_OF_OBAYED_BIN_MAHFUZ.pdf";
import ProPic from "../assets/POBM.JPG";

function MainContent() {
  const [typedText, setTypedText] = useState("");
  const targetText = "Web Developer"; // The text you want to type out
  const typingSpeed = 200; // Speed at which each letter appears (in milliseconds)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prevTypedText) => prevTypedText + targetText[index]);
      index++;
      if (index === targetText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="main-content">
      <div className="left-side">
        <div class="social-icons">
          <a href="#" class="social-icon" title="LinkedIn">
            <img src="linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="#" class="social-icon" title="GitHub">
            <img src="github-icon.png" alt="GitHub" />
          </a>
          <a href="#" class="social-icon" title="LeetCode">
            <img src="leetcode-icon.png" alt="LeetCode" />
          </a>
        </div>
        <div className="intro">
          <h1>Obayed Bin Mahfuz</h1>
          <p>Java Developer | AI Researcher (NLP)</p>
          <div className="cta">
            <a href={ExampleDoc} download className="download-link">
              <button className="download-button">Download CV</button>
            </a>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img
          src={ProPic}
          alt="Profile Picture"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default MainContent;
