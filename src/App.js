import Addidas from './components.js/Addidasmen/Addidas';
import Grid from './components.js/Grid/Container2';
import Hero from './components.js/Hero/Hero';
import Navbar from './components.js/Navbar/Navbar';
import Services from './components.js/Services/Services';
import Latest from './components.js/Latest/Latest'

import './index.css';

function App() {
  // const name = () => {
  //   console.log('Rita');
  // }
  // name();
  return (
    <div className="App">
     {/* <h1>Rita we need to get to work</h1> */}
     <Navbar /> 
     <Hero />
     <Grid />
     <Addidas/>
     <Services />
     <Latest />
    </div>
  );
}

export default App;
