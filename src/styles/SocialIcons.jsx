// SocialIcons.js
import React from "react";
import { FaLinkedin, FaGithub, FaLeetcode } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="social-icons">
      <div className="social-icon" title="LinkedIn">
        <a
          href="https://www.linkedin.com/in/obayed-bin-mahfuz-7b08b38b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <div className="social-icon" title="GitHub">
        <a
          href="https://github.com/obayedsiam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div className="social-icon" title="LeetCode">
        <a
          href="https://leetcode.com/u/user5461JF/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLeetcode size={30} />
        </a>
      </div>
    </div>
  );
}

export default SocialIcons;
