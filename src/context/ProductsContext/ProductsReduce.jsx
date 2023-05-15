
const products = (state, action) => {
    // El reducer utiliza una declaración switch para manejar las diferentes acciones que pueden ocurrir.
    switch (action.type) {
      // Cuando se recibe la acción "GET_PRODUCTS", el estado de los productos se actualiza con los datos del payload de la acción.
      case "GET_PRODUCTS":
        return {
          ...state, // Se mantiene el estado actual...
          products: action.payload, // ...pero se actualizan los productos con los nuevos datos.
        };
      // Cuando se recibe la acción "ADD_CART", se añade el producto del payload al carrito.
      case "ADD_CART":
        return {
          ...state, // Se mantiene el estado actual...
          cart: [action.payload, ...state.cart], // ...pero se añade un nuevo producto al inicio del carrito.
        };
      // Cuando se recibe la acción "CLEAR_CART", se vacía el carrito.
      case "CLEAR_CART":
        return {
          ...state, // Se mantiene el estado actual...
          cart: [], // ...pero se vacía el carrito.
        };
      // Si la acción no coincide con ninguna de las anteriores, simplemente se devuelve el estado actual.
      default:
        return state;
    }
  };
  
  export default products;
  