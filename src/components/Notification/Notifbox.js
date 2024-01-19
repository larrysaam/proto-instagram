import './notif.css'
import profileimg from '../../assets/images/nasa.jpg'


const Notifbox =()=>{

    return(
        <ul className='notif-list'>
            <li >
                <div className="Notif-Msg-Box">
                    <img src={profileimg} alt="" id="user-img"/>
                    <p className='notif-messages'><b>Larrien</b> liked your posts 3 min ago</p>
                    <button>Follow</button>
                </div>
            </li>
        </ul>
    )
}

export default Notifbox