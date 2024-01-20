import { useState, useEffect } from "react";

const useFetchComments = (url)=>{
    const [data, setData] = useState({})
    const [comments, setComments] = useState(null)
    const [commentsNum, setCommentsNum] = useState(true)
    const [error, setError] = useState(null)

    //executed on render
    useEffect(()=>{
        fetchcomment()
    },[])


    const fetchcomment = async()=>{

        try {
            const res = await fetch(url)
            const comment = await res.json()
            setData(comment)
            setComments(comment.comments)
            setCommentsNum(comment.commentnumbers)
        } catch (error) {
            setError(error)
        }finally{

        }
    }

    return {data, comments, commentsNum, error}

}

export default useFetchComments