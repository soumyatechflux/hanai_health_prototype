import React, { useState } from "react";
import longlogo from "./longlogo.PNG";
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
 
  // Function to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!email) {
  //     setEmailError('Email is required');
  //   } else {
  //     setEmailError('');
  //   }
    
  //   if (!password) {
  //     setPasswordError('Password is required');
  //   } else {
  //     setPasswordError('');
  //   }

  //   {
  //     console.log(email, password, emailError, passwordError);
  //   }
  //   setEmail("");
  //   setPassword("");
  // };

  const [email, setEmail] = useState('hanaihealth@123.com');
  const [password, setPassword] = useState('hanaihealth@123.com');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else {
      setEmailError('');
      console.log(email);
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
      console.log(password);
    }

    if (valid) {
      navigate('/verification');
    }
  };
  
  return (
    <div>
      <div className="container-fluid">
        
      <div className="row " style={{height:'100vh'}}>
        <div className=" col-12 col-md-6 left-side">
          <img src={longlogo} alt="Henai Health" className="logo-img" />
        </div>
        <div className=" col-12 col-md-6 right-side">
          <div className="form-field">
            <header className="login-header">Login</header>
            <form onSubmit={handleLogin}>
              <div className="input-field">
                <input
                  type="email"
                  className="input-mail"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
                
                 {emailError && <div className="error">{emailError}</div>}
                <input
                  type="password"
                  className="input-pass"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
                 {passwordError && <div className="error">{passwordError}</div>}
              </div>
           
              <div className="para">
                <span>
                  <a href="/forgot_password">Forgot Password</a>
                </span>
              </div>
              <div className="input-submit">
                <button type="submit" className="submit" value="Login">Login</button>
              </div>
              <div className="login-sing">
                <span>
                  Don't have an account? <a href="/signup">Sign Up</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
