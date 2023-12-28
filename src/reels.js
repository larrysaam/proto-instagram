import './reels.css';
import spacex from './spacex.jpg'
import nasa from './nasa.jpg'
import Image from './Image.PNG'
import liked from './heart.png'
import likeIcon from './likeIcon.PNG'
import commentIcon from './commentIcon.PNG'
import messageIcon from './messageIcon.PNG'
import saveIcon from './saveIcon.PNG'
import smileIcon from './smillIcon.PNG'
import { useEffect, useState } from 'react';



const Reels =({reelposts})=>{

    const [icon, setIcon] = useState('');
    const [like, setLike] = useState([]);


    const likebtnClicked = ()=>{

    }

    var reel = reelposts.map(reel =>
        <div key={reel.userId} className='reelDiv'>

            {/* top */}
            <div className='topReelDiv'>
                <img src=
                {
                    (reel.name == "nasa") ? 
                    nasa : spacex
                } 
                alt='' 
                className='profileImage'
                />
                <ul>
                    <li className='reelName'>{reel.name}</li>
                    <li className='reelLocation'>{reel.location}</li>
                    {/* <img src={optionIcon} alt='' className='more'/> */}
                </ul>
                
            </div>

            {/* image */}
            <img src={Image} alt='not available' className='reelImage'/>
            
            {/* options, comments and likes */}
            <div className='options'>
                <ul>
                    
                    <li>
                        {/* set heart color when clicked */}
                        { 
                            (reel.mylike)?
                            <img src={liked} onClick={()=>likebtnClicked(reel.mylike)} alt='likeicon' className='reelOptionIcon'/>
                            :
                            <img src={likeIcon} onClick={()=>likebtnClicked()} alt='likeicon' className='reelOptionIcon'/>
                        }
                    </li>
                    <li> <img src={commentIcon} alt='commenticon' className='reelOptionIcon'/></li>
                    <li> <img src={messageIcon} alt='messageicon' className='reelOptionIcon'/></li>
                    <img src={saveIcon} alt='saveicon' className='save'/>
                </ul>
                <p className='reelLikes'>{reel.likes} likes</p>
                <p className='reelDesc'><b>{reel.name} </b> {reel.description}</p>
                <button onClick='viewComments()' className='viewcomments'>View all {reel.commentnumbers} comments</button>
                <p className='reelDate'>{reel.date}</p>
            </div>

            {/* add comments */}
            <div className='addComment'>
                <form>
                    <img src={smileIcon}  alt='smileicon'className='commentIcon' for='comment'/>
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