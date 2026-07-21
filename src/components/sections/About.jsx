import "../../styles/About.css";
import { FaLaptopCode, FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="about-container">
        <h2>Sobre mí</h2>

        <p>
          Soy Técnico en Informática de Chile y actualmente vivo en Nueva Zelanda.
          Estoy especializándome en desarrollo Frontend con React, JavaScript, HTML y
          CSS. Disfruto crear interfaces modernas, responsivas y fáciles de usar,
          mientras continúo aprendiendo nuevas tecnologías para crecer como
          desarrolladora.
        </p>

        <div className="about-info">
          <div className="about-card">
            <FaLocationDot />
            <span>Chile → Nueva Zelanda</span>
          </div>

          <div className="about-card">
            <FaLaptopCode />
            <span>Apasionada por el desarrollo web.</span>
          </div>

          <div className="about-card">
            <MdWork />
            <span>Buscando mi primera oportunidad como Frontend Developer.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;