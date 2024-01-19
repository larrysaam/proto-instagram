import './message.css'
import messagelogo from '../../assets/images/ig message icon.PNG'

const MessageBox = ()=>{
    return(
        <div className="mainmessagebox">
            <div className="centermessage">
                <img src={messagelogo} alt='messages' id='igmessagelogo'/>
                <h2>Your messages</h2>
                <p>send private photos and messages to a friend or group</p>
                <button>send message</button>
            </div>
        </div>
    )
}

export default MessageBox