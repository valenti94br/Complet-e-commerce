
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Card } from 'antd';
import './Profile.scss';

const { Meta } = Card;

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="profile-container"> {/* Agrega una clase específica para el contenedor del Profile */}
      <Card className="profile-card">
        <Meta title="Perfil de Usuario" className="profile-name" />
        <p className="profile-email">Email: {user.email}</p>
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
      </Card>
    </div>
  );
};

export default Profile;



