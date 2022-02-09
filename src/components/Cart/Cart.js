// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProductItem from '../ProductItem';
// import data from '../../Data';
import './Cart.css';
import brownbag from '../../images/brown-bag.png'
// import ProductItem from '../ProductItem';
// import { useState } from 'react';

export default function Cart(props) {
    // const [show, setShow] = useState
    // const [cartItems, setCartItems] = useState([])
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
            <div className='b'>
                <i class="fas fa-star"></i>
                <img src={brownbag} alt='' />
                <p>Nike AirMax 270 React</p>
            </div>

            <div className='second-item'>
                <p>$998</p>
                <p>button</p>
                {/* <button>- 2 +</button> */}
                <p>$499</p>
            </div>
        </div>
        <hr className='hr' />
        <div className='first-item'>
            <div className='b'>
                <i class="fas fa-star"></i>
                <img src={brownbag} alt='' />
                <p>Nike AirMax 270 React</p>
            </div>

            <div className='second-item'>
                <p>$998</p>
                <p>button</p>
                {/* <button>- 2 +</button> */}
                <p>$499</p>
            </div>
        </div>
        <hr className='hr' />
        <div className='checkout-item'>
            <div className='voucher-button'>
                <input type='search' placeholder='Voucher Code' />
                <button>Redeem</button>
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


        {/* </div> */}


        {/* <h1>Cart Details</h1>
      {cartItems.length === 0 && (
          <div className='empty-cart'>
          <h2>bhbj</h2>
          </div> 
      )}
      <div>
          {cartItems.map((item) => (
              <div key={item.id} className='cart-item-list'>
                   <img className='cart-item-image' alt=''
                       src={item.img}
                   />
              </div>
          ))}
      </div> */}
        {/* </div> */}

    </>
}
