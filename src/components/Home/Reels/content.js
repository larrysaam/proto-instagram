import Story from "../Story/story";
import Reels from "../Reels/reels";
import '../../../style/story.css';
import { useState, useEffect } from "react";

const Content = () =>{

    const API_URL ="http://localhost:8000/posts";

    const [reelposts, setreelPosts] = useState([]);

    // loads data when browser loads only once
    useEffect(() =>{
        const fetchPosts = async() =>{
            try{
                const response = await fetch(API_URL);
                const posts = await response.json();
                console.log(posts);
                setreelPosts(posts);
            }catch(err){
                console.log("err.stack");
            }
        }
         fetchPosts();
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
            <Reels reelposts={reelposts}/>
        </div>
    );
}

export default Content;