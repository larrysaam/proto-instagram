import axios from "axios";

const FetchUserInfo = async(url)=>{

    const token = localStorage.getItem('token');
    const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};
    const response = await axios.get(
        url,
        {headers: headers }
    )
        return response

}

export default FetchUserInfo