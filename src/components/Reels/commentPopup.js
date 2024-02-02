import './reels.css'
import likeIcon from '../../assets/images/likeIcon.PNG'
import commentIcon from '../../assets/images/commentIcon.PNG'
import messageIcon from '../../assets/images/messageIcon.PNG'
import saveIcon from '../../assets/images/saveIcon.PNG'
import checkAccessTokens from '../../utils/checkAccessToken'
import Comment from "../comment";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CommentPopup=({setPopup, postdata})=>{

    const navigate = useNavigate()
    const [comments, setComments] = useState()
    const [newcomment, setNewcomment] = useState('')
    const [postlikes, setpostlikes] = useState()
    const [liked, setLiked] = useState(false)
    let store =[]

    useEffect(()=>{
        console.log("id :"+ postdata._id)
        setComments(postdata.comments)
        setpostlikes(postdata.likes)
        // let verify = verifyIfLike(username, response.likedUsers)
        // setLiked(verify)
    },[])


    //add new comment to list of existing comments of this post with id
    const addNewComment = async(e)=>{
        e.preventDefault()

        const token = localStorage.getItem('token');
        const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};

        await axios.patch("http://localhost:5000/comment",
            { "id": postdata._id, "comment": newcomment, "comments_num": postdata.comments_num },
            { headers: headers }
        ).then((response) => {
            //navigate to login if token expired else add comment
            const verifyAccess = checkAccessTokens(response)
            if(verifyAccess){
                navigate('/Login')
            }else{
                //increment comment number by 1
                setComments([...comments, newcomment])
                postdata.comments_num += 1
            }
        }).catch((error) => {
            console.log(error)
        })
        
        
    }


    return(
        <div className="message-popup">
                <button className="close-popup-btn" onClick={()=>setPopup(false)}>X</button>
                <div className="inner-message">
                    <div className="inner-popup-image-container">
                        <img src={"http://localhost:5000/"+postdata.post_image} alt="image" id="popup-comment-img"/>
                    </div>
                    <div className="right-side-popup">
                        <div className="comment-list-contianer">
                            <ul>
                                {comments &&
                                    comments.map((postcomment, index)=>{
                                        return(
                                            <li><Comment messageText={postcomment} username="saam" key={index}/></li>
                                        )
                                    })
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
                                    <h4 className="likes-text">{postdata.likes_num} {(postdata.likes_num<=1)? "Like": "Likes"}</h4>
                                </div>
                                <div className="comment-input-container">
                                    <form>
                                        <input type="text" name="comment" placeholder="Add a comment..." onChange={(e)=>setNewcomment(e.target.value)} id="popup-comment-input"/>
                                        <button type="submit" className="post-btn" onClick={(e)=>addNewComment(e)}>Post</button>
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default CommentPopup