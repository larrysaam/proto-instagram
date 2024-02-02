

const checkAccessToken = (response)=>{
    //navigate to login if token expired else add comment to UI
    if(response.data === "jwt expired"){
        const token = localStorage.removeItem('token')
        console.log(token)
        return true
    }else{
       return false
    }
}

export default checkAccessToken