import './content.css'

const ExploreContent=({imagesrc, imgDescription})=>{

    return(
        <div className='img-expore-container'>
            <img src={imagesrc} alt={imgDescription} id='explore-img-content'/>
        </div>
    )

}

export default ExploreContent