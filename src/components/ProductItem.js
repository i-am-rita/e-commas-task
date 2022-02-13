import React from 'react';
// import { Link } from 'react-router-dom'
// import ReactStars from 'react-rating-stars-component'
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxx/Shopping/shopping-actions';
// import { removeFromCart } from '../reduxx/Shopping/shopping-actions'
const ProductItem = ({ item, i, show, setShow }) => {
    // const products = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <>
            <div className='items' key={item.img}
                onMouseEnter={() => setShow(i)}
                onMouseLeave={() => setShow('')}
            >
                {show === i && <div className='image' >
                    <div className='image-overlay'>
                        <h1 className='image-description'>
                            <i class="far fa-heart"></i>

                            <i class="fas fa-shopping-cart" onClick={() =>
                                dispatch(addToCart(item))
                            }></i>

                        </h1>
                    </div>
                </div>}
                <img src={item.image} alt='' />
                <div className='item'>
                    <h3>{item.title}</h3>
                    <Rating number={Math.round(item?.rating?.rate)} />
                    <p>${item.price}</p>
                </div>
            </div>
        </>
    )
};

export default ProductItem;
