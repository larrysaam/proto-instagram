import {useState} from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import  Home from './pages/Home/index'
import Messages from './pages/Messages/messages';
import Profile from './pages/Profile/profile';
import NotifList from './components/Notification/NotifList';
import NavigationBar from './components/Navigation/navigation';
import NotFound from './pages/NotFound/pagenotfound'
import CreatePopup from './components/CreatePopup/createPopup';
import Explore from './pages/Explore/Explore'
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
import Search from './pages/Search';


function App() {

  const [showPopup, setShowPopup] = useState(false)
  const [searchProfile, setSearchProfile] = useState(false)


  return(
    <div className='main-app-container'>
      <NavigationBar setShowPopup={setShowPopup} setSearchProfile={setSearchProfile}/>
      {(showPopup)? <CreatePopup setShowPopup={setShowPopup}/> : ""}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='messages' element={<Messages/>}/>
          <Route path='profile' element={<Profile searchProfile={searchProfile}/>}/>
          <Route path='explore' element={<Explore/>}/>
          <Route path='search' element={<Search setSearchProfile={setSearchProfile}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default App;
