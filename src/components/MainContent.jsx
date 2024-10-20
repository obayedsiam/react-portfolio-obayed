import React, { useEffect, useState } from "react";
import ExampleDoc from "../assets/CV_OF_OBAYED_BIN_MAHFUZ.pdf";
import ProPic from "../assets/POBM.JPG";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon from react-icons

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
        <div className="intro">
          <h1>Obayed Bin Mahfuz</h1>
          <p>Java Developer | AI Researcher (NLP)</p>

          {/* Social Icons Section */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/obayed-bin-mahfuz-7b08b38b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px", display: "inline-block" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#0077b5")} // LinkedIn color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Reset color
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/obayedsiam"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px", display: "inline-block" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#333")} // GitHub color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Reset color
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://leetcode.com/u/user5461JF/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px", display: "inline-block" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#f8c200")} // LeetCode color on hover
              onMouseOut={(e) => (e.currentTarget.style.color = "black")} // Reset color
            >
              <SiLeetcode size={30} />
            </a>
          </div>

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
