import ProfileInfo from '../../components/Profile/profileInfo';
import NavigationBar from '../../components/Navigation/navigation';
import './profile.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Profile({searchProfile}) {


  return(
    <ProfileInfo  searchProfile={searchProfile}/>   
  )
}

export default Profile;
