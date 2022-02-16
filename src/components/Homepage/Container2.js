import React, { useState, useEffect } from 'react'
// import ReactStars from 'react-rating-stars-component'
// import { Link } from 'react-router-dom'
// import data from '../../Data';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner'
import './Container2.css'
import ProductItem from '../ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { showAllProducts } from '../../reduxx/Shopping/shopping-actions'


export default function Grid() {
    const [show, setShow] = useState('')
    const [loading, setLoading] = useState(false)
    // const dispatch = useDispatch()
    // const products = useSelector(state => state.shop.products)

    const dispatch = useDispatch()
    const products = useSelector(state => state.shop.products)
    // const {id} = products
    function getData() {
        setLoading(true)
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then(data => {
                dispatch(showAllProducts(data))
                // dispatch(addAllProducts(data))
            })
            .catch((err) => console.log('error'))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return (
            <div className='spinner'>
                <BallTriangle color="#00BFFF" height={80} width={80} />
            </div>
        )
    }

    return (
        <>
            <div className='detail'>
                <h1>Best Seller</h1>
                <div className='details'>
                    <ul>
                        <li> <a href='#home'>All</a></li>
                        <li> <a href='#home'>Bags</a></li>
                        <li> <a href='#home'>Sneakers</a></li>
                        <li> <a href='#home'>Belt</a></li>
                        <li> <a href='#home'>Sunglasses</a></li>
                    </ul>
                </div>
                <div className="container">
                    {/* <Link to={`products/${id}`}> */}
                    {products.map((item, i) => {
                        return (

                            <ProductItem
                                item={item}
                                i={i}
                                show={show}
                                setShow={setShow}
                                key={item.id}
                            />

                        )
                    })}
                    {/* </Link> */}
                </div>
                {/* <h2><a href='#load'>load more</a></h2> */}
            </div>
        </>
    )
}


