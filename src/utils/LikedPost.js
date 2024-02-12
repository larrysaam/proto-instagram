import axios from "axios"

const LikePost = async(reel, likes, user_id) =>{
    console.log(reel.likes)
    const token = localStorage.getItem('token');
    const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};
    return await axios.patch(`${process.env.REACT_APP_BACKEND_URL}likes`,
        { "id": reel._id, "user_id": user_id, "likes": likes , "likes_num": reel.likes_num},
        { headers: headers}
    ).then((response) => {
        // Code
        console.log(response)
        return response
    }).catch((error) => {
        // Code
        console.log(error)
        return error
    })  
    
}

export default LikePost