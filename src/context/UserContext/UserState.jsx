import React, { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

// Obtenemos el token de las localStorage, si existe.
const token = JSON.parse(localStorage.getItem("token"));

// Definimos el estado inicial, incluyendo el token (si existe) y el usuario (inicialmente nulo).
const initialState = {
  token: token ? token : null,
  user: null,
};

// Definimos la URL de la API.
const API_URL = "http://localhost:8080";

// Creamos el UserContext con el estado inicial.
export const UserContext = createContext(initialState);

// Creamos el UserProvider, que incluye las funciones que manejan las acciones del usuario.
export const UserProvider = ({ children }) => {
  // Usamos el useReducer con el UserReducer y el estado inicial.
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Definimos la función de login, que hace una petición POST a la API y actualiza el estado y las localStorage con el token recibido.
  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  // Definimos la función getUserInfo, que hace una petición GET a la API y actualiza el estado con la información del usuario recibida.
  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const res = await axios.get(
        API_URL + "/users/info",
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data,
      })
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  // Definimos la función de logout, que hace una petición DELETE a la API y elimina el token del estado y de las localStorage.
  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout",  
    {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  // Retornamos el UserContext.Provider, pasando como value el estado y las funciones definidas, y como children los componentes hijos.
  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserInfo,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};