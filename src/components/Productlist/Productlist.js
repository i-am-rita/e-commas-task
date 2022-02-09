import React from 'react';
// import Addidas from '../Addidasmen/Addidas';
import './Productlist.css'
import blueshoe from '../../images/blueshoe.png'
// import bluedotsicon from '../../images/bluedotsicon.png'
// import menuicon from '../../images/menuicon.png'
// import Grid from '../Grid/Container2';
import Productgrid from '../Productgrid/Productgrid';


export default function Productlist() {
    return (
        <>
            <button className='buttondeal'>
                <p><span>Home</span> / Hot Deal</p>
            </button>
            <div className='wrapping'>
            <div className='productlist'>
                <div className='hotdeal'>
                    <h2>Hot Deals</h2>
                    <div>
                        <p>Nike</p>
                        <p>2</p>
                    </div>
                    <div>
                        <p>Airmax</p>
                        <p>48</p>
                    </div>
                    <div>
                        <p>Nike </p>
                        <p>14</p>
                    </div>
                    <div>
                        <p>Adidas</p>
                        <p>15</p>
                    </div>
                    <div>
                        <p>Vans </p>
                        <p>23</p>
                    </div>
                    <div>
                        <p>All Stars </p>
                        <p>1</p>
                    </div>
                    <div>
                        <p>Adidas</p>
                        <p>95</p>
                    </div>
                </div>
                <div className='hot-deal'>
                <h2>PRICES</h2>
                    <div>
                        <p>Ranger: </p>
                        <p>$13.99 - $25.99</p>
                    </div>
                    <hr/>
                    </div>

                <div className='hot-deal'>
                <h2>PRICES</h2>
                    <div>
                        <p>Ranger: </p>
                        <p>$13.99 - $25.99</p>
                    </div>
                    <hr/>
                    </div>
                </div>

                <div className='addidasdeal'>
                    <div className='addid-as'>
                        <div>
                            <h2>Addidas Men Running <br /> Sneakers</h2>
                            <h4>Performance and design, taken right to the edge.</h4>
                            <p>Shop Now</p>
                        </div>

                        <div>
                            <img src={blueshoe} alt='' />
                        </div>
                    </div>
                    <Productgrid/>
                    <div className='buut-on'>
                        {/* Leave it  */}
                        <button className='butt-ondeal'>
                            <div className='sort-deal'>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            </div>
                        </button>
                    </div>
                </div>        
                </div>
        </>
    );
}



