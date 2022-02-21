import './Cart.css';
import { useSelector, useDispatch} from 'react-redux'
import {  addToCart } from '../../reduxx/Shopping/shopping-actions';
import { removeFromCart, clearCart } from '../../reduxx/Shopping/shopping-actions';
import MyModaal from '../Modaal-1/Modaal';
import { useState } from 'react';

export default function Cart() {
    let cartItems = useSelector(state => state.shop.cart)
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    return (
    <>
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
                <i class="fas fa-close" onClick={() => dispatch(clearCart(item))}></i>
                <img src={item.image} alt='' />
                <p>{item.title}</p> 
            </div>
              <div className='second-item'>
                <p>${item.price * item.qty}</p>
                <div className="add_remove">
                  <div
                    className="minus_button"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    -
                  </div>
                  <span>{item.qty}</span>
                  <div
                    className="add_button"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </div>
                </div>
                <p>${item.price}</p>           
            </div>
            </>
            )
        })}
        </div>
        
        <hr className='hr' />
        <div className='checkout-item'>
            {/* <div className='voucher-button'>
                <input type='search' placeholder='Voucher Code' />
                <button 
                >Redeem</button>
            </div> */}
            <div className='checking'>
                <div>
                    <p>Subtotal</p>
                    <p>{cartItems.reduce((total, item) => total + (item.price * item.qty), 0)}</p>
                </div>
                {/* <div>
                    <p>Shipping fee</p>
                    <p>$20</p>
                </div> */}
                <div>
                    <p>Coupon</p>
                    <p>No</p>
                </div>
                <hr className='horiz' />
                <div>
                    <h1>Total</h1>
                    <h1>{cartItems.reduce((total, item) => total + (item.price * item.qty), 0)}</h1>
                </div>
                <button className='redeem-button'
                onClick={() => setOpenModal(true)
                // setSingleItem(cartItems)
                }
                >
                Redeem</button>
                {/* </div> */}
            </div>
        </div>
        <div> 
        <MyModaal open={openModal} close={setOpenModal} />
        </div>
       </>
    )
    }