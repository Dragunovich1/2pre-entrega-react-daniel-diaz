import React from 'react';
import brandLogo from '../assets/logo_claro.png';

const MainContent = ({ selectedItem }) => {
  // Contenido dinámico según la opción seleccionada en el NavBar (esto es viejo)
  let content;
  switch (selectedItem) {
    default:
      content = (
        <>
          <div>
            <a href="#">
              <img src={brandLogo} className="logo" alt="Retro Store Logo" />
            </a>
          </div>
          <h1>Bienvenidos!!</h1>
        </>
      );
  }

  return (
    <div className="main-content">
      {content}
    </div>
  );
};

export default MainContent;
