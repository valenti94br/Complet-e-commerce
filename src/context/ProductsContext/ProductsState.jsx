
import { createContext } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReduce";

// Este es el estado inicial de los productos y del carrito.
const initialState = {
  products: [],
  cart: [],
};

const API_URL = "http://localhost:8080";

// Se crea el contexto de los productos.
export const ProductsContext = createContext(initialState);

// Se crea el proveedor del contexto de los productos.
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  // Esta función obtiene los productos del servidor y los guarda en el estado.
  const getProducts = async () => {
    const res = await axios.get(API_URL + "/products");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };

  // Esta función añade un producto al carrito.
  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  // Esta función vacía el carrito.
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  // Se retorna el proveedor del contexto con los valores del estado y las funciones para modificarlo.
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
