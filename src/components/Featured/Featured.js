import React from 'react'
import './Featured.css'
import bluushoe from '../../images/bluushoe.png'

export default function Featured() {
    const latest = [
        {
            img: bluushoe,
            title: 'Blue Swade Nike Sneakers',         
            price: '$599'

        },
        {
            img: bluushoe,
            title: 'Blue Swade Nike Sneakers',
            price: '$599',

        },
        {
            img:bluushoe,
            title: 'Blue Swade Nike Sneakers',
            price: '$599',
        }
    ]
    return (
        <>
        <h1 className='htagg'>Featured Products</h1>
            <div className='Chontainer'> 

        {latest.map(late => {
            return( 
                <>
                <div className='Chontain'>
                <img src={late.img} alt=''/>
                </div>
              <div className='Chontains'>
               <h3>{late.title}</h3>
               <p>  
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </p> 
               <span>$499 <s>{late.price}</s></span>
               </div>
               </>
            )
        })}
        </div>
        <div className='butto'>
        <input type='search' placeholder='Search query...'/>
        <button>Search</button>
        </div>
        
        </>
    )
}

