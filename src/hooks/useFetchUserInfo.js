import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserInfo = (url)=>{
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //executed on render
    useEffect(()=>{
        fetchInfo()
    },[])


    const fetchInfo = async()=>{
        setLoading(true)
        const token = localStorage.getItem('token');
        const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};
        await axios.get(
            url,
            {headers: headers }
         )
         .then(response => {
            setResponse(response)
            setLoading(false)
         }) 
         .catch(err => {
            setError(err)
            setLoading(false)
         });

    }

    return {response, loading, error}

}

export default useFetchUserInfo