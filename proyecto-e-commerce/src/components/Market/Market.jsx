import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Market() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/products/getAllProducts');
          setProducts(response.data.getAllProducts);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Market Page</h1>
        <p>Bienvenido a nuestra tienda en línea de videojuegos</p>
        <div>
          { products.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Market;
