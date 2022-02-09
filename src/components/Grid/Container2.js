import React, { useState, useEffect } from 'react'
// import ReactStars from 'react-rating-stars-component'
// import { Link } from 'react-router-dom'
// import data from '../../Data';
import './Container2.css'
import ProductItem from '../ProductItem'

export default function Grid() {
    const [show, setShow] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    function getData() {
        setLoading(true)
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then(data => setData(data))
            .catch((err) => console.log('error'))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return 'Loading...'
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
                <div className="container" key={data.id}>
                    {data.slice(1, 9).map((item, i) => {
                        return (
                            <>
                                <ProductItem
                                    item={item}
                                    i={i}
                                    show={show}
                                    setShow={setShow}
                                />
                            </>
                        )
                    })}
                </div>
                <h2><a href='#load'>load more</a></h2>
            </div>
        </>
    )
}


