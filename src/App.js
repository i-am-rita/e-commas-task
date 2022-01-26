import Navbar from './components/Navbar/Navbar';
import './index.css';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home'

function App() {
  // const name = () => {
  //   console.log('Rita');
  // }
  // name();
  return (
    <div className="App">
     {/* <h1>Rita we need to get to work</h1> */}
     <Navbar /> 
     <Home />
     <Footer/> 
    </div>
  );
}

export default App;
