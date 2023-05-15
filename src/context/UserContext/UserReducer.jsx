
const users = (state, action) => {
  // El reducer utiliza una declaración switch para manejar las diferentes acciones que pueden ocurrir.
  switch (action.type) {
    // Cuando se recibe la acción "LOGIN", el estado del token se actualiza con el token del payload de la acción.
    case "LOGIN":
      return {
        ...state, // Se mantiene el estado actual...
        token: action.payload.token, // ...pero se actualiza el token con el nuevo valor.
      };
    // Cuando se recibe la acción "GET_USER_INFO", el estado del usuario se actualiza con el usuario del payload de la acción.
    case "GET_USER_INFO":
      return {
        ...state, // Se mantiene el estado actual...
        user: action.payload.user, // ...pero se actualiza el usuario con los nuevos datos.
      };
    // Cuando se recibe la acción "LOGOUT", se elimina el usuario y el token del estado.
    case "LOGOUT":
      return {
        ...state, // Se mantiene el estado actual...
        user: null, // ...pero se elimina el usuario.
        token: null, // ...y se elimina el token.
      };
    // Si la acción no coincide con ninguna de las anteriores, simplemente se devuelve el estado actual.
    default:
      return state;
  }
};

export default users;
