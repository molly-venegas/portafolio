import "../../styles/Hero.css";

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
            <button>Ver proyectos</button>
            <button>Contacto</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="tech-card">
            <h3>Tecnologías</h3>

            <ul>
              <li>⚛️ React</li>
              <li>🟨 JavaScript</li>
              <li>🌐 HTML</li>
              <li>🎨 CSS</li>
              <li>🔧 Git & GitHub</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;