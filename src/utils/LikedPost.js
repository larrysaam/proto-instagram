
const LikePost = async(postId, likeData, reelposts, username) =>{

    //change like data to new data
    const filtered = likeData.filter(f => f.id === postId)
    filtered[0].likedUsers.push(username)

    //find object to change data to new (filtered[0])
    const index = likeData.findIndex(object =>{ 
        return object.id === postId 
    })
    likeData[index] = filtered[0]

    //get details of reels with specific postid
    const reel = reelposts.filter(reel =>(reel.id === postId))
    //change like counts
    reel[0].likes = reel[0].likes + 1

    try{
        //add username to all those who liked the post
        const response1 = await fetch("http://localhost:8080/likes/"+postId,{
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(filtered[0]),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const ms = await response1.json()
        console.log(ms)


        //update number of likes in posts db
        const response2 = await fetch("http://localhost:8080/posts/"+postId,{
            method: "PUT",
            mode: "cors",
            body: JSON.stringify( reel[0]),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const ms2 = await response2.json()
        console.log(ms2)

        return true

    }catch(err){
        console.log(err)
    }

    
}

export default LikePost