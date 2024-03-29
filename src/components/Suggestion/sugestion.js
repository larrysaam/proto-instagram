import './sugestion.css';

const Sugestion = ({profileImg, userName}) =>{

    var date =new Date().getFullYear();


    {/* _____________profile____________ */}
    const profile = 
            <div className="profile">
                <img src={profileImg} alt="" className="profileImg"/>
                <ul className="userNames" >
                    <li className="profileName"> larriensaams</li>
                    <li className="userName">Larrien saams</li>
                </ul>
                
                <button type="submit" id="switchBtn" onAction="SwitchAccount()">Switch</button>
            </div>

    

    {/*___________ footer__________ */}
    const footer = 
            <div className='sugFooter'>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Language</a></li>
                    <li><a href="#">Meta Verified</a></li>
                </ul>

                <p> &copy; {date} INSTAGRAM FROM SAAM TECH</p>
            </div>



    return(
        <div id="sugestionBox">

            {/* _____________profile____________ */}
            {profile}

            {/* ______________suggestions______________ */}
            <div className="sugestionDiv">
                <ul>
                    <li style={{listStyle:"none"}}>
                        <p style={{float:"left", color:"white"}}>Suggested for you</p>
                        <button type="submit" id="seeAll" onAction="SeeAllSug()">See ALL</button>
                    </li>

                    <li className="sugestion">
                        <img src={profileImg} alt="" className="sugProfileImg"/>
                        <ul className="userNames">
                            <li className="profileName"> larriensaams</li>
                            <li className="userName">Instagram recommended</li>
                        </ul>
                            <button type="submit" id="followBtn" value={userName} onAction="FollowAccount(e)">Follow</button>
                    </li>

                    <li className="sugestion">
                        <img src={profileImg} alt="" className="sugProfileImg"/>
                        <ul className="userNames">
                            <li className="profileName"> larriensaams</li>
                            <li className="userName">Instagram recommended</li>
                        </ul>
                        <form>
                            <button type="submit" id="followBtn" value={userName} onAction="FollowAccount(e)">Follow</button>
                        </form>
                    </li>


                    {/*___________ footer__________ */}
                    {footer}

                </ul>
            </div>
        </div>
    )
}

export default Sugestion;