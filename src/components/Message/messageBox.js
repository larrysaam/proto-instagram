import './message.css'
import messagelogo from '../../assets/images/ig message icon.PNG'
import useFetchMessages from '../../hooks/useFetchMessages'
import checkAccessToken from '../../utils/checkAccessToken'
import sendDM from '../../utils/sendMessage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'


const MessageBox = ({openMessage, initiator, receptor, setChooseChatPopup})=>{

    const url = `${process.env.REACT_APP_BACKEND_URL}message/`
    const myId = localStorage.getItem("user_id")
    const myname = localStorage.getItem("username")
    const messager_name = localStorage.getItem('messager_name')
    const messager_photo = localStorage.getItem('messager_photo')
    const message_id = localStorage.getItem('message_id')

    const {response, loading, error} = useFetchMessages(`${process.env.REACT_APP_BACKEND_URL}message/all/`+ message_id)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState([])
    const [input, setInput] = useState('')
    const [socket, setSocket] = useState(null)


    const navigate = useNavigate()

    // establish connection
    useEffect(()=>{
        const newsocket = io(`${process.env.REACT_APP_BACKEND_URL}`)
        setSocket(newsocket)

        return ()=>{
            newsocket.disconnect()
        }
    },[])


    //set user as online
    useEffect(()=>{
        if(socket === null) return
        socket.emit("addNewUser", myId)

        return () => {
            socket.off("addNewUser")
        }
    },[socket])


    // send message
    useEffect(()=>{
        if(socket === null) return

        (myId === initiator)?
            socket.emit("sendMessage", {body: newMessage, author: myId, receiver: receptor})
            :
            socket.emit("sendMessage", {body: newMessage, author: myId, receiver: initiator})

    },[newMessage])


    //recieve message
    useEffect(()=>{
        if(socket === null) return
        
        socket.on("getMessage", res =>{
            console.log("received message : ",res)

            if(myId !== res.receiver) return

            setMessages((prev) => [...prev, res])
            console.log(messages)

        })



        return ()=>{
            socket.off("getMessage")
        }
    },[socket])


    useEffect(()=>{
            if(!loading){
                const verifyAccess = checkAccessToken(response)
                if(verifyAccess){
                    navigate('/Login')
                }else{
                    if(openMessage && response.data.data){
                        console.log(response.data.data)
                        setMessages(response.data.data)
                    }
                }
            }else{
                
            }
       
    },[response, openMessage])




    //send messages
    const sendMessage =async()=>{
        console.log("message id  ",message_id)
       
        const res = await sendDM(url, message_id, initiator, myname , receptor, messager_name, myId, input, "today")

        if(res.status === 200){
            setNewMessage(input)
            setMessages(()=>[...messages, {body: input, author: myId} ])
        }
    }


    /**small message text box
     * 
     * If author id ===  myid , 
     * Then message text will float to the rigth (sender) 
     * Else it floats to the left  (receiver)
    */
    const messageBox = (text, author)=>{
        return(
            <div className={(author === myId)? 'message_send_div': "message_receive_div"}>
                <p id={(author === myId)? 'send_message_text': "received_message_text"}>{text}</p>
            </div>
        )
    }

 

    return(
        <div className="mainmessagebox">
        {(openMessage)?

                <div className='message_text_box_area'>
                    <div className='message_box_profile_header'>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}`+messager_photo} alt='profile_image' className='profile_image'/>
                        <h3>{messager_name}</h3>
                    </div>

                    {/* message area */}
                    <div className='message_message_area_container'>
                        {/* all messaages received and sent */}
                        {messages && 
                            messages.map(msg =>messageBox(msg.body, msg.author))
                            
                        }
                    </div>
                   
                   {/* input message field */}
                   <div className='message_bottom_input_container'>
                        <input
                            type='text'
                            name='message'
                            placeholder='Write something...'
                            autoComplete='off'
                            id='input_textarea_message'
                            onChange={(e)=>setInput(e.target.value)}
                        />
                        {(input)? 
                             <button id='send_message_btn' onClick={()=>sendMessage()}>Send</button>
                            :
                            ""
                        }
                    </div>
                </div>
            :
            <div className="centermessage">
                <img src={messagelogo} alt='messages' id='igmessagelogo'/>
                <h2>Your messages</h2>
                <p>send private photos and messages to a friend or group</p>
                <button onClick={()=>setChooseChatPopup(true)}>send message</button>
            </div>
        }
        </div>
        
    )
}

export default MessageBox