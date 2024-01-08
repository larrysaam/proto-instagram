import useFetchComments from "../hooks/useFetchCommets"


const postComment = async(url1, url2, postid, reel, newcomment, commentsnum)=>{
    /**
     * get comments from usefetchcomments hook
    **/
    const {response} = useFetchComments(url1 + postid)

    //change comment data to new data
    const filtered = response.filter(f => f.id === postid)
    filtered[0].comments.push(newcomment)

    //change comment data to new data
    const filteredpost = reel.filter(f => f.id === postid)
    filteredpost[0].commentnumbers = commentsnum + 1


    try{
        //remove name from all those who liked post
        const response = await fetch(url1 + postid,{
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
        const response2 = await fetch(url2 + postid,{
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(filteredpost[0]),
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

export default postComment;