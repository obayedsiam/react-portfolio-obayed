// ProfileSection.js
import React, { useState } from "react";
import "../styles/ProfileSection.css";

function ProfileSection() {
  const [activeSection, setActiveSection] = useState("experience");
  const [showMoreAdventure, setShowMoreAdventure] = useState(false);
  const [showMoreEthics, setShowMoreEthics] = useState(false);
  const [showMoreRobotics, setShowMoreRobotics] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section id="profile" className="section">
      <div className="container">
        <h2>PROFILE</h2>
        {/* Section headers */}
        <div className="section-buttons">
          <button
            onClick={() => handleSectionClick("experience")}
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </button>
          <button
            onClick={() => handleSectionClick("education")}
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </button>
          <button
            onClick={() => handleSectionClick("skills")}
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </button>
          <button
            onClick={() => handleSectionClick("research")}
            className={activeSection === "research" ? "active" : ""}
          >
            Research
          </button>
        </div>

        {/* Content based on active section */}
        <div className="section-content">
          {activeSection === "experience" && (
            <div className="experience-section">
              <div className="job-entry">
                <div className="job-title">Software Engineer</div>
                <div className="job-duration">May, 2024 – Continuing</div>
                <div className="company-name">Adventure Dhaka Limited</div>
                <div className="location">Banani, Dhaka</div>
                <br></br>
                <div className="project-details">
                  Currently engaged in the development of an online travel
                  agency web application, with a primary focus on the user
                  management and hotel booking services. The project aims to
                  create a seamless experience for users to manage their
                  accounts, search for hotels, and make bookings through an
                  intuitive interface.
                  {showMoreAdventure && (
                    <div className="more-details">
                      <h4>Technical Details:</h4>
                      <p>
                        Responsible for developing and maintaining a
                        microservice-based architecture using the Spring
                        framework. The project leverages cutting-edge
                        technologies, including Spring Boot for building robust
                        microservices, Hibernate for efficient data management
                        and ORM (Object-Relational Mapping), Redis for caching
                        to enhance performance, and PostgreSQL as the primary
                        database for secure and scalable data storage.
                      </p>
                      <p>
                        The project also involves implementing features such as
                        user authentication, authorization, and secure payment
                        processing, while ensuring high availability and fault
                        tolerance through effective use of microservices.
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => setShowMoreAdventure(!showMoreAdventure)}
                  >
                    {showMoreAdventure ? "See Less" : "See More"}
                  </button>
                </div>
              </div>
              <div className="job-entry">
                <div className="job-title">Software Engineer</div>
                <div className="job-duration">November, 2023 – May, 2024</div>
                <div className="job-title">Jr. Software Engineer</div>
                <div className="job-duration">April, 2021 – October, 2023</div>
                <div className="company-name">
                  Ethics Advance Technology Ltd
                </div>
                <div className="location">Bashundhara R/A, Dhaka</div>
                <br></br>
                <div className="project-details">
                  Developed and optimized the "Foreign Scholarship" (FS)
                  service, a microservice-based web application integrated
                  within the Integrated Education Information Management System
                  (IEIMS) project. This implementation improved the efficiency
                  and scalability of the application.
                  {showMoreEthics && (
                    <div className="more-details">
                      <h4>Technical Details:</h4>
                      <p>
                        Additionally, designed and implemented Jasper Reports
                        for five key services (EIIN, NTRCA, EIMS, FS, and
                        e-Survey), comprising over 150 sub-reports. This
                        initiative significantly reduced report generation time,
                        enhancing operational efficiency.
                      </p>
                      <p>
                        Drafted comprehensive Software Requirements
                        Specifications (SRS) and Software Design Documents (SDD)
                        for all 13 modules (services), which included detailed
                        UML diagrams, use cases, and sequence diagrams, ensuring
                        clarity and thorough documentation for the development
                        team.
                      </p>
                    </div>
                  )}
                  <button onClick={() => setShowMoreEthics(!showMoreEthics)}>
                    {showMoreEthics ? "See Less" : "See More"}
                  </button>
                </div>
              </div>
              <div className="job-entry">
                <div className="job-title">Robotic And IoT Instructor</div>
                <div className="job-duration">
                  September, 2019 – April, 2020
                </div>
                <div className="company-name">Multitech IT</div>
                <div className="location">Rajshahi</div>
                <br></br>
                <div className="project-details">
                  Contributed to the Bangladesh High Tech Park Robotics and IoT
                  Training Project, where I played a pivotal role in educating
                  and empowering students in the fields of robotics and the
                  Internet of Things (IoT).
                  {showMoreRobotics && (
                    <div className="more-details">
                      <h4>Technical Details:</h4>
                      <p>
                        My responsibilities included: Conducting hands-on
                        training sessions focused on microcontroller
                        programming, where I introduced students to various
                        types of microcontrollers, their functionalities, and
                        their applications in real-world scenarios.
                      </p>

                      <p>
                        Facilitating workshops on sensor integration, guiding
                        students on how to effectively connect and utilize
                        different sensors to gather data and enhance project
                        capabilities. This included working with sensors such as
                        temperature, humidity, motion, and distance sensors.
                      </p>
                      <p>
                        Mentoring students in project development, assisting
                        them in designing and implementing integrated systems
                        that combine microcontrollers and sensors. This involved
                        providing support throughout the entire project
                        lifecycle, from initial concept development to final
                        implementation, ensuring that students gained practical
                        experience in building functional IoT applications.
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => setShowMoreRobotics(!showMoreRobotics)}
                  >
                    {showMoreRobotics ? "See Less" : "See More"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === "education" && (
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
                <div className="education-duration">
                  Group : Science, GPA : 5
                </div>
                <div className="education-institution">
                  Sylhet Cadet College
                </div>
              </div>
              <div className="education-column">
                <h3>Secondary School Certificate (SSC)</h3>
                <div className="education-duration">2008 - 2009</div>
                <div className="education-duration">
                  Group : Science, GPA : 5
                </div>
                <div className="education-institution">
                  Sylhet Cadet College
                </div>
              </div>
            </div>
          )}

          {activeSection === "skills" && (
            <div className="skills-section">
              <p>Web Development</p>
              <p>Front End</p>
              <p>Research</p>
            </div>
          )}

          {activeSection === "research" && (
            <div className="research-section">
              <p>Masters Thesis</p>
              <p>Bachelor Thesis</p>
              <p>IoT Research</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
