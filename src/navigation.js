import darkLogo from './black logo.PNG';
import homeicon from './icon.PNG';
import real from './real.PNG';
import messagesicon from './messagesicon.PNG';
import search from './search.PNG';
import explore from './explore.PNG';
import notificon from './notificon.PNG';
import createicon from './createicon.PNG';
import moreicon from './moreicon.PNG';
import './navigation.css';
const NavigationBar = ({profileImg}) =>{
    
    return(
        <nav id="nav">
            <img src={darkLogo} alt="logo" className='logoimg'/>

            <ul className="NavList">
                <li><img  src={homeicon} alt="icon" /><a href="#" className="NavLink"> Home</a></li>
                <li><img  src={search} alt="icon" /><a href="#" className="NavLink">Search</a></li>
                <li><img  src={explore} alt="icon" /><a href="#" className="NavLink">Explore</a></li>
                <li><img  src={real} alt="icon" /><a href="#" className="NavLink">Reels</a></li>
                <li><img  src={messagesicon} alt="icon" /><a href="#" className="NavLink">Messages</a></li>
                <li><img  src={notificon} alt="icon" /><a href="#" className="NavLink">Notifications</a></li>
                <li><img  src={createicon} alt="icon" /><a href="#" className="NavLink">Create</a></li>
                <li><img  src={profileImg} alt="icon" /><a href="#" className="NavLink">Profile</a></li>

                <li className='more'><img  src={moreicon} alt="icon" /><a href="#" className="NavLink">Profile</a></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;