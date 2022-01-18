import React from 'react'
import './Container2.css'
import sneaker1 from '../../images/sneaker1.png'
import brownbag from '../../images/brown-bag.png'
import strapbag from '../../images/strapbag.png'
import addidas from '../../images/blueaddidas.png'
import shoesole from '../../images/shoesole.png'
import yellblack from '../../images/yellblack.png'
import reactshoe from '../../images/reactshoe.png'

export default function Grid() {
    const data = [
        {
            img: sneaker1,
            title: 'Nike Air Max 270 React',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: sneaker1,
            title: 'Nike Max Air 270 React',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: sneaker1,
            title: 'Nike 270 Air Max React',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: sneaker1,
            title: '270 Nike Air Max React',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },
        
        {
            img: sneaker1,
            title: 'React 270 Nike Air Max',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: sneaker1,
            title: 'Air React 270 Nike Max',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: sneaker1,
            title: 'Nike React 270  Air Max',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: sneaker1,
            title: 'Rita 270 Nike Air Max',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },
       ]
    return (
        <div>
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




















        <div className='container'>
            {/* <div className='cards'> */}
                <div className='items'>
                <img src={data.img} />
                <div className='item'>
                    <h3>{data.title}</h3>
                    <p>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    </p>
                    <p>{data.price1}<small>{data.price2}</small> <span>{data.price3}</span></p>
                </div>
                </div>
        </div>
        </div>
    )
}
