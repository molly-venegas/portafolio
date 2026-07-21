import "../../styles/Skills.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <FaNodeJs />, name: "Node.js" },
  ];

  return (
    <section id="habilidades" className="skills">
      <div className="skills-container">
        <h2>Habilidades</h2>

        <p>
          Estas son algunas de las tecnologías que utilizo para desarrollar
          aplicaciones web modernas.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              {skill.icon}
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;