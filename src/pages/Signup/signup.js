import  instaImg from '../../assets/images/instagram logo.PNG';
import  storeImg from '../../assets/images/stores.PNG';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css'

const Signup = ()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = async(e)=>{
        e.preventDefault()

        await axios.post("http://localhost:5000/user/signup",
        {"username": username , "email": email, "password": password},
        { headers: { 'Content-Type': 'application/json'} }
        ).then((response) => {
            // Code
            console.log(response)
            navigate('/Login')
        }).catch((error) => {
            // Code
            console.log(error)
            return error
        })  
    }

    return(
    <div className='signup_form_container'>
        <div className='inner_signup_container'>
        <div className='signupDiv'>
            <img src={instaImg} alt='instagram' id='IgLogo'/>
            <h3>Signup to see photos and videos from your friends</h3>
            <button
                type='submit'
                className='to_facebook_btn'
            > Login with Facebook</button>
            <h3 className='or'>OR</h3>
            <form onSubmit={(e)=>submitForm(e)}>
            <input 
                type='email'
                name='email'
                placeholder=' Email'
                onChange={(e)=>setEmail(e.target.value)}
                required
            ></input>
            <input 
                type='text'
                name='fullname'
                placeholder='Fullname'
                onChange={(e)=>setFullname(e.target.value)}
                required
            ></input>
            <input 
                type='text'
                name='username'
                placeholder='Username'
                onChange={(e)=>setUsername(e.target.value)}
                required
            ></input>
            <input 
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}
                required
            ></input>

            <h4>By signing up you agree to our Terms, Privacy Policy and Cookies Policy</h4>

            <button
                type='submit'
                className='LoginBtn'
            > Sign up</button>
            </form>
        </div>
        
        <div className='SignupBox'>
            <p>Already have an account? <a href='#' className='gotoSignup' onClick={()=>navigate('/Login')}> Log in</a></p>
        </div>

        <p style={{textAlign: "center"}}> Get the app.</p>
        <img src={storeImg} alt="store" className='stores'/>
        </div>
    </div>
        
    )
}

export default Signup