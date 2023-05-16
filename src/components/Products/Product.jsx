import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Product = () => {
  const { products, getProducts, addToCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h1>Market Page</h1>
      <p>Bienvenido a nuestra tienda en línea de videojuegos</p>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
