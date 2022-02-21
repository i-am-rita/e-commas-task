import React from 'react'
import './Favorites.css'
// import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addFavorites } from '../../reduxx/Shopping/shopping-actions'
// import ProductItem from '../ProductItem'


export default function Favorites({ isFav }) {
    const favorite = useSelector(state => state.shop.favorite)
    const dispatch = useDispatch()
    // console.log(favorite)

    return (
        <>
            <button className='buttondeal'>
                <p><span>Home</span> / Hot Deal </p>
            </button>
            {/* <div className='cart-page'>

            <p className='a'>Product</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Unit Price</p>
        </div> */}
            {/* <hr className='hr' /> */}



            <div className='first-item'>
                {favorite.map((item) => {
                    return (
                        <>
                            <div className='b'>
                                {/* <i class="fas fa-close" onClick={() => dispatch(clearCart(item))}></i> */}
                                <img src={item.image} alt='' />
                                <p>{item.title}</p>
                            </div>
                            <div className='second-item'>
                                <p>${item.price}</p>
                                {isFav ? (<i class="fas fa-heart" onClick={() => {
                            // e.stopPropagation()
                            dispatch(addFavorites(item))}
                            }></i>
                            ) : <i class="fa fa-heart" onClick={() => {
                            // e.stopPropagation()
                            dispatch(addFavorites(item))}
                            }></i>
                            }
                                <p> <i class="fas fa-shopping-cart" onClick={() =>
                                    dispatch(addToCart(item))
                                }></i></p>
                            </div>
                        </>
                    )
                })}
            </div>

            {/* <div className="favorite">

                {favorite.map((item, i) => {
                    const isFav = favorite?.some(fave =>
                        fave.id === item.id)
                    return (
                        <ProductItem
                            item={item}
                            i={i}
                            key={item.id}
                            isFav={isFav}
                        />
                    )
                })}
            </div> */}


        </>
    )
}


