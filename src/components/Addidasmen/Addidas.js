import React from 'react'
import './Addidas.css'
import blueshoe from '../../images/blueshoe.png'

export default function Addidas() {
    return (
        <div className='addidas'>
            <div>
                <h2>Addidas Men Running <br /> Sneakers</h2>
                <h4>Performance and design, taken right to the edge.</h4>
                <p>Shop Now</p>
            </div>

            <div>
                <img src={blueshoe} alt='' />
            </div>
        </div>
    )
}
