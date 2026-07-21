import "../../styles/Contact.css";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact-container">

        <h2>Contacto</h2>

        <p>
          ¿Te interesa trabajar conmigo o conocer más sobre mis proyectos?
          Puedes encontrarme en los siguientes medios.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <FaEnvelope />
            <h3>Email</h3>
            <a href="mailto:tu-correo@email.com">
              tu-correo@email.com
            </a>
          </div>

          <div className="contact-card">
            <FaGithub />
            <h3>GitHub</h3>
            <a
              href="https://github.com/molly-venegas"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/molly-venegas
            </a>
          </div>

          <div className="contact-card">
            <FaLinkedin />
            <h3>LinkedIn</h3>
            <span>Próximamente</span>
          </div>

          <div className="contact-card">
            <FaLocationDot />
            <h3>Ubicación</h3>
            <span>Auckland, New Zealand</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;