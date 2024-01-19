import {useState} from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import  Home from './pages/Home/index'
import Messages from './pages/Messages/messages';
import Profile from './pages/Profile/profile';
import NotifList from './components/Notification/NotifList';
import NavigationBar from './components/Navigation/navigation';
import NotFound from './pages/NotFound/pagenotfound'

function App() {


  return(
    <div className='main-app-container'>
      <NavigationBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='messages' element={<Messages/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )


  // return(
  //   <div className='mainComponent'>
  //     <Image />
  //     <Login /> 
  //   </div>

  // )
}

export default App;
