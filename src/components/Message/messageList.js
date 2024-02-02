import './message.css'
import FollowerContainer from './followerContainer'

const MessageList =({setOpenMessage, setInitiator, setReceptor})=>{


    return(
        <div className="listcontainer">
            <div className="header">
                <ul className="headerinfo">
                    <li><h3>larriensaams</h3></li>
                    <li><h4>Edit</h4></li>
                </ul>
                <ul className="secondheader">
                    <li><h4>Messages</h4></li>
                    <li><button>Requests</button></li>
                </ul>
                
            </div>
            <div className="list">
                    <FollowerContainer  setOpenMessage={setOpenMessage} setInitiator={setInitiator} setReceptor={setReceptor}/>
            </div>
        </div>
    )
}

export default MessageList