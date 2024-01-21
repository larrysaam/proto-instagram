import './reels.css'
import likeIcon from '../../assets/images/likeIcon.PNG'
import commentIcon from '../../assets/images/commentIcon.PNG'
import messageIcon from '../../assets/images/messageIcon.PNG'
import saveIcon from '../../assets/images/saveIcon.PNG'
import likedIcon from '../../assets/images/heart.png'
import postimg from '../../assets/images/falcon_rocket.jpg'
import Comment from "../comment";
import verifyIfLike from '../../utils/verifyIfLike'
import useFetchLikeDetails from '../../hooks/useFetchLikeDetails'
import UnlikePost from '../../utils/UnlikedPost'
import LikePost from '../../utils/LikedPost'
import { useEffect, useState } from 'react'

const CommentPopup=({setPopup, postdata})=>{

    const username = "Larrien"
    const url = 'http://localhost:8080/likes'
    const {response, loading, error} = useFetchLikeDetails(url + "/" + postdata.id)
    const [comments, setComments] = useState([])
    const [postlikes, setpostlikes] = useState()
    const [liked, setLiked] = useState(false)

    useEffect(()=>{
        console.log("id :"+ postdata.id)
        setComments(postdata.comments)
        setpostlikes(postdata.likes)
        // let verify = verifyIfLike(username, response.likedUsers)
        // setLiked(verify)
    },[response])


    // //like post
    // const addLike = async(Id, username)=>{ 
    //     let res = true
    //     res = LikePost(Id, response, postdata, username)
    //     if(res){
    //         console.log("like Before ::: "+liked)
    //         setLiked([...liked, Id])
    //         console.log(Id)
    //         setTimeout(() => {
    //             console.log("like After:::: "+liked)
    //         }, 1000);
            
    //     }
    // }


    // //unlike post
    // const unLike = async(Id, username)=>{ 
    //     let res = false
    //     res = UnlikePost(Id, response, postdata, username)
    //     if(res){
    //         var newlike = liked.filter(f => f!==Id) 
    //         setLiked(newlike)
    //         console.log("newlike:::: "+newlike)
            
    //         setTimeout(() => {
    //             console.log("like:::: "+liked)
    //         }, 1000);
    //     }
    // }


    // // if user already liked video, unlike and visevesa
    // const likebtnClicked = (id, username)=>{ 
    //     (verifyIfLike(username, response.likedUsers))?  unLike(postdata.id, username) : addLike(postdata.id, username)
    // }


    return(
        <div className="message-popup">
                <button className="close-popup-btn" onClick={()=>setPopup(false)}>X</button>
                <div className="inner-message">
                    <div className="inner-popup-image-container">
                        <img src={postimg} alt="image" id="popup-comment-img"/>
                    </div>
                    <div className="right-side-popup">
                        <div className="comment-list-contianer">
                            <ul>
                                {(comments.length) ?
                                    comments.map((postcomment)=>{
                                        return(
                                            <li><Comment messageText={postcomment} username="saam"/></li>
                                        )
                                    }): console.log("no comment")
                                }
                            </ul>
                        </div>
                        <div className="bottom-popup-div">
                                <div className="message-popup-options">
                                    <ul>
                                        <li>
                                            <img  src={ likeIcon } alt='likeicon' className='comment-reelOptionIcon'/>
                                        </li>   
                                        <li> <img src={commentIcon} alt='commenticon' className='comment-reelOptionIcon'/></li>
                                        <li> <img src={messageIcon} alt='messageicon' className='comment-reelOptionIcon'/></li>
                                    </ul>
                                    <img src={saveIcon} alt='saveicon' className='comment-saveicon'/>
                                </div>
                                <div className="like-text-container">
                                    <h4 className="likes-text">{postlikes} {(postlikes<=1)? "Like": "Likes"}</h4>
                                </div>
                                <div className="comment-input-container">
                                    <form>
                                        <input type="text" name="comment" placeholder="Add a comment..." id="popup-comment-input"/>
                                        <button type="submit" className="post-btn">Post</button>
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default CommentPopup