import '../reels.css'

const SideCommentImage = ({post_image})=>{


    return(
        <div className="inner-popup-image-container">
            <img src={"http://localhost:5000/"+ post_image} alt="image" id="popup-comment-img"/>
        </div>
    )
}

export default SideCommentImage