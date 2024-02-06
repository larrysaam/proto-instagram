import igIcon from '../../assets/images/ig logo.png'
import './loading.css'


const LoadingPage = ()=>{

    // instagram logo for loading 
    return(
        <div className="main_loading_page">
            <img src={igIcon} alt="loading.."/>
        </div>
    )
}

export default LoadingPage