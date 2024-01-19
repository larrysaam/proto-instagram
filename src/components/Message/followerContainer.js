import './message.css'
import profileimg from '../../assets/images/nasa.jpg'


const FollowerContainer =()=>{

    return(
        <ul className='followerlist'>
            <li >
                <div className="followercontainer">
                    <img src={profileimg} alt="" id="followerimg"/>
                    <ul>
                        <li>Larrien</li>
                        <li className='messagestatus'>Active now</li>
                    </ul>
                </div>
            </li>
            <li >
                <div className="followercontainer">
                    <img src={profileimg} alt="" id="followerimg"/>
                    <ul>
                        <li>Larrien</li>
                        <li className='messagestatus'>Active now</li>
                    </ul>
                </div>
            </li>
            <li >
                <div className="followercontainer">
                    <img src={profileimg} alt="" id="followerimg"/>
                    <ul>
                        <li>Larrien</li>
                        <li className='messagestatus'>Active now</li>
                    </ul>
                </div>
            </li>
            <li >
                <div className="followercontainer">
                    <img src={profileimg} alt="" id="followerimg"/>
                    <ul>
                        <li>Larrien</li>
                        <li className='messagestatus'>Active now</li>
                    </ul>
                </div>
            </li>

            
        </ul>
    )
}

export default FollowerContainer