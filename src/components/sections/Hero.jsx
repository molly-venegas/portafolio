import "../../styles/Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero">
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
    </section>
  );
}

export default Hero;