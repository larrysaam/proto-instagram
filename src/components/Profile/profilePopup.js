import axios from "axios"
import { useState } from "react"
import './popup.css'


const ProfilePopup =({setPopup, user_id})=>{

    const [file, setFile] = useState(null)


    //upload new profile photo
    const UploadPhoto = async(e)=>{
        setFile(e.target.file[0])
        var formdata = new FormData()
        formdata.append('profile_picture', file)
        await axios.patch('http://localhost:5000/user/'+user_id,
        {data: formdata},
        {headers: { "Content-Type": "multipart/form-data" }}
        ).then(res=>{
            console.log(res)
            setPopup(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    //remove current profile pic
    const RemovePhoto = async()=>{
        await axios.patch('http://localhost:5000/user/'+user_id,
        {profile_picture: ""},
        {headers: {"Content-Type": "application/json"}}
        )
        .then(res=>{
            console.log(res)
            setPopup(false)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return(
        <div className="profile_popup_container" onClick={()=>setPopup(false)}>
            <div className="profile_inner_popup_box">
                <div className="profile_photo_options_box">
                    <h3>Change Profile Photo</h3>
                    <div className="upload_profile_pic_btn">
                        <label className='profile_file_btn' for="upload_prof_input">Upload Photo</label>
                        <input name='upload_prof' id='upload_prof_input' type='file' onChange={(e)=>UploadPhoto(e)} />
                    </div>
                    <button id='remove_profile_pic_btn' onClick={()=>RemovePhoto()}>Remove Current Photo</button>
                    <button id='profile_popup_cancel_btn' onClick={()=>setPopup(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePopup