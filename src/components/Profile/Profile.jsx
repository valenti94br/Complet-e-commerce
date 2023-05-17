import React, { useContext, useEffect } from 'react';
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
      <h3>Pedidos:</h3>
      {user.Orders.length > 0 ? (
        <ul>
          {user.Orders.map((order) => (
            <li key={order.id}>
              <h4>Orden ID: {order.id}</h4>
              <p>Fecha: {order.createdAt}</p>
              <p>Productos:</p>
              <ul>
                {order.Products.map((product) => (
                  <li key={product.id}>
                    Nombre: {product.name}, Precio: {product.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay pedidos</p>
      )}
    </div>
  );
};

export default Profile;
