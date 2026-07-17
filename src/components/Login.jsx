import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

var Login = ({ setIsLoggedIn, isLoggedIn }) => {
  var navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const USER_EMAIL = "admin@gmail.com";
  const USER_PASSWORD = "123456";

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/about", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === USER_EMAIL && password === USER_PASSWORD) {
      setIsLoggedIn(true);
      navigate("/about");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
        <hr />
        <p className="demo">
            welcome to Login Page
        </p>
        <p>Dont have a login ! <span><a href="/signup">Sign up</a></span></p>
      </form>
    </div>
  );
};

export default Login;