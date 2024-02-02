
const getPostLikes = async(postId) =>{

    try{
        //remove name from all those who liked post
        const response = await fetch("http://localhost:5000/likes/"+postId,{
            method: "GET",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            }
        })
        const ms = await response.json()
        return ms.data
    }catch(err){
        console.log(err)
    }       
    
}

export default getPostLikes

