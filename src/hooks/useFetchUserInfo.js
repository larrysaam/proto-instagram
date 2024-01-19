import { useState, useEffect } from "react";

const useFetchUserInfo = (url)=>{
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //executed on render
    useEffect(()=>{
        fetchInfo()
    },[])


    const fetchInfo = async()=>{
        setLoading(true)
        try {
            const res = await fetch(url)
            const info = await res.json()
            setResponse(info)
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    return {response, loading, error}

}

export default useFetchUserInfo