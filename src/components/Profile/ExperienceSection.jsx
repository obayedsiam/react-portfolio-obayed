// ExperienceSection.js
import React from "react";

function ExperienceSection({
  showMoreAnwar,
  setShowMoreAnwar,
  showMoreAdventure,
  setShowMoreAdventure,
  showMoreEthics,
  setShowMoreEthics,
  showMoreRobotics,
  setShowMoreRobotics,
}) {
  return (
    <div className="experience-section">
      <div className="job-entry">
        <div className="job-title">Java Backend Developer</div>
        <div className="job-duration">May, 2025 – Continuing</div>
        <div className="company-name">Anwar Technologies</div>
        <div className="location">Motijheel, Dhaka</div>
        <br />
        <div className="project-details">
          Currently engaged in the development of an dev ops application, with a
          primary focus on the user management and hotel booking services.
          <br></br> <br></br>
          The project aims to create a seamless experience for users to manage
          their accounts, search for hotels, and make bookings through an
          intuitive interface.
          <br></br> <br></br>
          Responsible for developing and maintaining a microservice-based
          architecture using the Spring framework.
          {showMoreAnwar && (
            <div className="more-details">
              <h4>Technical Details:</h4>
              <p>
                The project leverages cutting-edge technologies, including
                Spring Boot for building robust microservices, Hibernate for
                efficient data management and ORM (Object-Relational Mapping),
                Redis for caching to enhance performance, and PostgreSQL as the
                primary database for secure and scalable data storage.
              </p>
              <p>
                The project also involves implementing features such as user
                authentication, authorization, and secure payment processing,
                while ensuring high availability and fault tolerance through
                effective use of microservices.
              </p>
            </div>
          )}
          <button onClick={() => setShowMoreAnwar(!showMoreAnwar)}>
            {showMoreAnwar ? "See Less" : "See More"}
          </button>
        </div>
      </div>

      <div className="job-entry">
        <div className="job-title">Software Engineer</div>
        <div className="job-duration">May, 2024 – May 2025</div>
        <div className="company-name">Adventure Dhaka Limited</div>
        <div className="location">Banani, Dhaka</div>
        <br />
        <div className="project-details">
          Currently engaged in the development of an online travel agency web
          application, with a primary focus on the user management and hotel
          booking services.
          <br></br> <br></br>
          The project aims to create a seamless experience for users to manage
          their accounts, search for hotels, and make bookings through an
          intuitive interface.
          <br></br> <br></br>
          Responsible for developing and maintaining a microservice-based
          architecture using the Spring framework.
          {showMoreAdventure && (
            <div className="more-details">
              <h4>Technical Details:</h4>
              <p>
                The project leverages cutting-edge technologies, including
                Spring Boot for building robust microservices, Hibernate for
                efficient data management and ORM (Object-Relational Mapping),
                Redis for caching to enhance performance, and PostgreSQL as the
                primary database for secure and scalable data storage.
              </p>
              <p>
                The project also involves implementing features such as user
                authentication, authorization, and secure payment processing,
                while ensuring high availability and fault tolerance through
                effective use of microservices.
              </p>
            </div>
          )}
          <button onClick={() => setShowMoreAdventure(!showMoreAdventure)}>
            {showMoreAdventure ? "See Less" : "See More"}
          </button>
        </div>
      </div>

      <div className="job-entry">
        <div className="job-title">Software Engineer</div>
        <div className="job-duration">November, 2023 – May, 2024</div>
        <div className="job-title">Jr. Software Engineer</div>
        <div className="job-duration">April, 2021 – October, 2023</div>
        <div className="company-name">Ethics Advance Technology Ltd</div>
        <div className="location">Bashundhara R/A, Dhaka</div>
        <br />
        <div className="project-details">
          Developed and optimized the "Foreign Scholarship" (FS) service, a
          microservice-based web application integrated within the Integrated
          Education Information Management System (IEIMS) project. This
          implementation improved the efficiency and scalability of the
          application.
          {showMoreEthics && (
            <div className="more-details">
              <h4>Technical Details:</h4>
              <p>
                Additionally, designed and implemented Jasper Reports for five
                key services (EIIN, NTRCA, EIMS, FS, and e-Survey), comprising
                over 150 sub-reports. This initiative significantly reduced
                report generation time, enhancing operational efficiency.
              </p>
              <p>
                Drafted comprehensive Software Requirements Specifications (SRS)
                and Software Design Documents (SDD) for all 13 modules
                (services), which included detailed UML diagrams, use cases, and
                sequence diagrams, ensuring clarity and thorough documentation
                for the development team.
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
        <div className="job-duration">September, 2019 – April, 2020</div>
        <div className="company-name">Multitech IT</div>
        <div className="location">Rajshahi</div>
        <br />
        <div className="project-details">
          Contributed to the Bangladesh High Tech Park Robotics and IoT Training
          Project, where I played a pivotal role in educating and empowering
          students in the fields of robotics and the Internet of Things (IoT).
          {showMoreRobotics && (
            <div className="more-details">
              <h4>Technical Details:</h4>
              <p>
                My responsibilities included: Conducting hands-on training
                sessions focused on microcontroller programming, where I
                introduced students to various types of microcontrollers, their
                functionalities, and their applications in real-world scenarios.
              </p>

              <p>
                Facilitating workshops on sensor integration, guiding students
                on how to effectively connect and utilize different sensors to
                gather data and enhance project capabilities. This included
                working with sensors such as temperature, humidity, motion, and
                distance sensors.
              </p>
              <p>
                Mentoring students in project development, assisting them in
                designing and implementing integrated systems that combine
                microcontrollers and sensors. This involved providing support
                throughout the entire project lifecycle, from initial concept
                development to final implementation, ensuring that students
                gained practical experience in building functional IoT
                applications.
              </p>
            </div>
          )}
          <button onClick={() => setShowMoreRobotics(!showMoreRobotics)}>
            {showMoreRobotics ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
