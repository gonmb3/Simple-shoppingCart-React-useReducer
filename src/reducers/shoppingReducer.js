import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {

    products: [
        { id: 1, name: "Producto1", price: 500 },
        { id: 2, name: "Producto2", price: 603 },
        { id: 3, name: "Producto3", price: 890 },
        { id: 4, name: "Producto4", price: 100 },
        { id: 6, name: "Producto5", price: 50 },
        { id: 7, name: "Producto6", price: 460 },
    ],
    cart: []
}
// AGREGAR PRODUCTO AL CARRITO Y AUMENTAR CANTIDAD--------------------------------------------------------------------------------------
export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(item => item.id === action.payload); 
            const itemExists = state.cart.find(item => item.id === newItem.id)
            return itemExists ? {                                           // SI ELEMENTO EXISTE AUMENTAR CANTIDAD  -------
                ...state,                                                                                   //
                cart: state.cart.map(item => item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item)      //
            } : {                                                                                                       //
                ...state,
                cart: [...state.cart, { ...newItem, qty: 1 }],                       /////      ///         //
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            const itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.qty > 1 ? {
                ...state,
                cart:state.cart.map(item => item.id === action.payload ? {...item, qty:item.qty - 1} : item)
            }: {
                ...state,
                cart:state.cart.filter(item => item.id !== action.payload)
            }

        }
        case TYPES.REMOVE_FROM_CART: {              
                                      {/*ELIMINAR TODA LA CANTIDAD DEL MISMO PRODUCTO*/}
                return {
                    ...state,
                    cart:state.cart.filter(item => item.id !== action.payload)
                }
        }
        case TYPES.CLEAR_CART: {               // LIMPIAR CARRITO ------------------------------------------
            return shoppingInitialState;     //
        }
        default:
            return state

    }
}