import ExploreContent from "../../components/Explore/exploreContent";
import falcon from '../../assets/images/falcon_rocket.jpg'
import './explore.css'

const Explore=()=>{

    let content_decription = [
        "image of a rocket being launghed to space",
        "SpaceX falcon rocket liftoff",
        "cap canavera rocket liftoff live"
    ]
    
    return(
        <div className="explore-main-box">
            <div>
                {content_decription &&
                content_decription.map((desc)=>{
                    return(
                        <ExploreContent imagesrc={falcon} imgDescription={desc}/>
                    )
                }
                )
                }
            </div>
        </div>
    )
}

export default Explore