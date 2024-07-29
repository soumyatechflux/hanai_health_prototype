import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Orders from './components/Orders/Orders'
import Labreports from "./components/labreports/Labreports";
import LoginComponant from "./components/login/LoginComponant";
import Verification from "./components/verification/Verification";
import Interest from "./components/interest/Interest";
import Loading from "./components/Loading/Loading";
import AddData from "./components/Add Data/Add_Data";
import AboutCustomer from "./components/About_Customer/AboutCustomer";
import Home from "./components/Home/Home";
import Ruler from "./components/Ruler/Ruler";
import Profile from "./components/Profile/Profile";
import SignUp from './components/SignUp/SignUp'
import ForgotPassword from "./components/login/ForgotPassword/ForgotPassword";
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<LoginComponant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/labreports" element={<Labreports />} />
          <Route path="/verification" element={<Verification />} />
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
      </div>
    </Router>
  );
}

export default App;
