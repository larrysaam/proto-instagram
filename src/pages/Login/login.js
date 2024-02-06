import './Login.css';
import  instaImg from '../../assets/images/instagram logo.PNG';
import  storeImg from '../../assets/images/stores.PNG';
import sideImage from '../../assets/images/side image.PNG'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';


const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    //useEffect
    useEffect(()=>{
 
    })


    //Login user function
    const submitLogin = async(e)=>{
        e.preventDefault()

        await axios.post("https://instagram-api-clone-0fcl.onrender.com/user/login",
        {"email": email , "password": password},
        { headers: { 'Content-Type': 'application/json'} }
        ).then((response) => {
            //store reaponse data in localstorage 
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.data.username)
            localStorage.setItem('user_id', response.data.data._id)
            //navigate to home page
            navigate('/')
        }).catch((error) => {
            (error.response.status === 401)?
                setError("Invalid Email or Password")
                :
                setError("")
            return error
        })  
    }


    return (
        <div className='login_page_div'>
            <div className='MainLoginBox'>
                <img src={sideImage} alt='side_image' id='login_side_image'/>
                <div className='login_form_container'>
                    <div className='LoginDiv'>
                        <img src={instaImg} alt='instagram' id='IgLogo'/>
                        <p id='error_text'>{error}</p>
                        <form onSubmit={(e)=>submitLogin(e)}>
                        <input 
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        ></input>
                        <input 
                            type='password'
                            placeholder='Password'
                            name='current_password'
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        ></input>
                        <button
                            type='submit'
                            className='LoginBtn'
                        > Log in</button>
                        </form>

                        <p className='or'>OR</p>
                        <a href='#' className='FacebookLink'>Log in with Facebook</a>
                        <a href='#' className='ForgotPassLink'>Forgot password?</a>
                    </div>
            
                    <div className='SignupBox'>
                        <p>Don't have an account? <a href='#' className='gotoSignup' onClick={()=>navigate('/Signup')}> Sign up</a></p>
                    </div>

                    <p style={{textAlign: "center"}}> Get the app.</p>
                    <img src={storeImg} alt="store" className='stores'/>
                </div>
            </div>
        </div>
    );
}

export default Login;