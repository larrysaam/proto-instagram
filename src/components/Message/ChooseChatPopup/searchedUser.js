import '../../Search/search.css'
import sendDM from '../../../utils/sendMessage'

const SearchedUser = ({profile, username, id, setOpenMessage, setChooseChatPopup})=>{
    
    const url = "http://localhost:5000/message/"
    const myId = localStorage.getItem("user_id")

    const chat=()=>{
        const body = `${username} wants to connect`
        const res = sendDM(url, "", myId, id, myId, body, "today")
        console.log(res)
        // localStorage.setItem("messager_name", username)
        // localStorage.setItem("messager_photo", profile)
        // // localStorage.setItem("message_id", id)
        // setOpenMessage(true)
        // setChooseChatPopup(false)
    }

    
    return(
        <div className='searched_user_profilr_box' onClick={()=>chat()}>
            <img src={"http://localhost:5000/"+ profile} alt='profile' className='search_prof_img'/>
            <h4 className='searched_username_h4'>{username}</h4>
        </div>
    )
}

export default SearchedUser