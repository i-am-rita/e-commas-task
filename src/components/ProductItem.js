import React from 'react';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { addToCart, addFavorites } from '../reduxx/Shopping/shopping-actions';
const ProductItem = ({ item, i, show, setShow, isFav }) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className='items' key={item.img}
                onMouseEnter={() => setShow(i)}
                onMouseLeave={() => setShow('')}
                // onClick={() => console.log(isFav)}
            >
                {show === i && <div className='image'>
                    <div className='image-overlay'>
                        <h1 className='image-description'>
                            {isFav ? (<i class="fa fa-heart" onClick={() => {
                            // e.stopPropagation()
                            dispatch(addFavorites(item))}
                            }></i>
                            ) : <i class="far fa-heart" onClick={() => {
                            // e.stopPropagation()
                            dispatch(addFavorites(item))}
                            }></i>
                            }

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
