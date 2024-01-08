import { useState, useEffect } from "react";

const useFetchPosts = (url)=>{
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //executed on render
    useEffect(()=>{
        fetchPost()
    },[])

    //fetchpost from api
    const fetchPost =async()=>{
        setLoading(true)
        try {
            const res = await fetch(url)
            const posts = await res.json()
                setResponse(posts) 
        } catch (error) {
                setError(error)
        }finally{
                setLoading(false) 
        }
    }

    //
    return {response, error, loading}
}

export default useFetchPosts;