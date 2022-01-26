import React from 'react'
import './Footer.css'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import mastercard from '../../images/mastercard.png'
import paypal from '../../images/Paypal.png'
import western from '../../images/westerncard.png'

export default function Footer() {
    return (
        <div className='return'>
           <div className='footContainer'>
               <div className='footContain'>
               <h2>E-Comm</h2>
                <h5>Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when<br/>an unknown printer.</h5>
               </div>

               <div className='footContain'>
               <h2>Follow Us</h2>
                <h5>Since the 1500s, when an unknown printer took a galley of type and scrambled.</h5>
                <img src={facebook}  alt=''/>
                <img src={twitter}  alt=''/>
              </div>

               <div className='footContain'>
               <h2>Contact Us</h2>
                <h5>E-Comm, 4578 Marmora Road, Glasgow D04 89GR</h5> 
          </div>
            </div> 

            <div className='footContainer2'>
            <div className='footContain2'>
               <h3>Information</h3>
               <ul>
                   <li>About Us</li>
                   <li>Information</li>
                   <li>Privacy Policy</li>
                   <li>Terms & Conditions</li>
               </ul>
               </div>

               <div className='footContain2'>
               <h3>Service</h3>
               <ul>
                   <li>About Us</li>
                   <li>Information</li>
                   <li>Privacy Policy</li>
                   <li>Terms & Conditions</li>
               </ul>
              </div>

               <div className='footContain2'>
               <h3>My Account</h3>
               <ul>
                   <li>About Us</li>
                   <li>Information</li>
                   <li>Privacy Policy</li>
                   <li>Terms & Conditions</li>
               </ul>
                </div>

          <div className='footContain2'>
               <h3>Our Offers</h3>
               <ul>
                   <li>About Us</li>
                   <li>Information</li>
                   <li>Privacy Policy</li>
                   <li>Terms & Conditions</li>
               </ul>
               </div>
            </div>
            <div className='hr'>
            <hr/>
            <div className='foot'>
                <p>© 2018 Ecommerce theme by www.bisenbaev.com </p>
                <div className='footimg'> 
                    <img src={mastercard} alt=''/>
                    <img src={western} alt=''/>
                    <img src={paypal} alt=''/>
                    <img src={mastercard} alt=''/>
                </div>
               </div>
            </div>
        </div>
    )
}
