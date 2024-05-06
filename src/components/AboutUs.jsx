import React from 'react';
import '../styles/AboutUs.css';
import RetroStoreAbout from '../assets/about-us.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-title">
        <h2>Acerca de Nosotros</h2>
      </div>
      <div className="about-us-image">
        <img src={RetroStoreAbout} alt="Retro Store Logo" />
      </div>
      <div className="about-us-content">
        <p>
          Somos una tienda dedicada a productos para jugar juegos retro y merchandising retro.
          Nos apasiona ofrecer una amplia selección de productos de calidad que permitan a nuestros clientes revivir la nostalgia de los juegos retro y expresar su amor por esta época dorada de los videojuegos.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;