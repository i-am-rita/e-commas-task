import React from 'react'
import LogoImg from '../../images/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
export default function Navbar(props) {
    let cartItems = useSelector(state => state.shop.cart)
    // const [itemIndex, setItemIndex] = useState(0)
    return (
        <div className='navbar'>
            <nav>
                <h4 className='dropd'>EN<i class="fas fa-sort-down"></i></h4>
                <h4 className='drop'>USD<i class="fas fa-sort-down"></i></h4>
                <ul className='nav-list'>
                    <li className='dropdown'><i class="far fa-user"></i>
                        <Link to='/edit'>My Profile</Link>
                        <div class="dropdown-content">
                        <div>
                        <Link to="/edit-profile">Edit Profile</Link>
                        </div>
                           <div>
                           <Link to="/favorites">My Favorites</Link>
                           </div>
                           <div>
                           <Link to="/sign-out">Sign Out</Link>
                           </div>
                        </div>
                    </li>
                    <Link to='/cart'>
                        <li>
                            <span className='cart-num'>{cartItems.length}</span>
                            <i class="fas fa-shopping-cart"></i>
                        </li>
                    </Link>
                    <li>Items</li>
                    <li>$0.00 <i class="fas fa-search"></i></li>
                </ul>
            </nav>
            <nav>
                <Link to='/'><img src={LogoImg} alt='logo' className='image' width='100px' /></Link>
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
