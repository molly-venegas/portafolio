import "../../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import phoenix from "../../assets/projects/sporting-phoenix.png";
import dulces from "../../assets/projects/dulces-artesanales.png";

function Projects() {
  const projects = [
    {
      image: phoenix,
      title: "Sporting Phoenix",
      description: "Sitio web para un club de futsal.",
      technologies: ["React", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      image: dulces,
      title: "Dulces Artesanales",
      description: "Sitio web para un emprendimiento de dulces artesanales.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="proyectos" className="projects">
      <div className="projects-container">
        <h2>Proyectos</h2>

        <p>
          Algunos proyectos que he desarrollado durante mi aprendizaje y
          práctica como desarrolladora Frontend.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;