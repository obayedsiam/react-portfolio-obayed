// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#research">Research</a>
          </li>
          <li>
            <a href="#hobbies">Hobbies</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
