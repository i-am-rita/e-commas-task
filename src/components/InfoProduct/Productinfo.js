import Rating from '../Rating';
import { useParams } from 'react-router-dom';
import './Productinfo.css'
import { useState, useEffect } from 'react'


export default function Productinfo(item) {
    // const [show, setShow] = useState('')
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    function getData() {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then(data => setData(data))
            .catch((err) => console.log('error'))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return 'Loading din din...........'
    }

    return <>
        <button className='buttondeal'>
            <p><span>Home</span> / Hot Deal / {data.title}</p>
        </button>
        <div className='conthainer'>
            <div className='image-section'>
                <img src={data.image} className='main-image' alt='' />
                <div className='side-image' >
                    <img src={data.image} alt='' />
                    <img src={data.image} alt='' />
                    <img src={data.image} alt='' />
                    <img src={data.image} alt='' />
                </div>
            </div>

            <div className='detail-section'>
                <h1>{data.title}</h1>
                <div className='review'>
                    <Rating number={Math.round(data?.rating?.rate)} className='stars' />
                    <p className='odd'>0 reviews</p>
                    <p className='even'>Submit a review</p>
                </div>

                {/* <hr className='hr' /> */}
                <div className='blue'>
                    <p>{data.price}</p>
                </div>
                <div className='available'>
                    <div>
                        <p>Availability:</p>
                        <p>In stock</p>
                    </div>

                    <div>
                        <p>Category:</p>
                        <p>Accessories</p>
                    </div>
                    <div>
                        <p>Free shipping</p>
                    </div>
                </div>
                {/* <hr className='hr' /> */}
                <p>Select Color: </p>
                <p>Size</p>
                {/* <hr className='hr' /> */}
                <div className='social-links'>
                    <button>- 2 +</button>
                </div>


                {/* <hr className='hr' /> */}
                <div className='social-links'>
                    <button>kjhuyvuyvfuvfugvgf</button>
                    <button>kjhuyvuyvfuvfugvgf</button>
                </div>
            </div>
            <div className=''>
                <h2>Best Seller</h2>
                <img src={data.image} className='main-image' alt='' />
                <Rating number={Math.round(data?.rating?.rate)} />
                <p>{data.price}</p>

            </div>
        </div>



        <div className='product-inform'>
            <ul>
                <li><a href='/'>Product Information</a></li>
                <li><a href='/'>Reviews 0</a></li>
                <li><a href='/'>Another tab</a></li>
            </ul>
            {/* <hr /> */}
            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and<br />
                scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one<br />
                of my favorites.
            </p>
            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and<br />
                scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one<br />
                of my favorites.
            </p>
            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and<br />
                scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one<br />
                of my favorites.
            </p>
        </div>
        <div className='product-cont'>
            <h1>Related Products</h1>
            {/* <div className='product-contahiner'>
            {datas.slice(0, 4).map((item, i, id) => {
                // data.slice(1, 4 )
                return (
                    <div key={id}>
                    <Link to={`/product-info/${item.id}`} >
                    <ProductItem 
                    // img={img}
                    item={item}
                    i={i}
                    show={show}
                    setShow={setShow}
                    /> 
                    </Link>
                    </div>
                )
            })}
        </div> */}
        </div>
    </>;
}


    // task : Learn about array methods and find, filter, indexOf, map
