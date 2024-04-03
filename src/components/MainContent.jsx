import React from 'react';
import brandLogo from '../assets/logo_claro.png';

const MainContent = ({ selectedItem }) => {
  // Contenido dinámico según la opción seleccionada en el NavBar
  let content;
  switch (selectedItem) {
    case 'Inicio':
      content = (
        <>
          <div>
            <a href="#" target="_blank">
              <img src={brandLogo} className="logo" alt="Retro Store Logo" />
            </a>
          </div>
          <h1>Bienvenidos!!</h1>
        </>
      );
      break;
    case 'Productos':
      // Aquí podrías colocar el contenido relacionado con los productos
      content = (
        <div>
          <h2>Productos</h2>
          <p>Contenido relacionado con los productos...</p>
        </div>
      );
      break;
    case 'Acerca de Nosotros':
      // Aquí podrías colocar información sobre la empresa o equipo
      content = (
        <div>
          <h2>Acerca de Nosotros</h2>
          <p>Información sobre la empresa o equipo...</p>
        </div>
      );
      break;
    default:
      content = (
        <>
          <div>
            <a href="#" target="_blank">
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
