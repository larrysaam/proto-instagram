import './search.css'
import { useNavigate } from 'react-router-dom'

const UserContainer = ({profile, username, userid, setSearchProfile})=>{

    const navigate = useNavigate()

    const seeProfile =()=>{
        localStorage.setItem('searched_userid', userid)
        setSearchProfile(true)
        navigate('/profile')
    }

    return(
        // ____________searched user profile display box_____________
        <div className='searched_user_profilr_box' onClick={()=>{seeProfile()}}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}`+ profile} alt='profile' className='search_prof_img'/>
            <h4 className='searched_username_h4'>{username}</h4>
        </div>
    )
}

export default UserContainer