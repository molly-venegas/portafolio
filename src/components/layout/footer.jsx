import "../../styles/Footer.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>MV</h2>

        <p>
          © {new Date().getFullYear()} Molly Venegas.
          Todos los derechos reservados.
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com/molly-venegas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:tu-correo@email.com">
            <FaEnvelope />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;