import './reels.css'
import likeIcon from '../../assets/images/likeIcon.PNG'
import commentIcon from '../../assets/images/commentIcon.PNG'
import messageIcon from '../../assets/images/messageIcon.PNG'
import saveIcon from '../../assets/images/saveIcon.PNG'
import postimg from '../../assets/images/falcon_rocket.jpg'
import Comment from "../comment";

const CommentPopup=({setPopup})=>{

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
                                {/* {postdata.comments &&
                                    postdata.map((postcomment, index)=>{
                                        <Comment messageText={postcomment.comments} username={"Saam"}/>
                                    })
                                } */}
                            </ul>
                        </div>
                        <div className="bottom-popup-div">
                                <div className="message-popup-options">
                                    <ul>
                                        <li> <img src={ likeIcon } alt='likeicon' className='comment-reelOptionIcon'/></li>   
                                        <li> <img src={commentIcon} alt='commenticon' className='comment-reelOptionIcon'/></li>
                                        <li> <img src={messageIcon} alt='messageicon' className='comment-reelOptionIcon'/></li>
                                    </ul>
                                    <img src={saveIcon} alt='saveicon' className='comment-saveicon'/>
                                </div>
                                <div className="like-text-container">
                                    <h4 className="likes-text">100 likes</h4>
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