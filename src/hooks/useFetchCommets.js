import { useState, useEffect } from "react";

const useFetchComments = (url)=>{
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //executed on render
    useEffect(()=>{
        fetchcomment()
    },[])


    const fetchcomment = async()=>{
        setLoading(true)
        try {
            const res = await fetch(url)
            const comment = await res.json()
            setResponse(comment)
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    return {response, loading, error}

}

export default useFetchComments