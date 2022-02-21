import Navbar from './components/Navbar/Navbar';
import './index.css';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import Productinfo from './components/InfoProduct/Productinfo';
import Cartpage from './Pages/Cartpage';
import Contact from './Pages/Contact';
import Favorite from './Pages/Favorite';


function App({cartItems}) {
  // const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product-info/:id" element={<Productinfo />} />
          <Route path="cart" element={<Cartpage cartItems={cartItems}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorites" element={<Favorite/>}/>
          {/* <Route cartItems={cartItems} />  */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
