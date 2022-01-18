import React from 'react'
import heroImage from '../../images/heroimg.png'
import bag from '../../images/blackbag.png'
import './Hero.css'

export default function Hero() {
    return (
        <div>
            {/* <h1>hey</h1> */}
            <img src={heroImage}  alt='rita'/> 

            <div className='hero-data'>
                <h1>Super Flash Sale
                    <br />
                50% Off</h1>
            </div>
            <div className='cards'>
                <div className='card'>
                <img src={bag} alt='black bag' />
                <h2>item</h2>
                <p>price</p>
                </div>
                <div className='card'>
                <img src={bag} alt='black bag' />
                <h2>item</h2>
                <p>price</p>
                </div>
                <div className='card'>
                <img src={bag} alt='black bag' />
                <h2>item</h2>
                <p>price</p>
                </div>
            </div>
        </div>
    )
}
