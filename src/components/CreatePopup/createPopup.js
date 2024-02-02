import './popup.css'
import icon from '../../assets/images/play.jpg'
import { useState } from 'react'
import axios from 'axios'

const CreatePopup = ({setShowPopup})=>{

    const [file, setFile] = useState(null)
    const [description, setDescription] = useState(null)
    const [location, setLocation] = useState(null)


    const handleFileChange =(e)=>{
        e.target.files = null
        setFile(e.target.files[0])
    }

    const sharePost = async()=>{
        //save description and image to maongodb through api
        var today = new Date()
        var bodyFormData = new FormData();
        bodyFormData.append('post_image', file); 
        bodyFormData.append('username', 'larriensaams');
        bodyFormData.append('userId', '12345678'); 
        bodyFormData.append('location', 'yaounde');
        bodyFormData.append('description', description);
        bodyFormData.append('post_date', today.getMonth() + 1);
        axios({
            method: "post",
            url: "http://localhost:5000/posts/",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
              setShowPopup(false)
            })
            .catch(function (err) {
              //handle error
              console.log(err);
            });
    }
 
        
    return(
        <>
       <div className='create-popup-container' >
            <button className='close-create-popup-btn' onClick={()=>setShowPopup(false)}>X</button>
            <div className={(file)? 'popup_share_post_container' : 'inner-create-container'}>
                <div className='inner-create-header'>
                    <h3>Create new post</h3>
                    {(file) ? <button onClick={()=>sharePost()} className='share_post_btn'>Share</button> : ""}
                    <hr></hr>
                </div>
                <div className='inner-create-main-box'>

                    {(file) ?
                        <div className='main_share_popup_image_view'>
                            <img src={URL.createObjectURL(file)} alt='img' id='post_image_view'/>
                            <div className='side_popup_description_area'>
                                <div className='top_input_desc_area'>
                                    <div className='user_profile_pic_and_name'>
                                        <img src='' alt='profile picture'/>
                                        <h4>Larriensaams</h4>
                                    </div>
                                    <form>
                                        <input type='textarea' name='description' placeholder='Write a caption...' id='description_txtarea' onChange={(e)=>setDescription(e.target.value)}/>
                                    </form>
                                    <p className='wordcount'>word-count: 0/2,200</p>
                                </div>
                                <div className='bottom_location_input_area'>
                                    
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <img src={icon} alt='media' id='create-media-icon'/>
                            <h2>Drag photos and videos here</h2>
                            <form >
                                <label className='file_btn' for="input_post">Select from computer</label>
                                <input name='post_image' id='input_post' type='file' onChange={(e)=>handleFileChange(e)} />
                            </form>
                        </div> 
                    }
                    
                    
                </div>
            </div>
        </div>
        </>
        
    )
}

export default CreatePopup