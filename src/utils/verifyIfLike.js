
// verify if login user has liked the post.
const verifyLike = (username, data)=>{
    let verified
    //loop through array of users who liked th post to find name of current user.
    for(let i=0; i<data.length; i++){
        if(data[i] === username){
            verified = true
            break
        }else{
            verified = false
        }
    } 

    return verified
    
}

export default verifyLike