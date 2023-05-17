// import React, { useContext, useEffect } from "react";
// import { ProductsContext } from "../../context/ProductsContext/ProductsState";

// const Product = () => {
//   const { products, getProducts, addToCart, cart } = useContext(ProductsContext);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   useEffect(()=> {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   return (
//     <div>
//       <h1>Market Page</h1>
//       <p>Bienvenido a nuestra tienda en línea de videojuegos</p>
//       <div>
//         {products.map((product) => (
//           <div key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img src={product.imageUrl} alt={product.name} />
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;


import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Button, Row, Col } from "antd";
import classNames from "classnames";
import "./Product.scss";

const { Meta } = Card;

const Product = () => {
  const { products, getProducts, addToCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h1>¡ELIGE TU JUEGAZO Y JUEGA MUCHO RATO!</h1>
      <p>En nuestra tienda tenemos tremendo catálogo de 8 juegos, más de los que te ofrece Manolo en Wallapop</p>
      <div>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <Meta title={product.name} />
                <div className="product-price">
                  <span className="price-label">Precio:</span>
                  <span className={classNames("price-value", "highlight")}>
                    ${product.price}
                  </span>
                </div>
                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Product;

