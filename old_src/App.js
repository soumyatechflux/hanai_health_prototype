import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Labreports from "./components/labreports/Labreports";
import Login from "./components/Login/Login";
import Verification from "./components/Verification/Verification";
import Interest from "./components/Interest/Interest";
import Loading from "./components/Loading/Loading";
import Add from "./components/AddData/Add";
import About from "./components/AboutForm/About";
import AddDataGraph from "./components/AddDataGraph/AddDataGraph";
import Home from "./components/Home/Home";
import Ruler from "./components/Ruler/Ruler";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/labreports" element={<Labreports />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/ruler" element={<Ruler />} />
          <Route path="/about" element={<About />} />
          <Route path="/adddatatograph" element={<AddDataGraph />} />
          <Route path="/intrest" element={<Interest />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/add_diseases" element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
