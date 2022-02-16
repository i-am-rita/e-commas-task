import React from 'react';
import { useState, useEffect } from 'react'
import './Productgrid.css'
import ProductItem from '../ProductItem';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner'

// import { connect } from 'react-redux';


 export default function Productgrid() {
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
        return (
            <div className='spinner'>
                <BallTriangle color="#00BFFF" height={80} width={80} />
            </div>
        )
    }



    return <>

        <div className='product-container'>
            {data.slice(1, 10).map((item, i, show, setShow, id) => {
                return (
                    <div key={id}>
                    <Link to={`/product-info/${item.id}`} className='link'>
                    <ProductItem 
                    item={item}
                    i={i}
                    show={show}
                    setShow={setShow}
                    /> 
                    </Link>
                    </div>
                )
            })}
        </div>
    </>;
}


// const mapStateToProps = (state) => {
//     return{
//         products: state.shop.products,
// }
// }
// export default connect(mapStateToProps)(Productgrid) 

// code for dynamic routing
