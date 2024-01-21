import './comment.css'
import profilepic from '../assets/images/spacex.jpg'


const Comment =({messageText, username})=>{

    return(
        <div className='comment-message-container'>
            <ul className='inner-message-ul'>
                <li>
                    <img src={profilepic} alt='profile picture' id='comment-profile-pic'/>
                </li>
                <li>
                    <div className='message-text-container'>
                        <p><b>{username} </b> {messageText}</p>
                        <p className='bottom-day-reply-area'>2d   <button className='reply-btn'>Reply</button></p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Comment