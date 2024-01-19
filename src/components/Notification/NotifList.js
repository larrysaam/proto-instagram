import './notif.css'
import Notifbox from './Notifbox'

const NotifList =()=>{

    return(
        <div className="notif-main-container">
            <div className="notif-header">
                <h3>Notifications</h3>
                <h4>New</h4>
            </div>
            <div className="Notif-list-box">
                <Notifbox />
            </div>
        </div>
    )
}

export default NotifList