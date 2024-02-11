import ProfileInfo from '../../components/Profile/profileInfo';
import './profile.css'


function Profile({searchProfile}) {


  return(
    <ProfileInfo  searchProfile={searchProfile}/>   
  )
}

export default Profile;
