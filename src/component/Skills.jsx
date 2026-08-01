import "../CSS/Skills.css";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiPostman,
  SiVite,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      description: "Creating responsive and interactive user interfaces.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React.js", icon: <FaReact /> },
      ],
    },

    {
      title: "Backend",
      icon: <FaServer />,
      description: "Developing secure and scalable backend applications.",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
      ],
    },

    {
      title: "Database",
      icon: <FaDatabase />,
      description: "Managing structured data efficiently.",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "Tools",
      icon: <FaTools />,
      description: "Development and deployment tools I use daily.",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Technologies I Work With</p>
        </div>

        <div className="skills-container">

          {skillCategories.map((category, index) => (

            <div className="skill-card" key={index}>

              <div className="card-header">

                <div className="category-icon">
                  {category.icon}
                </div>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

              </div>

              <div className="skill-list">

                {category.skills.map((skill, i) => (

                  <div className="skill-item" key={i}>

                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    <span className="skill-name">
                      {skill.name}
                    </span>


                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;