import "../CSS/Projects.css";
import projects from "../component/ProjectData";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  
  return (
    <section className="projects" id="projects">

      <div className="section-title">

        <span>PORTFOLIO</span>

        <h2>Featured Projects</h2>

        <p>Swipe • Click • Explore</p>

      </div>

<Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={1.2}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2,
    slideShadows: false,
    scale: 0.9,
  }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="projectSwiper"
>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>

            <div className="project-card">

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="overlay">

                <h2>{project.title}</h2>

                <h4>{project.subtitle}</h4>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}

                </div>

                <div className="buttons">

                {project.live && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaExternalLinkAlt />
    Live
  </a>
)}

             <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub />
  Code
</a>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}

export default Projects;