import './Login.css';

const Login = () => {
    return (
        <form className='MainLoginBox'>
        <div className='LoginDiv'>
            <p className='IgLogo'>Instagram</p>
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
        </form>
    );
}

export default Login;