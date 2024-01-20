import './profile.css'
import { useState, useEffect } from 'react'
import image from '../../assets/images/falcon_rocket.jpg'

const Posts = ({postsid, saved, tagged})=>{

   
    return(
        <div className="postcontainer">
            {postsid && 
                postsid.map((postimg, index)=>{
                    return(
                        <img src={(postimg === "21df909")? image : null} alt={postimg} id='postimage'/>
                    )
                })
            }
            {saved && <h1>Saved</h1>}
            {tagged && <h1>Tagged</h1>}
        </div>
    )
}

export default Posts