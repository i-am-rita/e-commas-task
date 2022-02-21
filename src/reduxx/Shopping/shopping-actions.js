import * as actionTypes from './shopping-types'


export const addToCart = (itemID) => {
     return {
         type: actionTypes.ADD_TO_CART,
         payload : itemID
     }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: itemID
    }
}

export const increaseQuantity = (itemID) => {
    return{
        type: actionTypes.INCREASE_QUANTITY,
        payload: itemID
    }
}
export const clearCart = (itemID) => {
    return {
        type: actionTypes.CLEAR_CART,
        payload: itemID
    }
}

export const addAllProducts = (payload) => {
    return{
        type: actionTypes.ADD_ALL_PRODUCTS,
        payload: payload, 
    }
}

export const showAllProducts = (payload) => {
    return{
        type: actionTypes.SHOW_ALL_PRODUCTS,
        payload: payload,
    }
}

export const addFavorites = (item) => {
    return{
        type: actionTypes.ADD_FAVORITES,
        payload: item,
    }
}
