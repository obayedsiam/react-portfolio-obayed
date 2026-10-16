// SkillsSection.jsx
import React from "react";
import "./SkillsSection.css";

function SkillsSection() {
  return (
    <div>
      {/* Skills Columns */}
      <div className="skills-columns">
        <div className="skills-column">
          <h3>Backend (Java)</h3>
          <p>
            <strong>Language:</strong> Java <br />
            <strong>Framework:</strong> Spring Boot <br />
            <strong>Core Java:</strong> OOP, Collections, MVC, Thread <br />
            <strong>Advanced Java:</strong> Servlet, JSP, JPA, Hibernate <br />
            <strong>IDE:</strong> IntelliJ IDEA, NetBeans, Eclipse <br />
            <strong>Database:</strong> MySQL <br />
            <strong>Version Control:</strong> GitHub, GitLab
          </p>
        </div>
        <div className="skills-column">
          <h3>Front End (React)</h3>
          <p>
            <strong>Language:</strong> JavaScript, ES6, JSX <br />
            <strong>React JS:</strong> Components, Hooks, Redux, Saga <br />
            <strong>IDE:</strong> VS Code <br />
            <strong>Design:</strong> Bootstrap, HTML5, CSS3
          </p>
        </div>
        <div className="skills-column">
          <h3>Machine Learning (Python)</h3>
          <p>
            <strong>Language:</strong> Python <br />
            <strong>Framework/IDE:</strong> PyCharm, Google Colab <br />
            <strong>Libraries:</strong> Pandas, Transformer, PyTorch, Sklearn,
            Numpy <br />
            <strong>Tools:</strong> Selenium, WebDriver, Matplotlib, Wordcloud{" "}
            <br />
            <strong>Research Area:</strong> Bangla Text NLP (Sentiment Analysis)
          </p>
        </div>
        <div className="skills-column">
          <h3>Web Scraping / Web Crawling</h3>
          <p>
            <strong>Libraries:</strong> BeautifulSoup, Scrapy, Selenium <br />
            <strong>Techniques:</strong> Data extraction, Data cleaning, Web
            automation
          </p>
        </div>
        <div className="skills-column">
          <h3>Robotics</h3>
          <p>
            <strong>Microcontrollers:</strong> Arduino, NodeMCU 8266 <br />
            <strong>Sensors:</strong> Temperature, Humidity, Motion, Distance{" "}
            <br />
            <strong>Programming:</strong> C/C++, Python
          </p>
        </div>
        <div className="skills-column">
          <h3>Android Application Development</h3>
          <p>
            <strong>Language:</strong> Java, Kotlin <br />
            <strong>Framework:</strong> Android SDK, Jetpack <br />
            <strong>Tools:</strong> Android Studio <br />
            <strong>Core Concepts:</strong> Activity, Services, Broadcasts,
            Content Providers
          </p>
        </div>
      </div>
      {/* Skill Strength Bar */}
      <div className="skill-strength">
        <h3>Skills Strength Comparison</h3>
        <div className="container">
          <div className="skillbar expert" data-skill="Backend (Java)"></div>
          <div
            className="skillbar advanced"
            data-skill="Front-end (React)"
          ></div>
          <div
            className="skillbar intermediate"
            data-skill="Machine Learning"
          ></div>
          <div className="skillbar basic" data-skill="Robotics"></div>
          <div className="skillbar learning" data-skill="Android"></div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
