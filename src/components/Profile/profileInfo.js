import { useState, useEffect } from "react"
import axios from "axios"
import useFetchUserInfo from "../../hooks/useFetchUserInfo"
import './profile.css'
import settingicon from '../../assets/images/setting icon.png'
import StoryImg from '../../assets/images/lemon.png'
import ProfileImg from '../../assets/images/spacex.jpg'
import ProfileUpdatePopup from "./profileUpdatePopup"
import Posts from "./posts"
import checkAccessToken from "../../utils/checkAccessToken"
import FetchUserInfo from '../../utils/fetchUserInfo'
import { useNavigate } from "react-router-dom"

const ProfileInfo =({searchProfile})=>{

    const url = `${process.env.REACT_APP_BACKEND_URL}user/`

    const searched_id = localStorage.getItem('searched_userid')
    const Myid = localStorage.getItem('user_id')
    const token = localStorage.getItem('token');

    const [popup, setPopup] = useState(false)
    const [profileData, setProfileData] = useState([])
    const [post, setPost] = useState(true)
    const [saved, setSaved] = useState(false)
    const [tagged, setTagged] = useState(false)
    const [followed, setFollowed] = useState(false)


    const navigate = useNavigate()


    //set all useStates
    useEffect(()=>{
        getProfileResults()
    },[])


    //get profile details depending on user_id either account owner or searhed user
    const getProfileResults = async()=>{

        //if searched profile clicked, show searched user profile
        if(!searchProfile){

            const response = await FetchUserInfo(url + Myid)
            //if response available, set profile details
            if(response){
                const verifyAccess =  checkAccessToken(response)
                if(verifyAccess){
                    navigate('/Login')
                }else{
                    setProfileData(response.data.data)
                    verifyFollow(response.data.data)

                }
            }

        }else{

            //get searched user id from storage and fetch info to display on UI
            const response =  await FetchUserInfo(url + searched_id)
            //if response available, set profile details
            if(response){
                //verify if Access Token is valid or not
                const verifyAccess =  checkAccessToken(response)
                if(verifyAccess){
                    navigate('/Login')
                }else{
                    setProfileData(response.data.data)
                    verifyFollow(response.data.data.followers)

                }
            }

        }
       
    }


    //Post toggle activate
    const activatePosts = (event)=>{
        setPost(true)
        setTagged(false)
        setSaved(false)
    }

    //Saved toggle activate
    const activateSaved = ()=>{
        setPost(false)
        setTagged(false)
        setSaved(true)
    }

    //Tagged toggle activate
    const activateTagged = ()=>{
        setPost(false)
        setTagged(true)
        setSaved(false)
    }


    // verify if login user has liked the post.
    const verifyFollow = (followers) =>{

        let values = followers
        console.log( followers)
        //loop through array of users who liked th post to find name of current user.
        if(values.length>0){
            for(let i=0; i<values.length; i++){
                if(values[i] === Myid){
                    setFollowed(true)
                    break
                }else{
                    setFollowed(false)
                }
            } 
        }else{
            setFollowed(false)
        }
   }


   const follow = async()=>{
        const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};
        await axios.patch(url+"follow",
        {"follower": Myid, "followed": searched_id, "followers_num": profileData.followers_num, "following_num": profileData.following_num, "followers": profileData.followers },
        {headers : headers}
        )
        .then((response) => {
            // Code
            const verifyAccess =  checkAccessToken(response)
            if(verifyAccess){
                navigate('/Login')
            }else{
                console.log(response)
                setFollowed(true)
            }
            
        }).catch((error) => {
            // Code
            console.log(error)
        })  
   }
        


    return(
        <>
            <div className="profileinfodiv">
            <div className="topDiv">
                {/* user profile picture */}
                <div className="profileimagediv">
                    <img src={`${process.env.REACT_APP_BACKEND_URL}`+ profileData.profile_picture} alt='profile Image' id="profileImage" onClick={()=>setPopup(true)}/>
                </div>
                {/* user informations */}
                <div className="info">
                    <ul className="topprofile">
                        <li><h2 id="username">{profileData.username}</h2></li>
                        <ul>
                            <li><button onClick={(!followed)? ()=>follow() : ""} className={(!followed)? (searchProfile)? "follow_user_btn": "btn" : " btn" }>{(!followed)? (searchProfile)? "Follow": "Edit Profile" : " Following" }</button></li>
                            <li><button className="btn">{(searchProfile)? "Message" : "View archive" }</button></li>
                        </ul>
                        <li><button className="settingbtn"><img src={settingicon} alt='profile Image' id="settingicon"/></button></li>
                    </ul>
                    <ul className="pageinfo">
                        <li><p>{profileData.posts_num} posts</p></li>
                        <li><p>{profileData.followers_num} followers</p></li>
                        <li><p>{profileData.following_num} following</p></li>
                    </ul>
                    <ul className="buttominfo">
                        <li><h4 className="profilename"> {profileData.username}</h4></li>
                        <li><h4 className="bio"> {profileData.bio} </h4></li>
                    </ul>            
                </div>
            </div>
            <div className="storydiv">
                <ul className="storyul">
                    <li><img src={StoryImg} alt='profile Image' id="storyImage"/></li>
                    <li><p>Earth day</p></li>
                </ul>
                <ul className="storyul">
                    <li id="storyImage">+</li>
                    <li><p>New</p></li>
                </ul>
            </div>
            <hr/>
            {/* post section */}
        <div className="selection">
            <ul className="select-ul">
                <li><button id={`${(post)? "active": null}`} onClick={(event)=>{activatePosts(event)}}>POSTS</button></li>
                <li><button id={`${(saved)? "active": null}`} onClick={(event)=>{activateSaved(event)}}>SAVED</button></li>
                <li><button id={`${(tagged)? "active": null}`} onClick={(event)=>{activateTagged(event)}}>TAGGED</button></li>
            </ul>
        </div>
        <div className="bottomContentDiv">
            <Posts postsid={profileData.posts}  saved={saved} tagged={tagged}/>
        </div>
        </div>
        {
            (popup)? <ProfileUpdatePopup setPopup={setPopup} user_id={"euei"}/> : ""
        }
        </>
    )
}

export default ProfileInfo