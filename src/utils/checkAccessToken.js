

const checkAccessToken = (response)=>{
    //navigate to login if token expired else add comment to UI
    if(response.data === "jwt expired"){
        return true
    }else{
       return false
    }
}

export default checkAccessToken