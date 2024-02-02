import MessageList from '../../components/Message/messageList';
import MessageBox from '../../components/Message/messageBox';
import './message.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Messages() {

  const navigate = useNavigate()
  const [openMessage, setOpenMessage] = useState(false)
  const [initiator, setInitiator] = useState('')
  const [receptor, setReceptor] = useState('')


  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/Login')
    }
  })


  return(
        <div className='sideMessageBox'>
            <MessageList setOpenMessage={setOpenMessage} setInitiator={setInitiator} setReceptor={setReceptor}/>
            <MessageBox openMessage={openMessage} initiator={initiator} receptor={receptor}/>
        </div>
  )
}

export default Messages;
