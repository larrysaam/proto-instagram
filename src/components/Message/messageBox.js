import './message.css'
import messagelogo from '../../assets/images/ig message icon.PNG'
import useFetchMessages from '../../hooks/useFetchMessages'
import checkAccessToken from '../../utils/checkAccessToken'
import sendDM from '../../utils/sendMessage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const MessageBox = ({openMessage, initiator, receptor, setChooseChatPopup})=>{

    const url = "http://localhost:5000/message/"
    const myId = localStorage.getItem("user_id")
    const messager_name = localStorage.getItem('messager_name')
    const messager_photo = localStorage.getItem('messager_photo')
    const message_id = localStorage.getItem('message_id')

    const {response, loading, error} = useFetchMessages("http://localhost:5000/message/all/"+ message_id)
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')


    const navigate = useNavigate()

    useEffect(()=>{
            if(!loading){
                const verifyAccess = checkAccessToken(response)
                if(verifyAccess){
                    navigate('/Login')
                }else{
                    if(openMessage){
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
        const res = await sendDM(url, message_id, initiator, receptor, myId, input, "today")

        if(res.status === 200){
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
                        <img src={"http://localhost:5000/"+messager_photo} alt='profile_image' className='profile_image'/>
                        <h3>{messager_name}</h3>
                    </div>
                    {/* message area */}
                    <div className='message_message_area_container'>
                        {/* all messaages received and sent */}
                        {(messages.length>0)? 
                            messages.map(msg =>messageBox(msg.body, msg.author))
                            : 
                            ""
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