import './popup.css'
import icon from '../../assets/images/play.jpg'

const CreatePopup = ({setShowPopup})=>{

    const getImage =()=>{

    }

    return(
        <div className='create-popup-container'>
            <button className='close-create-popup-btn' onClick={()=>setShowPopup(false)}>X</button>
            <div className='inner-create-container'>
                <div className='inner-create-header'>
                    <h3>Create new post</h3>
                    <hr></hr>
                </div>
                <div className='inner-create-main-box'>
                    <div>
                    <img src={icon} alt='media' id='create-media-icon'/>
                    <h2>Drag photos and videos here</h2>
                    <button onClick={()=>getImage()}>Select from computer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePopup