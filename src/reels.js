import './reels.css';
import profileImage from './fruit.png'
import Image from './Image.PNG'
import optionIcon from './optionIcon.PNG'
import likeIcon from './likeIcon.PNG'
import commentIcon from './commentIcon.PNG'
import messageIcon from './messageIcon.PNG'
import saveIcon from './saveIcon.PNG'
import smileIcon from './smillIcon.PNG'



const Reels =({posts})=>{


    let reel = posts.map(reel =>
        <div key={reel.userId} className='reelDiv'>

            {/* top */}
            <div className='topReelDiv'>
                <img src={profileImage} alt='' className='profileImage'/>
                <ul>
                    <li className='reelName'>{reel.name}</li>
                    <li className='reelLocation'>{reel.location}</li>
                    {/* <img src={optionIcon} alt='' className='more'/> */}
                </ul>
                
            </div>

            {/* image */}
            <img src={Image} alt='Image is not available' className='reelImage'/>
            
            {/* options, comments and likes */}
            <div className='options'>
                <ul>
                    <li><img src={likeIcon} className='reelOptionIcon'/></li>
                    <li> <img src={commentIcon} className='reelOptionIcon'/></li>
                    <li> <img src={messageIcon} className='reelOptionIcon'/></li>
                    <img src={saveIcon} className='save'/>
                </ul>
                <p className='reelLikes'>{reel.likes} likes</p>
                <p className='reelDesc'><b>{reel.name} </b> {reel.description}</p>
                <button onClick='viewComments()' className='viewcomments'>View all {reel.commentnumbers} comments</button>
                <p className='reelDate'>{reel.date}</p>
            </div>

            {/* add comments */}
            <div className='addComment'>
                <form>
                    <img src={smileIcon} className='commentIcon' for='comment'/>
                    <input type='text' placeholder='Add a comment' name='comment' className='commentInput'/>
                    <input type='submit' value='Post' name='postcomment' className='postComment'/>
                </form>
            </div>
        </div>
        );

        return(
            <>
                {reel}
            </>
        );
}

export default Reels;