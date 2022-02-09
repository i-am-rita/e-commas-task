import React from 'react'
import LogoImg from '../../images/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    // const [itemIndex, setItemIndex] = useState(0)
    return (
        <div>
           <nav>
               <h4 className='dropd'>EN <i class="fas fa-sort-down"></i></h4>
               <h4 className='drop'>USD <i class="fas fa-sort-down"></i></h4>

               
             <ul className='nav-list'>
                 <li><i class="far fa-user"></i> My Profile</li>
                 <Link to='/cart'>
                 <li><i class="fas fa-shopping-cart"></i></li>
                 </Link>
                 <li>Items</li>
                 <li>$0.00 <i class="fas fa-search"></i></li>
             </ul>
            </nav>
            <nav>
            <img src={LogoImg} alt='log' className='image' width='100px'/>                
                <ul className='nav-links'> 
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Blog</Link>
                </ul>
            </nav>
        
        </div>
    )
}
