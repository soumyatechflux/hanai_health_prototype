import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

import InternetChecker from "./components/Internet Checker/Internet Checker";
import Cart from "./components/cart/Cart";
import Orders from './components/Orders/Orders'
import LabreportsComponant from "./components/LabreportsComponant/LabreportsComponant";
import Login from "./components/login/Login";
import Verification from "./components/verification/Verification";
import Interest from "./components/Interest/Interest";
import Loading from "./components/Loading/Loading";
import AddData from "./components/Add Data/Add_Data";
import AboutCustomer from "./components/About_Customer/AboutCustomer";
import Home from "./components/Home/Home";
import Ruler from "./components/Ruler/Ruler";
import Profile from "./components/Profile/Profile";
import SignUp from './components/SignUp/SignUp'
import ForgotPassword from "./components/login/ForgotPassword/ForgotPassword";
import SignupOTPVerification from "./components/Signup otp verification/Verification";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const encryptedToken = localStorage.getItem("encryptedToken");

    if (isLoggedIn === "true" && encryptedToken) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };





  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);



  return (
    <>

      <div className="App">
        <BrowserRouter>
        
        <ScrollToTop />

        {isOffline && <InternetChecker />}


          <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/labreports" element={<LabreportsComponant />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/signup_verification" element={<SignupOTPVerification />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/ruler" element={<Ruler />} />
          <Route path="/about" element={<AboutCustomer />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/add_diseases" element={<AddData />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgot_password" element={<ForgotPassword/>}/>
          <Route path="/orders" element={<Orders/>}/>


          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
