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
// export const IncreaseItemCountInCartAction = itemID => {
//     return{
//         type: actionTypes.INCREASE_ITEM_COUNT_IN_CART_ACTION,
//         payload: itemID
//     }
// }

// export const productInfo = (payload) => {
//     return {
//         type: actionTypes.PRODUCT_INFO,
//         payload: payload,
//     }
// }
// export const adjustQty = (itemID, value) => {
//     return {
//         type: actionTypes.ADJUST_QTY,
//         payload: {
//             id: itemID,
//             qty: value,
//         }
//     }
// }

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

