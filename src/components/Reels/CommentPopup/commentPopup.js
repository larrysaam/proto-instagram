//functios && Libraries
import '../reels.css'
import axios from 'axios'
import checkAccessTokens from '../../../utils/checkAccessToken'
//components
import BottomActionBox from './BottomActionBox'
import SideCommentImage from './sideCommentImage'
import Comment from "../../comment";
//react 
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


const CommentPopup=({setPopup, postdata})=>{

    const navigate = useNavigate()
    const [comments, setComments] = useState()
    const [newcomment, setNewcomment] = useState('')
    const [postlikes, setpostlikes] = useState()
  

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

        await axios.patch(`${process.env.BACKEND_URL}comment`,
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


      /**
     * ____________________Add Comment popup________________________
     * 
    */
    return(
        <div className="message-popup">
                <button className="close-popup-btn" onClick={()=>setPopup(false)}>X</button>
                <div className="inner-message">

                    {/* _________side post image________ */}
                    <SideCommentImage post_image={postdata.post_image}/>
    
                    {/* _________list of all comments made on post_________ */}
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

                        {/* ___________Bottom comment, like , save section________________ */}
                        <BottomActionBox likes_num={postdata.likes_num} addNewComment={addNewComment} setNewcomment={setNewcomment}/>
                    </div>
                </div>
        </div>
    )
}

export default CommentPopup