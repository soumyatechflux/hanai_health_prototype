import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Set_A_Goal.css";
import DataForm from "./graph&data_set_a_goal/DataForm";
import MainPage from "../MainPage/MainPage";

const SetUpAGoal = () => {
  const navigate = useNavigate();
  const [showGraph, setShowGraph] = useState(true);

  const handleBackToHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <MainPage />
      <section className="content-section add-content-section py-3 pe-5">
        <header className="header-add-data mb-2">Set A Goal</header>

        {showGraph && <DataForm setShowGraph={setShowGraph} />}

        <div className="row mt-5">
          <div className="col-12 col-md-12 d-flex justify-content-center">
            <button className="lab-btn" onClick={handleBackToHome}>
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SetUpAGoal;
