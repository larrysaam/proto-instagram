import darkLogo from '../../assets/images/black logo.PNG';
import homeicon from '../../assets/images/icon.PNG';
import real from '../../assets/images/real.PNG';
import messagesicon from '../../assets/images/messagesicon.PNG';
import search from '../../assets/images/search.PNG';
import explore from '../../assets/images/explore.PNG';
import notificon from '../../assets/images/notificon.PNG';
import createicon from '../../assets/images/createicon.PNG';
import moreicon from '../../assets/images/moreicon.PNG';
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