
const UnlikePost = async(postId, likeData, reelposts, username) =>{

    //remove username from liked users object array
    const filtered = likeData.filter(f => f.id === postId)
    filtered[0].likedUsers = filtered[0].likedUsers.filter(f => f !== username)

    //find object to change data to new (filtered[0])
    const index = likeData.findIndex(object =>{ 
        return object.id === postId 
    })
    likeData[index] = filtered[0]

    //get details of reels by Postid
    const reel = reelposts.filter(reel =>(reel.id === postId))
    //reduce like count
    reel[0].likes = reel[0].likes - 1

    try{
        //remove name from all those who liked post
        const response = await fetch("http://localhost:8080/likes/"+postId,{
            method: "PUT",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filtered[0])
        })
        const ms = await response.json()
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

export default UnlikePost

