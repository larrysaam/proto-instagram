import '../../Search/search.css'
import sendDM from '../../../utils/sendMessage'

const SearchedUser = ({profile, username, id, setOpenMessage, setChooseChatPopup})=>{
    
    const url = `${process.env.BACKEND_URL}message/`
    const myId = localStorage.getItem("user_id")
    const myname = localStorage.getItem("username")


    //add user to chat
    const chat=()=>{
        const body = `${username} wants to connect`
        const res = sendDM(url, "", myId, myname, id, username, myId, body, "today")
        console.log(res)
        localStorage.setItem("messager_name", username)
        localStorage.setItem("messager_photo", profile)
        localStorage.setItem("message_id", id)
        // setOpenMessage(true)
        setChooseChatPopup(false)
    }

    
    return(
        <div className='searched_user_profilr_box' onClick={()=>chat()}>
            <img src={`${process.env.BACKEND_URL}`+ profile} alt='profile' className='search_prof_img'/>
            <h4 className='searched_username_h4'>{username}</h4>
        </div>
    )
}

export default SearchedUser