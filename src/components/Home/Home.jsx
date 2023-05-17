import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Home.scss';

function Home() {
  return (
    <div className="home-container">
      {/* Título y mensaje de bienvenida */}
      <div className="home-content">
        <div className="home-text">
          <h1>Bienvenido a Console Kingdom</h1>
          <p>Aquí encontrarás algunos videojuegos a algún precio.... Si eso.</p>
          {/* Botón para redirigir al usuario a la página del mercado */}
          <div className="home-button">
            <Link to="/product">
              <button>Ir a la chupi tienda</button>
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img src="https://static.posters.cz/image/750webp/40519.webp" alt="Imagen" />
        </div>
      </div>
    </div>
  );
}

export default Home;

