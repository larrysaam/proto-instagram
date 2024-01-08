import './reels.css';
import spacex from '../../assets/images/spacex.jpg'
import nasa from '../../assets/images/nasa.jpg'
import Image from '../../assets/images/Image.PNG'
import likedIcon from '../../assets/images/heart.png'
import likeIcon from '../../assets/images/likeIcon.PNG'
import TapLikeIcon from '../../assets/images/taplikeicon.png'
import commentIcon from '../../assets/images/commentIcon.PNG'
import messageIcon from '../../assets/images/messageIcon.PNG'
import saveIcon from '../../assets/images/saveIcon.PNG'
import smileIcon from '../../assets/images/smillIcon.PNG'
import useFetchLikeDetails from '../../hooks/useFetchLikeDetails';
import LikePost from '../../utils/LikedPost';
import UnlikedPost from '../../utils/UnlikedPost';
import { useEffect, useState } from 'react';
import postComment from '../../utils/comment';



const Reels =({reelposts})=>{

    const likesURL = 'http://localhost:8080/likes';
    const [liked, setLiked] = useState(true);
    const {response, loading, error} = useFetchLikeDetails(likesURL)

    useEffect(()=>{
        update()
    },[])


    // verify if login user has liked the post.
    const verifyIfLiked = (Id, username) =>{
        let verified
        //get only the details of post with id (Id) from *likes* DB
        let FilteredLikes = response.filter(f => f.id == Id)
        let values = FilteredLikes[0].likedUsers
        //loop through array of users who liked th post to find name of current user.
        for(let i=0; i<values.length; i++){
            (values[i] === username) ? verified = true : verified = false
        } 

        return verified
    }


    const update = () =>{

        if(response){
            reelposts.forEach((reel) => {
                let value = verifyIfLiked(reel.id, "Larrien")
                let Id = reel.id
                    let obj = {
                        [Id]: value
                    }
                    setLiked({...liked, obj})
                    console.log(obj )
                })
        }else{
           
        }
    }



    //like post
    const addLike = async(Id, username)=>{ 

        let res = true
        res = LikePost(Id, response, reelposts, username)

        if(res){
            setLiked({...liked, [Id] : true })
        }
    }


    //unlike post
    const unLike = async(Id, username)=>{ 

        let res = false
        res = UnlikedPost(Id, response, reelposts, username)

        if(res){
            setLiked({...liked, [Id] : false })
        }
    }


    //double click to like post
    const doubleclick = (Id, username) =>{
        if(!liked[Id]){
            let res = true
            res = LikePost(Id, response, reelposts, username)
            if(res){
                setLiked({...liked, [Id] : true })
            }
        }else{

        }
        
    }


    // if user already liked video, unlike and visevesa
    const likebtnClicked = (id, username)=>{
        (verifyIfLiked(id, username) == true)?  unLike(id, username) : addLike(id, username)
    }


    //submit comment made on a post
    const postcomment = (Id) =>{
        /**
         * 
         * usePostComment Hook
         * 
         **/
        const url1 = ""
        const url2 = ""
        let newcomment =
        postComment(url1, url2, postid, reelposts, newcomment, commentsnum)
    }


    //reels 
    var reel = reelposts.map(reel =>
        <div key={reel.id} className='reelDiv'>

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
            <div className='PostImage'>
                <img  src={TapLikeIcon}  alt='likeicon' id='taplikeicon'/>
                <img src={Image} alt='not available' className='reelImage' onClick={()=>doubleclick(reel.id, "Larrien")}/>
            </div>
           
            {/* options, comments and likes */}
            <div className='options'>
                <ul>
                    
                    <li>
                        {/* like and unlike when heart is pressed*/}
                        {
                            (liked[reel.id])?
                            <img  src={ likedIcon } onClick={()=>likebtnClicked(reel.id, "Larrien")} alt='likeicon' className='reelOptionIcon'/>
                            :
                            <img  src={ likeIcon } onClick={()=>likebtnClicked(reel.id, "Larrien")} alt='likeicon' className='reelOptionIcon'/>
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
                <form onSubmit={postcomment(reel.id)}>
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