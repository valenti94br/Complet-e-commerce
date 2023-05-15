import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };

  const cartItems = cart.map((cartItem, i) => (
    <div className="cart" key={i}>
      <span>{cartItem.name}</span>
      <span>{cartItem.price.toFixed(2)}</span>
    </div>
  ));

  return (
    <div>
      {cartItems}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </div>
  );
};

export default Cart;
