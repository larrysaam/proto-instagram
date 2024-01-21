import { useState, useEffect } from "react"
import useFetchUserInfo from "../../hooks/useFetchUserInfo"
import './profile.css'
import settingicon from '../../assets/images/setting icon.png'
import StoryImg from '../../assets/images/lemon.png'
import ProfileImg from '../../assets/images/spacex.jpg'
import Posts from "./posts"

const ProfileInfo =()=>{

    const url = 'http://localhost:8080/users/'
    const [name, setName] = useState(null)
    const [postsnum, setPostsnum] = useState(null)
    const [followers, setFollowers] = useState(null)
    const [following, setFollowing] = useState(null)
    const [bio, setBio] = useState(null)
    const {response, loading, error} = useFetchUserInfo(url + '001')

    const [post, setPost] = useState(true)
    const [saved, setSaved] = useState(false)
    const [tagged, setTagged] = useState(false)

    useEffect(()=>{
        console.log(response.posts)
        setName(response.username)
        setPostsnum(response.posts_num)
        setFollowers(response.followers_num)
        setFollowing(response.following_num)
        setBio(response.bio)
    },[response])


    const activatePosts = (event)=>{
        setPost(true)
        setTagged(false)
        setSaved(false)
    }

    const activateSaved = ()=>{
        setPost(false)
        setTagged(false)
        setSaved(true)
    }

    const activateTagged = ()=>{
        setPost(false)
        setTagged(true)
        setSaved(false)
    }


    return(
        <>
            <div className="profileinfodiv">
            <div className="topDiv">
                {/* user profile picture */}
                <div className="profileimagediv">
                    <img src={ProfileImg} alt='profile Image' id="profileImage"/>
                </div>
                {/* user informations */}
                <div className="info">
                    <ul className="topprofile">
                        <li><h2 id="username">{name}</h2></li>
                        <li><button className="btn">Edit prorfile</button></li>
                        <li><button className="btn">View archive</button></li>
                        <li><button className="settingbtn"><img src={settingicon} alt='profile Image' id="settingicon"/></button></li>
                    </ul>
                    <ul className="pageinfo">
                        <li><p>{postsnum} posts</p></li>
                        <li><p>{followers} followers</p></li>
                        <li><p>{following} following</p></li>
                    </ul>
                    <ul className="buttominfo">
                        <li><h4 className="profilename"> {name}</h4></li>
                        <li><h4 className="bio"> {bio} </h4></li>
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
        <div className="selection">
            <ul className="select-ul">
                <li><button id={`${(post)? "active": null}`} onClick={(event)=>{activatePosts(event)}}>POSTS</button></li>
                <li><button id={`${(saved)? "active": null}`} onClick={(event)=>{activateSaved(event)}}>SAVED</button></li>
                <li><button id={`${(tagged)? "active": null}`} onClick={(event)=>{activateTagged(event)}}>TAGGED</button></li>
            </ul>
        </div>
        <div className="bottomContentDiv">
            <Posts postsid={response.posts}  saved={saved} tagged={tagged}/>
        </div>
        </div>
        </>
    )
}

export default ProfileInfo