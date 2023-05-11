// Importamos las librerías necesarias
import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import NavBar from '../NavBar/NavBar';

// Definimos el componente Login
function Login() {
  // Utilizamos el hook useContext para tener acceso al UserContext
  const { login } = useContext(UserContext);

  // Creamos estados locales para el email y la contraseña con los hooks useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Esta función se activa cada vez que el valor del campo de email cambia
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Esta función se activa cada vez que el valor del campo de contraseña cambia
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Esta función se activa cuando se envía el formulario
  const handleSubmit = async (event) => {
    // Previene la recarga de la página al enviar el formulario
    event.preventDefault();
    try {
      // Llama a la función login del UserContext pasando el email y la contraseña
      await login({ email, password });
      // Aquí manejaríamos el inicio de sesión exitoso
    } catch (error) {
      console.error(error);
      // Aquí manejaríamos los errores en el inicio de sesión
    }
  };

  // Renderizamos el formulario de inicio de sesión
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

// Exportamos el componente Login
export default Login;
