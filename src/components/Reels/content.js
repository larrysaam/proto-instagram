import Story from "../Story/story";
import loadingLogo from '../../assets/images/instagram logo.PNG'
import Reels from "../Reels/reels";
import useFetchPosts from "../../hooks/useFetchPosts";


const Content = () =>{

    const postURL ="http://localhost:8080/posts";
    const {response, error, loading} = useFetchPosts(postURL)

    return(
        <div id='ContentDiv'>
            <Story />
            {loading && <img src={loadingLogo} alt=""/>}
            {error && <p>Something went wrong</p>}
            {response && <Reels reelposts={response}/>}
        </div>
    );
}

export default Content;