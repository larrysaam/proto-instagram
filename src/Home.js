import NavigationBar from './navigation';
import Sugestion from './sugestion';
import profileImg from './suggestion.PNG';
import './navigation.css';
import {useState} from 'react';

function App() {

  return(
    <div className='homeDiv'>
        <NavigationBar />
        <Sugestion profileImg={profileImg}  />
    </div>

  )
}

export default App;
