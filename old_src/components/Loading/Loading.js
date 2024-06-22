import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './loading.css';
import loadingimg from './Loading.svg';
import Main from '../main/Main';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <>
      <Main />
      <div className="loading">
        <div> 
          <img src={loadingimg} alt="loading" />
        </div>
        <div>
          <p>Please Wait Fetching Match Data according to your Profile.</p>
        </div>
      </div>
    </>
  );
}

export default Loading;
