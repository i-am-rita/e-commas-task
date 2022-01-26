import React from 'react'
import LogoImg from '../../images/logo.png'
// import User from '../../images/user.png'
// import Arrowdown from '../../images/arrow-down.png'
// import Searchicon from '../../images/search-icon.png'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            {/* <header> */}
           <nav>
               <h4 className='dropd'>EN <i class="fas fa-sort-down"></i></h4>
               <h4 className='drop'>USD <i class="fas fa-sort-down"></i></h4>

               
             <ul className='nav-list'>
                 <li><i class="far fa-user"></i> My Profile</li>
                 <li><i class="fas fa-shopping-cart"></i></li>
                 <li>Items</li>
                 <li>$0.00 <i class="fas fa-search"></i></li>
             </ul>
            </nav>
             {/* </header> */}
            <nav>
            <img src={LogoImg} alt='log' className='image' width='100px'/>                
                {/* <img src='' /> */}
                <ul className='nav-links'> 
                    
                    <li> <a href='#home'><span>Home</span></a></li> 
                    <li><a href='#about'>Bags</a></li>
                    <li><a href='#contact'>Sneakers</a></li>
                     <li> <a href='#home'>Belt</a></li> 
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        
        </div>
    )
}
