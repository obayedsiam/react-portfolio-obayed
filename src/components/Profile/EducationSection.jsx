// EducationSection.js
import React from "react";

function EducationSection() {
  return (
    <div className="education-section">
      <div className="education-column">
        <h3>Master of Science</h3>
        <div className="education-duration">2017 - 2024</div>
        <div> Computer Science and Engineering</div>
        <div className="education-duration">CGPA : 3.33</div>
        <div className="education-institution">
          Islamic University of Technology (IUT)
        </div>
        <div className="education-institution">Gazipur, Bangladesh</div>
      </div>
      <div className="education-column">
        <h3>Bachelor of Science</h3>
        <div className="education-duration">2012 - 2016</div>
        <div> Computer Science and Engineering</div>
        <div className="education-duration">CGPA : 3.22</div>
        <div className="education-institution">BRAC University</div>
        <div className="education-institution">Dhaka, Bnagladesh</div>
      </div>
      <div className="education-column">
        <h3>Higher Secondary Certificate (HSC)</h3>
        <div className="education-duration">2010 - 2011</div>
        <div className="education-duration">Group : Science, GPA : 5</div>
        <div className="education-institution">Sylhet Cadet College</div>
      </div>
      <div className="education-column">
        <h3>Secondary School Certificate (SSC)</h3>
        <div className="education-duration">2008 - 2009</div>
        <div className="education-duration">Group : Science, GPA : 5</div>
        <div className="education-institution">Sylhet Cadet College</div>
      </div>
    </div>
  );
}

export default EducationSection;
