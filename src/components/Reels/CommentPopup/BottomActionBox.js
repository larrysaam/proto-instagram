import '../reels.css'
import likeIcon from '../../../assets/images/likeIcon.PNG'
import commentIcon from '../../../assets/images/commentIcon.PNG'
import messageIcon from '../../../assets/images/messageIcon.PNG'
import saveIcon from '../../../assets/images/saveIcon.PNG'


const BottomActionBox = ({likes_num, addNewComment, setNewcomment})=>{


    return(
        <div className="bottom-popup-div">

            {/* __________like, save , message icons section_________ */}
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

            {/*__________ likes count__________ */}
            <div className="like-text-container">
                <h4 className="likes-text">{likes_num} {(likes_num<=1)? "Like": "Likes"}</h4>
            </div>

            {/*__________ input field for messages_________ */}
            <div className="comment-input-container">
                <form>
                    <input type="text" name="comment" placeholder="Add a comment..." onChange={(e)=>setNewcomment(e.target.value)} id="popup-comment-input"/>
                    <button type="submit" className="post-btn" onClick={(e)=>addNewComment(e)}>Post</button>
                </form>
            </div>
        </div>
    )
}

export default BottomActionBox