import axios from "axios";

const searchUsers =async(url, input)=>{
    const headers = {'Content-Type': 'application/json'};

    try {
        const res = await axios.get(
            url + input,
            {headers: headers }
        )
        return res
    } catch (error) {
        console.log(error)
    }
    
}

export default searchUsers