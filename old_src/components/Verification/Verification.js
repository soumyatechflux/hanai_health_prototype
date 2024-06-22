import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './verification.css';
import longlogoimg from './longlogo.PNG';
import small_logo from './small.PNG';

const Verification = () => {
  const [code, setCode] = useState('123456');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerification = (e) => {
    e.preventDefault();

    if (!code) {
      setError('Please enter the verification code');
    } else {
      setError('');
      // You can add actual verification logic here
      // For now, we just navigate to the /about page
      navigate('/about');
    }
  };

  return (
    <div>
      <div className="row verification">
        <div className="col-md-6 col-12 side-image">
          {/*-----------      image     -----------*/}
          <img src={longlogoimg} alt="Henai Health" className="logo-img" />
        </div>
        <div className="col-md-6 col-12 right">
          <header className="logo">
            <img src={small_logo} alt="Henai Health" />
          </header>
          <div className="input-box">
            <div className="content">
              <h3>Verify that it's you</h3>
              <p>We sent a verification code to the phone number<br />attached to your account</p>
            </div>
            <form onSubmit={handleVerification}>
              <div className="input-code">
                <label htmlFor="code">Verification code *</label> 
                <input
                  type="text"
                  className="input-verif"
                  id="code"
                  placeholder=""
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  autoComplete="off"
                />
                {error && <div className="error">{error}</div>}
              </div> 
              <div className="input-submit">
                <input type="submit" className="submit" value="Verify and login" />
              </div> 
            </form>
            <div className="info">
              <span>By logging into your account, you agree with our <a href="#">Term &amp; Condition</a> and <a href="#">Privacy Statement</a></span>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Verification;
