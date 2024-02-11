import './popup.css'
import AddPost from './AddPostContainer'
import EditPost from './EditPostConatiner'
import checkAccessToken from '../../utils/checkAccessToken'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePopup = ({setShowPopup})=>{

    const [file, setFile] = useState(null)
    const [description, setDescription] = useState(null)
    // const [location, setLocation] = useState(null)
    const navigate = useNavigate()


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
            url: `${process.env.BACKEND_URL}posts/`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
              const verifyAccess = checkAccessToken(response)
              if(verifyAccess){
                  navigate('/Login')
              }else{
                setShowPopup(false)
              }
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
                        // edit post before submit UI
                        <EditPost file={file} setDescription={setDescription}/>
                        :
                        // add new post conatiner UI
                       <AddPost handleFileChange={handleFileChange}/>
                    }
                    
                    
                </div>
            </div>
        </div>
        </>
        
    )
}

export default CreatePopup