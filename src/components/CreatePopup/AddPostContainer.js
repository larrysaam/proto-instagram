import './popup.css'
import icon from '../../assets/images/play.jpg'


const AddPost =({handleFileChange})=>{

    return(
        <div>
            <img src={icon} alt='media' id='create-media-icon'/>
            <h2>Drag photos and videos here</h2>
            <form >
                <label className='file_btn' for="input_post">Select from computer</label>
                <input name='post_image' id='input_post' type='file' onChange={(e)=>handleFileChange(e)} />
            </form>
        </div> 
    )
}

export default AddPost