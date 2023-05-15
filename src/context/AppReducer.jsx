
const products = (state, action) => {
    switch (action.type) {
        // En caso de la acción "GET_PRODUCTS", se actualiza el estado con los productos recibidos en el payload de la acción.
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        // Para cualquier otra acción, se retorna el estado sin cambios.
        default:
            return state;
    }
};

// Se exporta el reducer para ser utilizado en otros archivos.
export default products;
