import React from 'react'
import './Latest.css'
import nikelogo from '../../images/nikelogo.png'
import figma from '../../images/figmalogo.png'
import kronoslogo from '../../images/kronoslogo.png'

export default function Latest() {
    const latest = [
        {
            img: nikelogo,
            date: '01 Jan 2015',
            title: 'Fashion Industry',
            descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            img: figma,
            date: '01 Jan 2015',
            title: 'Fashion Industry',
            descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            img: kronoslogo,
            date: '01 Jan 2015',
            title: 'Fashion Industry',
            descr: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]
    return (
        <>
            <div className='Kontainer'>

        {latest.map(late => {
            return( 
                <>
                <div className='Kontain'>
                <img src={late.img} alt=''/>
                </div>
              <div className='Kontains'>
                <small>{late.date}</small>
               <h1>{late.title}</h1>
               <p>{late.descr}</p>
               </div>
               </>
            )
        })}
        </div>
        </>
    )
}
