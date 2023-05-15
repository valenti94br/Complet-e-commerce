
import React, { useState } from 'react';
import axios from 'axios'; // Para hacer llamadas API
import { useNavigate } from 'react-router-dom'; // Para la navegación entre rutas

// Definimos el componente Register
const Register = () => {
  // Usamos useState para crear estados locales para el nombre, el email y la contraseña
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Desestructuramos el estado del formulario para extraer el nombre, el email y la contraseña
  const { name, email, password } = formData;

  // Esta función se ejecuta cada vez que se cambia el valor de uno de los campos del formulario
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Esta función se ejecuta cuando se envía el formulario
  const onSubmit = async (e) => {
    e.preventDefault(); // Evitamos que la página se recargue

    try {
      // Definimos la configuración para la llamada API
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // Creamos el cuerpo de la petición convirtiendo los datos del formulario a formato JSON
      const body = JSON.stringify({ name, email, password });

      // Hacemos una petición POST para registrar el usuario
      const response = await axios.post(
        'http://localhost:8080/users/createUser',
        body,
        config
      );

      console.log('Usuario registrado exitosamente', response.data);
      navigate('/login'); // Redirigimos al usuario a la página de login
    } catch (err) {
      console.error('Error al registrar el usuario', err.response.data);
    }
  };

  // Creamos una instancia de la función navigate
  const navigate = useNavigate();

  // Renderizamos el formulario de registro
  return (
    <div>
      <h1>Registro de usuarios</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

// Exportamos el componente Register
export default Register;
