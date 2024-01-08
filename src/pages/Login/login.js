import 'Login.css';
import  instaImg from '../../assets/images/instagram logo.PNG';
import  storeImg from '../../assets/images/stores.PNG';

const Login = () => {
    return (
        <div className='MainLoginBox'>
            <div className='LoginDiv'>
                <img src={instaImg} alt='instagram' id='IgLogo'/>
                <input 
                    type='text'
                    placeholder='Phone number, username, or email'
                    required
                ></input>
                <input 
                    type='password'
                    placeholder='Password'
                    required
                ></input>
                <button
                    type='submit'
                    className='LoginBtn'
                > Log in</button>

                <p className='or'>OR</p>
                <a href='#' className='FacebookLink'>Log in with Facebook</a>
                <a href='#' className='ForgotPassLink'>Forgot password?</a>
            </div>
            
            <div className='SignupBox'>
                <p>Don't have an account? <a href='#' className='gotoSignup'> Sign up</a></p>
            </div>

            <p style={{textAlign: "center"}}> Get the app.</p>
            <img src={storeImg} alt="store" className='stores'/>
        </div>
    );
}

export default Login;