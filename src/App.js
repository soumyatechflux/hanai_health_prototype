import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

import InternetChecker from "./components/Internet Checker/Internet Checker";
import Cart from "./components/cart/Cart";
import Orders from "./components/Orders/Orders";
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
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/login/ForgotPassword/ForgotPassword";
import SignupOTPVerification from "./components/Signup otp verification/Verification";
import Success from "./components/cart/Success";
import Cancel from "./components/cart/Cancel";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isUserLoggedIn");
    const encryptedToken = localStorage.getItem(
      "encryptedTokenForUserOfHanaiHealth"
    );

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

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />

          {isOffline && <InternetChecker />}

          <Routes>
            {/* Redirect logged-in users from these routes */}
            {loggedIn && (
              <>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/verification" element={<Navigate to="/home" />} />
                <Route
                  path="/signup_verification"
                  element={<Navigate to="/signup_verification" />}
                />
              </>
            )}

            {/* Regular routes */}
            <Route
              path="/cart"
              element={
                loggedIn ? (
                  <Cart onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/home"
              element={
                loggedIn ? (
                  <Home onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/labreports"
              element={
                loggedIn ? (
                  <LabreportsComponant onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/interest"
              element={
                loggedIn ? (
                  <Interest onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/ruler"
              element={
                loggedIn ? (
                  <Ruler onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/about"
              element={
                loggedIn ? (
                  <AboutCustomer onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/loading"
              element={
                loggedIn ? (
                  <Loading onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/add_diseases"
              element={
                loggedIn ? (
                  <AddData onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/profile"
              element={
                loggedIn ? (
                  <Profile onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <SignUp onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/forgot_password"
              element={
                loggedIn ? (
                  <ForgotPassword onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/orders"
              element={
                loggedIn ? (
                  <Orders onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/success"
              element={
                loggedIn ? (
                  <Success onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/cancel"
              element={
                loggedIn ? (
                  <Cancel onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            <Route
              path="/"
              element={<Login onLogin={handleLogin} onLogout={handleLogout} />}
            />
            <Route path="/verification" element={<Verification onLogin={handleLogin}  />} />
            <Route
              path="/signup_verification"
              element={<SignupOTPVerification onLogin={handleLogin}  />}
            />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
