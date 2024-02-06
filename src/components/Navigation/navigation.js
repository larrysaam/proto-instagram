import darkLogo from '../../assets/images/black logo.PNG';
import homeicon from '../../assets/images/icon.PNG';
import real from '../../assets/images/real.PNG';
import messagesicon from '../../assets/images/messagesicon.PNG';
import search from '../../assets/images/search.PNG';
import explore from '../../assets/images/explore.PNG';
import notificon from '../../assets/images/notificon.PNG';
import createicon from '../../assets/images/createicon.PNG';
import moreicon from '../../assets/images/moreicon.PNG';
import logo from '../../assets/images/ig logo.png'
import profilepic from '../../assets/images/spacex.jpg'
import './navigation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const NavigationBar = ({setShowPopup, setSearchProfile}) =>{

    const pathname = window.location.pathname
    const navigate = useNavigate()
    const [fold, setFold] = useState(false)

    useEffect(()=>{
        (pathname === '/messages' || pathname === '/search') ? setFold(true) : setFold(false)
    },[pathname])


    // navigate to message page and set navigation bar to fold 
    const gotomessages=()=>{
        setFold(true)
        navigate('messages')
    }

    //navigate to search page 
    const gotoSearch=()=>{
        navigate('search')
    }

    // navigate to profile and set setting for searched profile to false
    const ToProfile = ()=>{
        setSearchProfile(false)
        navigate('profile')
    }

    
    return(
        <nav id={`${(fold)? "navFold" : "nav"}`}>
            <img src={(fold)? logo : darkLogo} alt="logo" className={`${(fold)? "iglogo" : "logoimg"}`}/>

            <ul className={`${(fold)? "NavListFold" : "NavList"}`}>
                <li onClick={()=>navigate('/')}><img  src={homeicon} alt="icon" /><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}> Home</a></li>
                <li onClick={()=>gotoSearch()} className='notifbtn'><img  src={search} alt="icon" /><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}>Search</a></li>
                <li onClick={()=>navigate('explore')}><img  src={explore} alt="icon" /><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}>Explore</a></li>
                <li onClick={()=>navigate('reels')}><img  src={real} alt="icon" /><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}>Reels</a></li>
                <li onClick={()=>gotomessages()}><img  src={messagesicon} alt="icon" /><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}>Messages</a></li>
                <li className='notifbtn'><img  src={notificon} alt="icon" /><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}>Notifications</a></li>
                <li onClick={()=>setShowPopup(true)}><img  src={createicon} alt="icon" /><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}>Create</a></li>
                <li onClick={()=>ToProfile()}><img  src={profilepic} alt="icon" id="navprofilepic"/><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}>Profile</a></li>

                <li className='more' ><img  src={moreicon} alt="icon" /><a href="#" className={`${(fold)? "hiddenNavLink" : "NavLink"}`}>More</a></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;