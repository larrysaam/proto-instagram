import MessageList from '../../components/Message/messageList';
import MessageBox from '../../components/Message/messageBox';
import NavigationBar from '../../components/Navigation/navigation';
import './message.css'

function Messages() {

  return(
        <div className='sideMessageBox'>
            <MessageList/>
            <MessageBox/>
        </div>
  )
}

export default Messages;
