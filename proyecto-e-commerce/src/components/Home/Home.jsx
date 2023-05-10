import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Home() {
  return (
    <div>
      <h1>Bienvenido a Console Kingdom</h1>
      <p>Aquí encontrarás los mejores videojuegos al mejor precio.</p>
      <Link to="/market">
        <button>Ir a la tienda</button>
      </Link>
    </div>
  );
}

export default Home;
