
import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import { Button, Card, Empty, message } from "antd";
import "./Cart.scss";

const { Meta } = Card;

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  if (cart.length <= 0) {
    return <Empty description="No tienes ningún producto añadido" />;
  }

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
    message.success("¡Gracias por alimentar al capitalismo con nosotros!");
  };

  const cartItems = cart.map((cartItem, i) => (
    <div className="cart-item" key={i}>
      <span className="cart-item-name">{cartItem.name}</span>
      <span className="cart-item-price">{cartItem.price.toFixed(2)}</span>
    </div>
  ));

  const totalPrice = cart.reduce((sum, cartItem) => sum + cartItem.price, 0);

  return (
    <div className="cart-container">
      <Card className="cart-card">
        <h2 className="cart-title">Carrito de Compras</h2>
        <div className="cart-items">
          <div className="cart-items-summary">{cartItems}</div>
        </div>
        <div className="total-price">
          <span className="total-label">Total:</span>
          <span className="total-value">{totalPrice.toFixed(2)}</span>
        </div>
        <div className="buttons">
          <Button type="primary" onClick={() => clearCart()}>
            Limpiar carrito
          </Button>
          <Button type="primary" onClick={() => createNewOrder()}>
            Crear Pedido
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Cart;




