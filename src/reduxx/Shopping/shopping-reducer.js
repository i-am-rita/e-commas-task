// import ProductItem from '../../components/ProductItem'
import { addToCart } from './utils'
import * as actionTypes from './shopping-types'
import { removeFromCart} from './utils'
import { increaseQuantity } from './shopping-actions'
import { addFavorites } from './utils'
// import { clearCart } from './utils'

const INITIAL_STATE = {
    products: [], //{id, title, descr, price, img}
    cart: [], //{id, title, descr, price, img}
    currentItem: null,
    favorite: [],
}



const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            // const index = state.findIndex(prod => prod.id === item.id)
        return {
            ...state,
            cart : addToCart(action.payload, state.cart)
        }
        case actionTypes.REMOVE_FROM_CART:
        return {
            ...state,
            cart: removeFromCart(action.payload, state.cart)
        }

        case actionTypes.CLEAR_CART: 
        return {
            ...state,
            cart: (state.cart.filter(item => item.id !== action.payload.id))
        }
        

        case actionTypes.INCREASE_QUANTITY:
           return{
               ...state,
               cart: increaseQuantity(action.payload, state.cart++)
           }
      
        case actionTypes.SHOW_ALL_PRODUCTS: 
            return{
                ...state,
                products: action.payload.slice(1, 9)
            }

            case actionTypes.ADD_FAVORITES:
                return{
                    ...state,
                    favorite: addFavorites(action.payload, state.favorite)
                }

                default:
                    return state;
    }
}
export default shopReducer;