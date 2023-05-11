import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Product = () => {
  const { products, getProducts } = useContext(GlobalContext);

  useEffect(() => {
    getProducts();
  }, []);

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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
