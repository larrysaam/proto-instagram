


const postComment = async(newcomment, reel)=>{
    /**
     * get comments from usefetchcomments hook
    **/

    console.log(reel)
    let comments = reel.comments
    let commentsNum = reel.commentnumbers

    console.log("before : "+comments)
    //add new comment to comment array
    comments.push(newcomment)
    console.log("After push : "+comments)
    //increment comment number
    commentsNum = commentsNum + 1

    let newdata = reel
    newdata.commentnumbers = commentsNum
    newdata.comments = comments
    console.log("new data : "+ newdata)


    try{
        //remove name from all those who liked post
        const response = await fetch( 'http://localhost:8080/posts/' + reel.id,{
            method: "PUT",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newdata)
        })
        const ms = await response.json()
        console.log(ms)

        return true
    }catch(err){
        console.log(err)
    }       
}

export default postComment;