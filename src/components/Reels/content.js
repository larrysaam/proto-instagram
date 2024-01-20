import Story from "../Story/story";
import loadingLogo from '../../assets/images/instagram logo.PNG'
import Reels from "../Reels/reels";
import useFetchPosts from "../../hooks/useFetchPosts";
import { useState,useEffect } from "react";
import CommentPopup from "./commentPopup";
import './reels.css'



const Content = () =>{

    const postURL ="http://localhost:8080/posts";
    const {response, error, loading} = useFetchPosts(postURL)
    const [popup, setPopup] = useState(false)
    const [postdata, setPostdata] = useState({})

    return(
        <div id='ContentDiv'>
            <Story />
            {loading && <img src={loadingLogo} alt=""/>}
            {error && <p>Something went wrong</p>}
            {response && <Reels reelposts={response} setPopup={setPopup} setPostdata={setPostdata}/>}
            {(popup)? <CommentPopup setPopup={setPopup}/> : ""}
        </div>
    );
}

export default Content;