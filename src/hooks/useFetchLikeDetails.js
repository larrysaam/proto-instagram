import { useState, useEffect } from "react";

const useFetchLikeDetails = (url)=>{
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //executed on render
    useEffect(()=>{
        fetchLikes()
    },[])


    const fetchLikes = async()=>{
        setLoading(true)
        try {
            console.log("url  "+url)
            const res = await fetch(url)
            const likes = await res.json()
            console.log("cc"+likes)
            setResponse(likes)
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    return {response, loading, error}

}

export default useFetchLikeDetails