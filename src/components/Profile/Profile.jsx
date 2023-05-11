import React, { useContext, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { UserContext } from '../../context/UserContext/UserState';

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  // Utilizamos el hook useEffect para obtener la información del usuario cuando el componente se monte
  useEffect(() => {
    getUserInfo();
  }, []);

  // Si el usuario todavía no se ha cargado, mostramos un mensaje de carga
  if (!user) {
    return <h2>Perfil</h2>;
  }

  // Si el usuario ya se ha cargado, mostramos su información
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Asegúrate de reemplazar estas propiedades con las que corresponden a tu objeto de usuario */}
    </div>
  );
};

export default Profile;
