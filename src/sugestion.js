import './sugestion.css';

const Sugestion = ({profileImg, userName}) =>{

    var date = Date.now();

    return(
        <div id="sugestionBox">
            <div className="profile">
                <img src={profileImg} alt="" className="profileImg"/>
                <ul className="userNames" >
                    <li className="profileName"> larriensaams</li>
                    <li className="userName">Larrien saams</li>
                </ul>
                <form>
                    <button type="submit" id="switchBtn">Switch</button>
                </form>
            </div>
            <div className="sugestionDiv">
                <ul>
                    <li style={{listStyle:"none"}}>
                        <p style={{float:"left", color:"white"}}>Suggested for you</p>
                        <form>
                            <button type="submit" id="seeAll">See ALL</button>
                        </form>
                    </li>
                    <li className="sugestion">
                        <img src={profileImg} alt="" className="sugProfileImg"/>
                        <ul className="userNames">
                            <li className="profileName"> larriensaams</li>
                            <li className="userName">Instagram recommended</li>
                        </ul>
                        <form>
                            <button type="submit" id="followBtn" value={userName}>Follow</button>
                        </form>
                    </li>
                    <li className="sugestion">
                        <img src={profileImg} alt="" className="sugProfileImg"/>
                        <ul className="userNames">
                            <li className="profileName"> larriensaams</li>
                            <li className="userName">Instagram recommended</li>
                        </ul>
                        <form>
                            <button type="submit" id="followBtn" value={userName}>Follow</button>
                        </form>
                    </li>
                                {/* footer */}
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
                        <p> &cpy; {date} INSTAGRAM FROM META</p>
                </div>
                </ul>
            </div>
        </div>
    )
}

export default Sugestion;