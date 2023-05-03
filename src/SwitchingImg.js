import './Login.css';
import sideImg from './side image.PNG';

const Image =() => {

    return(
        <div className='sideImg'>
            <img src={sideImg} alt='insta images' className='Img' />
        </div>
    );
}

export default Image;