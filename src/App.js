import Navbar from './components.js/Navbar';
import './index.css';

function App() {
  const name = () => {
    console.log('Rita');
  }
  name();
  return (
    <div className="App">
     {/* <h1>Rita we need to get to work</h1> */}
     <Navbar /> 
    </div>
  );
}

export default App;
