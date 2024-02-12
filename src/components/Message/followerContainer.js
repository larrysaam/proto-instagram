import './message.css'
import profileimg from '../../assets/images/profilephoto.png'
import { useEffect, useState } from 'react'
import checkAccessToken from '../../utils/checkAccessToken'
import FetchUserInfo from '../../utils/fetchUserInfo'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const FollowerContainer =({setOpenMessage, setReceptor, setInitiator})=>{

    const token = localStorage.getItem('token');
    const myId = localStorage.getItem("user_id")

    const [chats, setChats] = useState([])
    const [profileData, setProfileData] = useState([])

    const navigate = useNavigate


    
    useEffect(()=>{
        fetchContacts()
    },[])


    // fetch all contacts with a conversation
    const fetchContacts = async()=>{

        const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};
        //send get request
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}message/${myId}`,
        {headers: headers})
        .then(res=>{
            const verifyAccess = checkAccessToken(res)
            if(verifyAccess){
                navigate('/Login')
            }else{
                console.log(res.data)
                setChats(res.data.data)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    const fetchContactPhoto = async(receptor, initiator)=>{
        var res = {}

        if(initiator === myId){
            res = await FetchUserInfo(`${process.env.REACT_APP_BACKEND_URL}user/${receptor}`)
        }else{
            res = await FetchUserInfo(`${process.env.REACT_APP_BACKEND_URL}user/${initiator}`)
        } 

        const profile_pic = `${process.env.REACT_APP_BACKEND_URL}` + res.data.data.profile_picture
        console.log(profile_pic)
        return profile_pic
    }


    const handleClick =async(id, receptor, initiator)=>{
        var res = {}
        setInitiator(initiator)
        setReceptor(receptor)

        if(initiator === myId){
            res =await FetchUserInfo(`${process.env.REACT_APP_BACKEND_URL}user/${receptor}`)
        }else{
            res = await FetchUserInfo(`${process.env.REACT_APP_BACKEND_URL}user/${initiator}`)
        } 
        localStorage.setItem("messager_name", res.data.data.username)
        localStorage.setItem("messager_photo", res.data.data.profile_picture)
        localStorage.setItem("message_id", id)
        setOpenMessage(true)

    }



    return(
        <ul className='followerlist'>
            {/* loop through all contacts. Either message receptor or initiator */}
            {
                (chats)?
                chats.map((chat)=>{
                    return(
                        <li >
                            <div className="followercontainer" onClick={()=>handleClick( chat._id, chat.receptor, chat.initiator )}>
                                <img
                                    src={profileimg}
                                    alt=""
                                    id="followerimg"
                                />
                                <ul>
                                    {/* display only name of other chat users  */}
                                    <li id='chat_profile_name'>{(chat.initiator === myId)? 
                                            chat.receptor_name
                                            
                                            : 
                                            chat.initiator_name
                                        }
                                     </li>
                                    <li className='messagestatus'>Active now</li>
                                </ul>
                            </div>
                        </li>
                    )
                })

                :
                ""
            }
            
        </ul>
    )
}

export default FollowerContainer