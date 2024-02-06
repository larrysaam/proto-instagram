import axios from "axios"
import { useState, useEffect } from "react"

const useFetchMessages =(url)=>{
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(()=>{
        fechmessage()
    },[])

    //function to fetch all messages btw 2 chat users
    const fechmessage = async()=>{
        setLoading(true)
        const token = localStorage.getItem('token');
        const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};
        await axios.get(url,
        {headers: headers})
        .then(res=>{
            console.log(res)
            setLoading(false)
            setResponse(res)
        })
        .catch(err=>{
            setLoading(false)
            setError(err)
        })
    }

    return {response, loading, error}

}

export default useFetchMessages