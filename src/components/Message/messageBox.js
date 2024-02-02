import './message.css'
import messagelogo from '../../assets/images/ig message icon.PNG'
import useFetchMessages from '../../hooks/useFetchMessages'
import checkAccessToken from '../../utils/checkAccessToken'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const MessageBox = ({openMessage, initiator, receptor})=>{

    const url = "http://localhost:5000/message/"
    const {response, loading, error} = useFetchMessages(url, receptor, initiator )
    const [messages, setMessages] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        if(!loading){
            const verifyAccess = checkAccessToken(response)
            console.log(response.data)
            if(verifyAccess){
                navigate('/Login')
            }else{
                setMessages(response.data)
            }
        }else{
            
        }
       
    },[response])



    /**small message text box
     * 
     * If author id ===  myid , 
     * Then message text will float to the rigth (sender) 
     * Else it floats to the left  (receiver)
    */
    const messageBox = (text, author)=>{
        const myId = localStorage.getItem("user_id")
        return(
            <div className={(author === myId)? 'message_send_div': "message_receive_div"}>
                <p id='message_text'>{text}</p>
            </div>
        )
    }

 
    

    return(
        <div className="mainmessagebox">
            {(openMessage)?

                <div className='message_text_box_area'>
                   {/* all messaages received and sent */}
                   {(messages.length>0)? 
                        messages.map(msg =>messageBox(msg.body, msg.author))
                            : 
                        ""
                    }
                   {/* input message field */}
                   <div className='message_bottom_input_container'>
                        <input
                            type='text'
                            name='message'
                            placeholder='Write something...'
                            id='input_textarea_message'
                        />
                        <button id='send_message_btn'>Send</button>
                    </div>
                </div>
            :
            <div className="centermessage">
                <img src={messagelogo} alt='messages' id='igmessagelogo'/>
                <h2>Your messages</h2>
                <p>send private photos and messages to a friend or group</p>
                <button>send message</button>
            </div>
            }
        </div>
        
    )
}

export default MessageBox