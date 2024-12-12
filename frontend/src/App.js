import './App.css';
import Allroutes from './Components/Allroutes';
import { Navbar } from './Components/Navbar/Nav';
import Text from './Components/Text';
import Header from "./Components/Header"

import TawkToChat from "./Components/TawkToChat"

function App() {
  return (
    <div className="App">
     {/* <Header/> */}
    <Navbar/>
     <Text/>
    <Allroutes/>
    <TawkToChat/>

  

    <p className='dev'>
  Developed by 
  <a href="https://kalyantech.netlify.app/" target="_blank"> KalyanTech</a><span className="heart">❤️</span>
</p>



    </div>
  );
}

export default App;
