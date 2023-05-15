import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080";

export const ProductsContext = createContext();

const initialState = {
  products: [],
  cart: [],
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL + "/products");
      dispatch({
        type: "GET_PRODUCTS",
        payload: response.data,
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
