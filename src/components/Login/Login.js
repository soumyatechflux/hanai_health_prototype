import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import longlogo from './longlogo.PNG';

const Login = () => {
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
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      navigate('/verification');
    }
  };

  return (
    <div>
      <section>
        <div className="row login">
          <div className="col-md-6 col-12 side-image">
            {/*-----------      image     -----------*/}
            <img src={longlogo} alt="Henai Health" className="logo-img" />
          </div>
          <div className="col-md-6 col-12 right">
            <div className="input-box">
              <header>Login</header>
              <form onSubmit={handleLogin}>
                <div className="input-field">
                  <input
                    type="text"
                    className="input"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                  />
                  {emailError && <div className="error">{emailError}</div>}
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="input-pass"
                    id="pass"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {passwordError && <div className="error">{passwordError}</div>}
                </div>
                <div className="p">
                  <span><a href="#">Forgot Password</a></span>
                </div>
                <div className="input-field-submit">
                  <input type="submit" className="submit" value="Login" />
                </div>
              </form>
              <div className="signin">
                <span>Don't have an account? <a href="#">Sign Up</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
