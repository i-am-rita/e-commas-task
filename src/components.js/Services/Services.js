import React from 'react'
import './Services.css'
import refund from '../../images/refund.png'
import shipping from '../../images/shipping.png'
import support from '../../images/support.png'

export default function Services() {
    const datas = [
        {
            img: shipping,
            title: 'Free Shipping',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            img: refund,
            title: '100% Refund',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            img: support,
            title: 'Support 24/7',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]

    return (
        <>
        <div className='smallContainer'>
        {datas.map(mes => {
            return(
            <div>
                <img src={mes.img} alt=''/>
                <h1>{mes.title}</h1>
                <p>{mes.desc}</p>
            </div>
            )
        })}
        </div>
        </>
    )
}
