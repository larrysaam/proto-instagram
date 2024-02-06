import './popup.css'
import FetchUserInfo from '../../utils/fetchUserInfo'
import checkAccessToken from '../../utils/checkAccessToken'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const EditPost =({file, setDescription})=>{

    const user_id = localStorage.getItem("user_id")
    const username = localStorage.getItem("username")
    const navigate = useNavigate()

    const [profileImg, setProfileImg] = useState('')


    useEffect(()=>{
        if(file){
            get_user_profile()
        }
    },[file])


    //get profile info
    const get_user_profile= async()=>{
        const res = await FetchUserInfo(`http://localhost:5000/user/${user_id}`)

        const verifyAccess = checkAccessToken(res)
        if(verifyAccess){
            navigate('/Login')
        }else{
            // if file is set, get profile informations
            if(file){
                setProfileImg(res.data.data.profile_picture)
            }
        }
    }

    return(
        <div className='main_share_popup_image_view'>
            <img src={URL.createObjectURL(file)} alt='img' id='post_image_view'/>
            <div className='side_popup_description_area'>
                <div className='top_input_desc_area'>
                    {/* __________profile info________ */}
                    <div className='user_profile_pic_and_name'>
                        <img src={`http://localhost:5000/${profileImg}`} alt='profile picture'/>
                        <h4>{username}</h4>
                    </div>
                    {/* __________description input field__________ */}
                    <form>
                        <input type='textarea' name='description' placeholder='Write a caption...' id='description_txtarea' onChange={(e)=>setDescription(e.target.value)}/>
                    </form>
                    <p className='wordcount'>word-count: 0/2,200</p>
                </div>

                {/* ___________location field___________ */}
                <div className='bottom_location_input_area'>
                    
                </div>
            </div>
        </div>
    )
}

export default EditPost