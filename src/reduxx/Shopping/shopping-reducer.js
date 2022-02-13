// import ProductItem from '../../components/ProductItem'
import { addToCart } from './utils'
import * as actionTypes from './shopping-types'
import { removeFromCart} from './utils'
import { increaseQuantity } from './shopping-actions'
// import { adjustQty } from './utils'
// import ProductItem  from '../../components/ProductItem'
// import Productgrid from '../../components/Productgrid/Productgrid'

const INITIAL_STATE = {
    products: [], //{id, title, descr, price, img}
    cart: [], //{id, title, descr, price, img}
    currentItem: null,
}



const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            // const index = state.findIndex(prod => prod.id === item.id)
        return {
            ...state,
            cart : addToCart(action.payload, state.cart)
            
            
            // products: state.products.map()
        }
        case actionTypes.REMOVE_FROM_CART:
        return {
            ...state,
            cart: removeFromCart(action.payload, state.cart)
        }

        // case actionTypes.INCREASE_ITEM_COUNT_IN_CART_ACTION:
        //     return{ 
        //         ...state,
        //         cart: AddExistingItemToCart(state.cart, action.payload)
        //     }
        // case actionTypes.ADJUST_QTY:
        //     return{
        //         ...state,
               
        //     }

        case actionTypes.INCREASE_QUANTITY:
            // state.numberCart++
            // state.cart[action.payload].quantity++;
           return{
               ...state,
               cart: increaseQuantity(action.payload, state.cart++)
           }
      
        case actionTypes.ADD_ALL_PRODUCTS:
        return {
        //     ...state,
        //    products :  action.payload.slice(1, 9)
        }
        case actionTypes.SHOW_ALL_PRODUCTS: 
            return{
                ...state,
                products: action.payload.slice(1, 9)
            }
        default:
            return state;

    }
}
export default shopReducer;