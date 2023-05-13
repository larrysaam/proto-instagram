import Story from "./story";
import Reels from "./reels";
import './story.css';
import ApiRequest from "./apiRequest";
import { useState, useEffect } from "react";

const Content = async () =>{

    const API_URL ="http://localhost:3500/posts";

    const [posts, setPosts] = useState([]);

    // loads data when browser loads only once
    useEffect(() =>{
        const fetchPosts = async() =>{
            try{
                const response = await fetch(API_URL);
                const posts = await response.json();
                console.log(posts);
                setPosts(posts);
            }catch{
                console.log("err.stack");
            }
        }
         (async () => await fetchPosts())();
    }, []);


    // adding data to api POST request
    // const postOption = {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
        // body: JSON.stringify(MynewPost)
    // }
    // const result = await ApiRequest(API_URL, postOption);



    return(
        <div id='ContentDiv'>
            <Story />
            <Reels posts={posts}/>
        </div>
    )
}

export default Content;