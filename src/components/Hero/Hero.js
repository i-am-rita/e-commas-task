import React from 'react'
import heroImage from '../../images/heroimg.png'
import bag from '../../images/bag.png'
import yellowblack from '../../images/yellowblack.png'
import redblack from '../../images/redblack.png'
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
                <div className='card1'>
                <img src={bag} alt='black bag' />
                <h2>fs-quilted maxi
                    <br />
                    cross bag
                </h2>
                <p>$299.43</p>
                <h6><span><s>$534.33</s> 24% Off</span></h6>
                </div>
                <div className='card2'>
                <img src={yellowblack} alt='black bag' />
                <h2>FS - Nike Air <br />Max 270 React...</h2>
                <p>$299.43</p>
                <h6><span><s>$534.33</s> 24% Off</span></h6>
                </div>
                <div className='card3'>
                <img src={redblack} alt='black bag' />
                <h2>FS - Nike Air <br />Max 270 React...</h2>
                <p>$299.43</p>
                <h6><span><s>$534.33</s> 24% Off</span></h6>
                </div>
            </div>
        </div>
    )
}
