import "../css/SignUp.css";
const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Create Account</h2>
                <p>Sign up to get started</p>

                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>

                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>

                <p className="login-text">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;