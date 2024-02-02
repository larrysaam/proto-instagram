import './message.css'
import profileimg from '../../assets/images/nasa.jpg'
import { useEffect, useState } from 'react'
import checkAccessToken from '../../utils/checkAccessToken'
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

    const handleClick =(receptor, initiator)=>{
        setOpenMessage(true)
        setInitiator(initiator)
        setReceptor(receptor)
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
                data.map(data=>{
                    return(
                        <li >
                            <div className="followercontainer" onClick={()=>handleClick( data.receptor, data.initiator )}>
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