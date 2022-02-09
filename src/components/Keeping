import React, { useState } from 'react'
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
            img: brownbag,
            title: 'Nike Max Air 270 React',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: strapbag,
            title: 'Nike 270 Air Max React',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: addidas,
            title: '270 Nike Air Max React',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },
        
        {
            img: shoesole,
            title: 'React 270 Nike Air Max',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: yellblack,
            title: 'Air React 270 Nike Max',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: reactshoe,
            title: 'Nike React 270  Air Max',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },

        {
            img: addidas,
            title: 'Rita 270 Nike Air Max',
            price1: '$299,43',
            price2: '534,33',
            price3: '24% Off'
        },
       ]

       const [show, setShow] = useState('')

    //    Here, I am using index to pick each item so that onMouseEnter of each item, just that item will be active.

    //    function handleMouseEnter(event){
    //        setShow(true)
    //    }
    return (
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

            <div className='container'>
                {data.map((item, i) => {
                    return(
                        <>

                        <div className='items' key={item.img}
                     onMouseEnter={() => setShow(i)}
                     onMouseLeave={() => setShow('')}
                        >
                        {show === i && <div className='image' >
                <div className='image-overlay'>
                    <h1 image-description>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-shopping-cart"></i>
                    </h1>
                </div>
            </div> } 
                        <img src={item.img} alt='' 
                               
                        />
                        <div className='item'>
                            <h3>{item.title}</h3>
                            <p> <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </p> 
                            <p>{item.price1} <s>{item.price2}</s> <span>{item.price3}</span></p>
                        </div>
                        </div>
                        </>
                    )
                })}
            </div>  
            <h2><a href='#load'>load more</a></h2>
            </div>
    )
}


