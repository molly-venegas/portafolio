import "../../styles/Projects.css";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "Portafolio Personal",
      description:
        "Portafolio desarrollado con React, Vite y CSS moderno.",
      technologies: ["React", "CSS", "Vite"],
      github: "#",
      demo: "#",
    },
    {
      title: "Sporting Phoenix",
      description:
        "Sitio web para un club de futsal con información, contacto y formulario.",
      technologies: ["React", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Dulces Artesanales",
      description:
        "Página web para un emprendimiento de repostería con diseño responsivo.",
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
                Próximamente
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
                  <a href={project.demo}>
                    <FiExternalLink />
                    Demo
                  </a>

                  <a href={project.github}>
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