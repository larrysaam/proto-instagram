import './reels.css';
import spacex from '../../assets/images/spacex.jpg'
import nasa from '../../assets/images/nasa.jpg'
import likedIcon from '../../assets/images/heart.png'
import likeIcon from '../../assets/images/likeIcon.PNG'
import TapLikeIcon from '../../assets/images/taplikeicon.png'
import commentIcon from '../../assets/images/commentIcon.PNG'
import messageIcon from '../../assets/images/messageIcon.PNG'
import saveIcon from '../../assets/images/saveIcon.PNG'
import smileIcon from '../../assets/images/smillIcon.PNG'
import useFetchLikeDetails from '../../hooks/useFetchLikeDetails';
import checkAccessTokens from '../../utils/checkAccessToken'
import LikePost from '../../utils/LikedPost';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getPostLikes from '../../utils/UnlikedPost';
import postComment from '../../utils/comment';


const Reels =({reelposts, setPopup, setPostdata})=>{

    const likesURL = `${process.env.BACKEND_URL}`;
    const {response, loading, error} = useFetchLikeDetails(likesURL)
    const [liked, setLiked] = useState([]);
    const [myId, setMyId] = useState('')
    const [newcomment, setNewcomment] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        if(!loading){
            const user_id = localStorage.getItem('user_id')
            setMyId(user_id)
            setLiked([])
            update()
        }else{

        }
        
    },[response, reelposts])


    // verify if login user has liked the post.
    const verifyIfLiked = (Id, user_id) =>{
        let verified
        //get only the details of post with id (Id) from *likes* DB
        let FilteredLikes = reelposts.filter(f => f._id === Id)
        let values = FilteredLikes[0].likes
        
        //loop through array of users who liked th post to find name of current user.
        if(values.length>0){
            for(let i=0; i<values.length; i++){
                if(values[i] === user_id){
                    verified = true
                    break
                }else{
                    verified = false
                }
            } 
        }else{
            verified = false
        }
        return verified
    }


    const update = () =>{
        if(response){

            reelposts.forEach(reel => {
                var value = verifyIfLiked(reel._id, myId)

                if(value){
                    var Id = reel._id
                    setLiked(liked => ([...liked, Id]))
                }
            })
        }
    }



    //|________Double click to like post_____________|
    const doubleclick = (reel, user_id) =>{
        likebtnClicked(reel, user_id)
    }


    //||_________ if user already liked video, unlike and visevesa_________||
    const likebtnClicked = async(reel, user_id)=>{ 
        //retrieve likes for this post
        //Then, either LIKE or UNLIKE post and get response (res)
        let likes = await getPostLikes(reel._id)
        var res = await LikePost(reel, likes, user_id)
        
        //navigate to login if token expired else add comment to UI
        const verifyAccess = checkAccessTokens(res)
        if(verifyAccess){
                navigate('/Login')
        }else{
            if(res.data.status === 200){

                //increment number of likes
                setLiked(()=>[...liked, reel._id])
                reel.likes_num = reel.likes_num + 1

            }else if(res.data.status === 201){

                //decrement number of likes
                var newlike = liked.filter(f => f!==reel._id) 
                setLiked(newlike)
                reel.likes_num = reel.likes_num - 1
                
            }else{
                console.log(res)
            }
        }
        
    }


    //submit comment made on a post
    const postcomment = (e, reel) =>{
        e.preventDefault()
        if(postComment( newcomment, reel)){
            alert("submited")
        }else{
            
        }
    }
    

    const seeAllComments =(reel)=>{
        setPostdata(reel)
        setPopup(true)
    }


    //reels post container
    var reel = reelposts.map((reel, index) =>
        <div key={reel.id} className='reelDiv'>

            {/* top */}
            <div className='topReelDiv'>
                <img src=
                {
                    (reel.name === "nasa") ? 
                    nasa : spacex
                } 
                alt='' 
                className='profileImage'
                />
                <ul>
                    <li className='reelName'>{reel.username}</li>
                    <li className='reelLocation'>{reel.location}</li>
                    {/* <img src={optionIcon} alt='' className='more'/> */}
                </ul>
                
            </div>

            {/*_________ image____________ */}
            <div className='PostImage'>
                <img  src={TapLikeIcon}  alt='likeicon' id='taplikeicon'/>
                <img src={`${process.env.BACKEND_URL}`+reel.post_image} alt='not available' className='reelImage' onDoubleClick={()=>doubleclick(reel, myId)}/>
            </div>
           
            {/*_________ options, comments and likes_________ */}
            <div className='options'>
                <ul>
                    
                    <li>
                        {/*____________ like and unlike when heart ________*/}
                        {
                            ((liked.length>0 ) && (liked[index] === reel._id))?
                            <img  src={ likedIcon } onClick={()=>likebtnClicked(reel, myId)} alt='likeicon' className='reelOptionIcon'/>
                            :
                            <img  src={ likeIcon } onClick={()=>likebtnClicked(reel, myId)} alt='likeicon' className='reelOptionIcon'/>
                        }
                    </li>   
                    <li> <img src={commentIcon} alt='commenticon' className='reelOptionIcon'/></li>
                    <li> <img src={messageIcon} alt='messageicon' className='reelOptionIcon'/></li>
                    <img src={saveIcon} alt='saveicon' className='save'/>
                </ul>
                <p className='reelLikes'>{reel.likes_num} {(reel.likes_num<=1)? " like": " likes"}</p>
                <p className='reelDesc'><b>{reel.name} </b> {reel.description}</p>
                <button onClick={()=>{seeAllComments(reel)}} className='viewcomments'>View all {reel.comments_num} comments</button>
                <p className='reelDate'>{reel.date}</p>
            </div>

            {/* _________add comments_________ */}
            <div className='addComment'>
                <form >
                    <img src={smileIcon}  alt='smileicon'className='commentIcon' for='comment'/>
                    <input type='text' placeholder='Add a comment' name='comment' onChange={(e)=>setNewcomment(e.target.value)} className='commentInput'/>
                    <input type='submit' value='Post' name='postcomment' onClick={(e)=>postcomment(e,reel)} className='postComment'/>
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