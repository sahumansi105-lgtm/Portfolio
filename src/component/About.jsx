import "../CSS/About.css";
import resume from "../assets/resume.pdf";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaCode,
  FaUserCheck,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
          <p>Get To Know Me</p>
        </div>

        <div className="about-content">

          {/* Left Side */}
          <div className="about-text">

            <span className="about-tag">
              Java Full Stack Developer
            </span>

            <h3>
              Building Modern & Responsive
              <span> Web Applications</span>
            </h3>

            <p>
              I'm <strong>Mansi Sahu</strong>, an aspiring Java Full Stack
              Developer passionate about building responsive, scalable and
              user-friendly web applications using Java, Spring Boot,
              React.js and MySQL.
            </p>

            <p>
              I enjoy solving real-world problems through clean code,
              continuously learning new technologies, and creating projects
              that improve my development skills.
            </p>

            <div className="about-info">

              <div>
                <strong>Name</strong>
                <span>Mansi Sahu</span>
              </div>

              <div>
                <strong>Email</strong>
                <span>sahumansi105@gmail.com</span>
              </div>

              <div>
                <strong>Location</strong>
                <span>Mumbai, India</span>
              </div>

              <div>
                <strong>Role</strong>
                <span>Java Full Stack Developer</span>
              </div>

            </div>

            <a href={resume} download className="btn primary">
              Download Resume
            </a>

          </div>

          {/* Right Side */}

          <div className="about-cards">

            <div className="about-card">
              <FaLaptopCode className="icon" />
              <h3>Fresher</h3>
              <p>Open To Work</p>
            </div>

            <div className="about-card">
              <FaProjectDiagram className="icon" />
              <h3>6+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="about-card">
              <FaCode className="icon" />
              <h3>10+</h3>
              <p>Technologies</p>
            </div>

            <div className="about-card">
              <FaGraduationCap className="icon" />
              <h3>B.Com</h3>
              <p>University of Mumbai</p>
            </div>

            <div className="about-card">
              <FaMapMarkerAlt className="icon" />
              <h3>Mumbai</h3>
              <p>India</p>
            </div>

            <div className="about-card">
              <FaUserCheck className="icon" />
              <h3>100%</h3>
              <p>Passionate Learner</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;