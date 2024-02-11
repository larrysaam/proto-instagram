import axios from "axios";


const sendDM =async(url, id, initiator, initiator_name, receptor, receptor_name, author, body, send_time)=>{
    const token = localStorage.getItem('token');
    const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};

    return await axios.post(url,
        { "_id": id, "initiator": initiator, "initiator_name": initiator_name, "receptor": receptor, "receptor_name": receptor_name, "author": author, "body": body, "send_time": send_time},
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