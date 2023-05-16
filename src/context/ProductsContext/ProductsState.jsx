import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import ProductsReduce from "./ProductsReduce";

const API_URL = "http://localhost:8080";

const cart =JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: [],
  product: {},
  cart: cart ? cart : [],
};

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReduce, initialState);

  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL + "/products/getAllProducts");
      dispatch({
        type: "GET_PRODUCTS",
        payload: response.data.getAllProducts
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        product: state.product,
        cart: state.cart,
        getProducts,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
