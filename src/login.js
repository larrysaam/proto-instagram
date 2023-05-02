const login = () => {
    return (
        <div>
        <div className="LoginDiv">
            <label className="IgLogo">Instagram</label>
            <input 
                type="text"
                required
            ></input>
            <input 
                type="password"
                required
            ></input>
            <button
                type="submit"
                className="LoginBtn"
            > Log in</button>

            <p>OR</p>
            <a href="#" className="FacebookLink">Log in with Facebook</a>
            <a href="#" className="ForgotPassLink">Forgot password?</a>
        </div>
        <div className="SignupBox">
            <p>Don't have an account? <a href="#" className="gotoSignup"> Sign up</a></p>
        </div>
        </div>
    );
}

export default login;