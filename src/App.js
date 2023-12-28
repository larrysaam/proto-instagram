import Login from './login';
import Image from './SwitchingImg';
import {useState} from 'react';
import './Login.css';

function App() {

  const [color, setColor] = useState("orange");


  return(
    <div className='mainComponent'>
      <Image />
      <Login /> 
    </div>

  )
}

export default App;
