import ProfileInfo from '../../components/Profile/profileInfo';
import NavigationBar from '../../components/Navigation/navigation';
import './profile.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Profile() {

  const navigate = useNavigate()

  //useEffect
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/Login')
    }
  })

  return(
    <ProfileInfo />   
  )
}

export default Profile;
