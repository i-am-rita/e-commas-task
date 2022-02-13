
import './Cart.css';
// import brownbag from '../../images/brown-bag.png'
import { useSelector, useDispatch} from 'react-redux'
// import { increaseQuantity } from '../../reduxx/Shopping/shopping-actions';
import {  addToCart } from '../../reduxx/Shopping/shopping-actions';
import { removeFromCart } from '../../reduxx/Shopping/shopping-actions';
// import { addToCart } from '../reduxx/Shopping/shopping-actions';
// import { useState } from 'react';
// import Modaal from './MyModaal'
// import { useState } from 'react';

export default function Cart({props} ) {
    const cartItems = useSelector(state => state.shop.cart)
    // const [state, setState] = useState(0)
    const dispatch = useDispatch()
    // const [openModal, setOpenModal] = useState(false)
    // const [show, setShow] = useState
    // const [cartItems, setCartItems] = useState([])
    // console.log(cartItems);
// let itemQty = document.getElement'item.qty'
// if (clicks === 0){
//  IncrementItem=()=>{
//     this.setState({ clicks: this.state.clicks + 1 });
//   }
// }
    // let prod = 0
    // function increment() {
    //     prod = prod + 1

    //     console.log(prod)
    // }
    return <>

        <button className='buttondeal'>
            <p><span>Home</span> / Hot Deal </p>
        </button>
        <div className='cart-page'>

            <p className='a'>Product</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Unit Price</p>
        </div>
        <hr className='hr' />

       

        <div className='first-item'>
        {cartItems.map((item) => {
            return(
                <>
                <div className='b'>
                <i class="fas fa-star"></i>
                <img src={item.image} alt='' />
                <p>{item.title}</p>
               
            </div>
              <div className='second-item'>

                <p>${item.price * item.qty}</p>
                <div className="add_remove">
                  <div
                    className="minus_button"
                    onClick={() => dispatch(removeFromCart(cartItems))}
                  >
                    -
                  </div>
                  <span>{item.qty}</span>
                  <div
                    className="add_button"
                    // onClick={this.IncrementItem}
                    // onClick={() => increaseItem(item)}
                    onClick={() => dispatch(addToCart(cartItems))}
                  >
                    +
                  </div>
                </div>
                <p>${item.price}</p>
                {/* <p>${item.price}</p> */}
            </div>
            </>
            )
        })}
        </div>

        <hr className='hr' />
        <hr className='hr' />
        <div className='checkout-item'>
            <div className='voucher-button'>
                <input type='search' placeholder='Voucher Code' />
                <button
                // onClick={()=>{
                //     setOpenModal(true)
                // }}
                >Redeem</button>
            </div>

            <div className='checking'>

                <div>
                    <p>Subtotal</p>
                    <p>$998</p>
                </div>
                <div>
                    <p>Shipping fee</p>
                    <p>$20</p>
                </div>
                <div>
                    <p>Coupon</p>
                    <p>No</p>
                </div>
                <hr className='horiz' />
                <div>
                    <h1>Total</h1>
                    <h1>$118</h1>
                </div>
                <button className='redeem-button'>Redeem</button>
                {/* </div> */}
            </div>
        </div>
        {/* <Modaal open={openModal}/> */}
    </>

    }