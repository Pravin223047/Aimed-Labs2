import React, { useState } from "react";
import "./App.css";
import Login from "./Images/login.png";
import Register from "./Images/register.png";

const LoginPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="signin-signup">
        <form
          action=""
          className={`sign-in-form ${isSignUpMode ? "hidden" : ""}`}
        >
          <h2 className="title">Login</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
            <i className="fas fa-eye-slash eye"></i>
          </div>
          <div className="operator">
            <div className="remember">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="passs">
              Change Password
            </a>
          </div>
          <div className="operator">
            <div className="remember">
              <input type="checkbox" name="passs" id="passs" />
              <label htmlFor="passs">
                Agree to
                <a href="#" className="passs">
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>
          <input type="submit" value="Login" className="btn" />
          <p className="social-text">Or Register with a social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="account-text">
            Don't have an account?
            <a href="#" id="sign-up-btn2" onClick={toggleMode}>
              Register here
            </a>
          </p>
        </form>
        <form
          action=""
          className={`sign-up-form ${isSignUpMode ? "" : "hidden"}`}
        >
          <h2 className="title">Register</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
            <i className="fas fa-eye-slash eye"></i>
          </div>
          <input type="submit" value="Sign up" className="btn" />
          <p className="social-text">Or Login with a social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="account-text">
            Already have an account?
            <a href="#" id="sign-in-btn2" onClick={toggleMode}>
              Login here
            </a>
          </p>
        </form>
      </div>
      <div className="panels-container">
        <div
          className={`panel left-panel ${isSignUpMode ? "sign-up-mode2" : ""}`}
        >
          <div className="content">
            <h3>Already Registered?</h3>
            <p>Click here to Login...</p>
            <button className="btn" id="sign-in-btn" onClick={toggleMode}>
              Login
            </button>
          </div>
          <img src={Login} alt="" className="image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>New User?</h3>
            <p>Click here to Register...</p>
            <button className="btn" id="sign-up-btn" onClick={toggleMode}>
              Register
            </button>
          </div>
          <img src={Register} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
