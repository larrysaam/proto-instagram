import axios from "axios";


const sendDM =async(url, id, initiator, receptor, author, body, send_time)=>{
    const token = localStorage.getItem('token');
    const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};

    return await axios.post(url,
        { "_id": id, "initiator": initiator, "receptor": receptor,  "author": author, "body": body, "send_time": send_time},
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

export default sendDM