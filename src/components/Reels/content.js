import Story from "../Story/story";
import Reels from "../Reels/reels";
import useFetchPosts from "../../hooks/useFetchPosts";
import { useState,useEffect } from "react";
import CommentPopup from "./CommentPopup/commentPopup";
import LoadingPage from "../Loading/loading";
import './reels.css'



const Content = () =>{

    const postURL =`${process.env.REACT_APP_BACKEND_URL}posts`;
    const {response, error, loading} = useFetchPosts(postURL)
    const [popup, setPopup] = useState(false)
    const [postdata, setPostdata] = useState([])

    useEffect(()=>{
        console.log("comments  " +postdata)
    })

    return(
        <div id='ContentDiv'>
            <Story />
            {loading &&  <LoadingPage/>}
            {error && <p>Something went wrong</p>}
            {response && <Reels reelposts={response} setPopup={setPopup} setPostdata={setPostdata}/>}
            {(popup)? <CommentPopup setPopup={setPopup} postdata={postdata}/> : ""}
        </div>
    );
}

export default Content;