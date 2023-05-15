
import React, { createContext, useReducer, useEffect } from "react";
import axios from 'axios';
import AppReducer from './AppReducer';

// Definimos el estado inicial.
const initialState = {
  products: []
};

// Creamos el contexto con el estado inicial.
export const GlobalContext = createContext(initialState);

// Creamos un proveedor para nuestro contexto.
export const GlobalProvider = ({ children }) => {
  // Utilizamos el hook useReducer para manejar nuestro estado.
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Definimos una función para obtener productos de la API.
  async function getProducts() {
    try {
      // Realizamos una solicitud GET a la API para obtener los productos.
      const response = await axios.get('http://localhost:8080/products/getAllProducts');
      
      // Despachamos una acción al reducer con los productos como payload.
      dispatch({
        type: 'GET_PRODUCTS',
        payload: response.data.getAllProducts
      });
    } catch (error) {
      // Registramos el error en caso de que la solicitud falle.
      console.error(error);
    }
  }

  // Devolvemos el proveedor de contexto que envuelve a los hijos y pasa el estado y las funciones.
  return (
    <GlobalContext.Provider value={{
      products: state.products,
      getProducts
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
