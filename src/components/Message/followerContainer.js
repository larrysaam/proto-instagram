import './message.css'
import profileimg from '../../assets/images/nasa.jpg'
import { useEffect, useState } from 'react'
import checkAccessToken from '../../utils/checkAccessToken'
import FetchUserInfo from '../../utils/fetchUserInfo'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const FollowerContainer =({setOpenMessage, setReceptor, setInitiator})=>{

    const [data, setData] = useState([])
    const [myId, setMyId] = useState('')

    const navigate = useNavigate

    useEffect(()=>{
        fetchContacts()
    },[])


    // fetch all contacts with a conversation
    const fetchContacts = async()=>{
        //get token and user_id from localstorage
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem("user_id")
        const headers = {'Content-Type': 'application/json', Authorization: `Bearer ${token}`};
        setMyId(user_id)
        //send get request
        await axios.get(`http://localhost:5000/message/${user_id}`,
        {headers: headers})
        .then(res=>{
            const verifyAccess = checkAccessToken(res)
            if(verifyAccess){
                navigate('/Login')
            }else{
                console.log(res.data.data)
                setData(res.data.data)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    const handleClick =async(id, receptor, initiator)=>{
        var res = {}
        setInitiator(initiator)
        setReceptor(receptor)

        if(initiator === myId){
            res =await FetchUserInfo(`http://localhost:5000/user/${receptor}`)
        }else{
            res = await FetchUserInfo(`http://localhost:5000/user/${initiator}`)
        } 
        localStorage.setItem("messager_name", res.data.data.username)
        localStorage.setItem("messager_photo", res.data.data.profile_picture)
        localStorage.setItem("message_id", id)
        setOpenMessage(true)

    }

    const getUserName = async(id)=>{
        const  res = await FetchUserInfo(`http://localhost:5000/user/${id}`)
        if(res){
            return res.data.data.username
        }else{
            return ""
        }
    }



    return(
        <ul className='followerlist'>
            <li >
                <div className="followercontainer" onClick={()=>handleClick("i", "r")}>
                    <img src={profileimg} alt="" id="followerimg"/>
                    <ul>
                        <li>Larrien</li>
                        <li className='messagestatus'>Active now</li>
                    </ul>
                </div>
            </li>

            {/* loop through all contacts. Either message receptor or initiator */}
            {
                (data)?
                data.map((data)=>{
                    return(
                        <li >
                            <div className="followercontainer" onClick={()=>handleClick( data._id, data.receptor, data.initiator )}>
                                <img src={profileimg} alt="" id="followerimg"/>
                                <ul>
                                    {/* display only name of other chat users  */}
                                    <li>{(data.initiator === myId)? 
                                            data.receptor
                                            : 
                                            data.initiator}
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