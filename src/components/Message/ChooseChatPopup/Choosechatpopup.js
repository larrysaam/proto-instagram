import SearchedUser from "./searchedUser"
import searchUsers from '../../../utils/searchUsers'
import { useState } from "react"
import './popup.css'

const ChooseChatPopup =({setOpenMessage, setChooseChatPopup})=>{

    const url = `${process.env.BACKEND_URL}user/search/`

    const [users, setUsers] = useState('')

    const handleChange =async(e)=>{
        //search users
        const res = await searchUsers(url, e.target.value)
        setUsers(res.data.data)
        console.log(users)
    }

    return(
        <div className="Choose_Chat_Popup_div">
            <div className="Choose_Chat_Popup_main">
            {/* header */}
            <div className="Choose_Chat_Popup_header">
                <h3>New message</h3>
                <button onClick={()=>setChooseChatPopup(false)}>X</button>
            </div>

            {/* search input */}
            <div className="Choose_Chat_Popup_input_box">
                <p>To: </p>
                <input type="text" name="username" placeholder="Search someone..." autoComplete='off' onChange={(e)=>handleChange(e)} id="search_bar_input"/>
            </div>

            {/* list */}
            <div className="Choose_Chat_Popup_list">
                <ul>
                    {users && 

                    users.map((user, index)=>
                        
                        <li key={index}><SearchedUser profile={user.profile_picture} username={user.username} id={user._id} setOpenMessage={setOpenMessage} setChooseChatPopup={setChooseChatPopup}/></li>   
                    )} 
                    
                </ul>
            </div>
            </div>
        </div>
    )
}

export default ChooseChatPopup