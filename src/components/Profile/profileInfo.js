import { useState, useEffect } from "react"
import useFetchUserInfo from "../../hooks/useFetchUserInfo"
import './profile.css'
import settingicon from '../../assets/images/setting icon.png'
import StoryImg from '../../assets/images/lemon.png'
import ProfileImg from '../../assets/images/spacex.jpg'
import Posts from "./posts"

const ProfileInfo =()=>{

    // const url = 'http://localhost:8080/user'
    // const {response, loading, error} = useFetchUserInfo(url)
    // const {name, setName} = useState('')
    // const {postsnum, setPostsnum} = useState('')
    // const {followers, setFollowers} = useState('')
    // const {following, setFollowing} = useState('')
    // const {bio, setBio} = useState('')

    const [posts, setPosts] = useState(true)
    const [saved, setSaved] = useState(false)
    const [tagged, setTagged] = useState(false)

    // useEffect(()=>{
    //     setName(response.name)
    //     setPostsnum(response.postsnum)
    //     setFollowers(response.followers)
    //     setFollowing(response.following)
    //     setBio(response.bio)
    // },[])


    const activatePosts = (event)=>{
        setPosts(true)
        setTagged(false)
        setSaved(false)
    }

    const activateSaved = ()=>{
        setPosts(false)
        setTagged(false)
        setSaved(true)
    }

    const activateTagged = ()=>{
        setPosts(false)
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
                        <li><h2 id="username">Larriensaams</h2></li>
                        <li><button className="btn">Edit prorfile</button></li>
                        <li><button className="btn">View archive</button></li>
                        <li><button className="settingbtn"><img src={settingicon} alt='profile Image' id="settingicon"/></button></li>
                    </ul>
                    <ul className="pageinfo">
                        <li><p>1 posts</p></li>
                        <li><p>60 followers</p></li>
                        <li><p>50 following</p></li>
                    </ul>
                    <ul className="buttominfo">
                        <li><h4 className="profilename"> Larriensaams</h4></li>
                        <li><h4 className="bio"> bio </h4></li>
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
                <li><button id={`${(posts)? "active": null}`} onClick={(event)=>{activatePosts(event)}}>POSTS</button></li>
                <li><button id={`${(saved)? "active": null}`} onClick={(event)=>{activateSaved(event)}}>SAVED</button></li>
                <li><button id={`${(tagged)? "active": null}`} onClick={(event)=>{activateTagged(event)}}>TAGGED</button></li>
            </ul>
        </div>
        <div className="bottomContentDiv">
            <Posts posts={posts} saved={saved} tagged={tagged}/>
        </div>
        </div>
        </>
    )
}

export default ProfileInfo