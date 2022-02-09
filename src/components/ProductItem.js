import React from 'react';
// import ReactStars from 'react-rating-stars-component'
import Rating from './Rating';
const ProductItem = ({ item, i, show, setShow }) => {

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
                            <i class="fas fa-shopping-cart"></i>
                        </h1>
                    </div>
                </div>}
                <img src={item.image} alt='' />
                <div className='item'>
                    <h3>{item.title}</h3>
                    <Rating number={Math.round(item?.rating?.rate)} />
                    <p>{item.price}</p>
                </div>
            </div>
        </>
    )
};

export default ProductItem;
