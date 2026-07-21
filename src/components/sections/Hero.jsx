import "../../styles/Hero.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import { SiJavascript } from "react-icons/si";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <p className="saludo">👋 Hola, soy</p>

          <h1>Molly Venegas</h1>

          <h2>Desarrolladora Frontend</h2>

          <p className="descripcion">
            Desarrollo aplicaciones web modernas utilizando React, JavaScript, HTML y CSS.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Ver proyectos</button>
            <button className="btn-secondary">Contacto</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="tech-card">
            <h3>Tecnologías</h3>

          <ul>
            <li><FaReact /> React</li>
            <li><SiJavascript /> JavaScript</li>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
            <li><FaGitAlt /> Git & GitHub</li>
          </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;