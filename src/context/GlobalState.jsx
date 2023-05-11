import React, { createContext, useReducer, useEffect } from "react";
import axios from 'axios';
import AppReducer from './AppReducer';

// Aquí empezamos la movida
const initialState = {
  products: []
};

// Creamos el contexto
export const GlobalContext = createContext(initialState);

// Se lo pide porfa plis al proveedor
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Aquí pasan las moviditas
  async function getProducts() {
    try {
      const response = await axios.get('http://localhost:8080/products/getAllProducts');
      dispatch({
        type: 'GET_PRODUCTS',
        payload: response.data.getAllProducts
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <GlobalContext.Provider value={{
      products: state.products,
      getProducts
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
