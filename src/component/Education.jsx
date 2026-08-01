import "../CSS/Education.css";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">

        <div className="section-title">
          <span>MY JOURNEY</span>
          <h2>Education & Training</h2>
          <p>My Learning Path Towards Becoming a Full Stack Developer</p>
        </div>

        <div className="education-container">

          {/* Java Full Stack */}
          <div className="education-card">
            <div className="education-icon">
              <FaLaptopCode />
            </div>

            <div className="education-content">
              <span className="education-year">
                2025 – Present
              </span>

              <h3>Java Full Stack Development</h3>

              <h4>ITVEDANT Institute, Mumbai</h4>

              <p>
                Completed intensive training in Java Full Stack Development
                covering Core Java, Advanced Java, Spring Boot, React.js,
                MySQL, REST APIs, Git, GitHub, HTML5, CSS3, Bootstrap and
                JavaScript. Built multiple real-world full stack projects
                following industry best practices.
              </p>

              <div className="education-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React.js</span>
                <span>MySQL</span>
                <span>REST API</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </div>
          </div>

          {/* Graduation */}
          <div className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <div className="education-content">
              <span className="education-year">
                2024 – 2025
              </span>

              <h3>Bachelor of Commerce (B.Com)</h3>

              <h4>
                Bharatiya Vidya Bhavan's Hazarimal Somani College
              </h4>

              <p>
                Graduated from the University of Mumbai while developing a
                strong interest in software development. Transitioned into
                Full Stack Development through professional training and
                hands-on project experience.
              </p>

              <div className="education-tags">
                <span>University of Mumbai</span>
                <span>Graduate</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;