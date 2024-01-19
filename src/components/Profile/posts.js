import './profile.css'
import { useState } from 'react'

const Posts = ({posts, saved, tagged})=>{



    // const posts = Posts.map((post, index)=>{
    //     return(
    //         <img src='' alt='post not available' id='postimage'/>
    //     )
    // })

    return(
        <div className="postcontainer">
            {posts && <h1>Posts</h1>}
            {saved && <h1>Saved</h1>}
            {tagged && <h1>Tagged</h1>}
        </div>
    )
}

export default Posts