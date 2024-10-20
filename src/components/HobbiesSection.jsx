// HobbiesSection.js
import React, { useState } from "react";

function HobbiesSection() {
  const [activeHobby, setActiveHobby] = useState("traveling");

  // Handler for changing the active hobby category
  const handleHobbyClick = (hobby) => {
    setActiveHobby(hobby);
  };

  return (
    <section id="hobbies" className="section">
      <div className="container">
        <h2>Hobbies</h2>
        {/* Hobby category buttons */}
        <button onClick={() => handleHobbyClick("traveling")}>Traveling</button>
        <button onClick={() => handleHobbyClick("photography")}>
          Photography
        </button>
        <button onClick={() => handleHobbyClick("reviewWriting")}>
          Review Writing
        </button>
        <button onClick={() => handleHobbyClick("readingBooks")}>
          Reading Books
        </button>

        <br />
        <br />

        {/* Content based on active hobby category */}
        <div className="hobbies-content">
          {activeHobby === "traveling" && (
            <div className="traveling-hobby">
              <p>Exploring New Places</p>
              <p>Adventure Trips</p>
            </div>
          )}
          {activeHobby === "photography" && (
            <div className="photography-hobby">
              <p>Nature Photography</p>
              <p>Portraits</p>
            </div>
          )}
          {activeHobby === "reviewWriting" && (
            <div className="review-writing-hobby">
              <p>Book Reviews</p>
              <p>Product Reviews</p>
            </div>
          )}
          {activeHobby === "readingBooks" && (
            <div className="reading-books-hobby">
              <p>Fiction</p>
              <p>Non-Fiction</p>
              <p>Science & Technology</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HobbiesSection;
