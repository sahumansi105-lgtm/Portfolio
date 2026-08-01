import "../CSS/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>Mansi Shahu</h2>
          <p>
            Aspiring Java Full Stack Developer passionate about building
            responsive, scalable, and user-friendly web applications using
            Java, Spring Boot, React, and MySQL.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> sahumansi105@gmail.com
          </p>

          <p>
            <FaPhoneAlt /> +91 7738216790
          </p>

          <p>📍 Mumbai, Maharashtra</p>

          <div className="footer-social">

            <a
              href="https://github.com/sahumansi105-lgtm"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mansi-shahu105"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:sahumansi105@gmail.com">
              <FaEnvelope />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mansi Shahu | Made with{" "}
        <FaHeart className="heart" /> using React & Spring Boot
      </div>

    </footer>
  );
}

export default Footer;