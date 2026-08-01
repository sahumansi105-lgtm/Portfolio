import "../CSS/Hero.css";
import resume from "../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import heroImage from "../assets/images/hero.png"; // Add your illustration here

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="greeting">Hi 👋, I'm</p>

        <h1>
          Mansi <span>Shahu</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "Java Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p className="hero-description">
          Passionate Java Full Stack Developer skilled in Java, Spring Boot,
          React.js, MySQL, HTML, CSS, and JavaScript. I enjoy building
          responsive, scalable, and user-friendly web applications.
        </p>

<div className="hero-buttons">

    <a href={resume} className="btn primary" download>
        Download Resume
    </a>

    <a href="#projects" className="btn secondary">
        View Projects
    </a>

</div>

        <div className="social-icons">
          <a href="https://github.com/sahumansi105-lgtm" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/mansi-shahu105" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:sahumansi105@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Developer" />
      </div>
    </section>
  );
}

export default Hero;