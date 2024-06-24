import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./add.css";
import Main from "../main/Main";
import Graph from "../AddDataGraph/Graph";

const interests = [
  "Blood Pressure",
  "Cardio Fitness",
  "Diabetes",
  "Anxiety",
  "Back Pain",
  "Depression",
  "Cold",
  "Flu(Influenza)",
  "High Cholesterol",
  "Hepatitis",
  "Juvenile Diabetes",
  "Kidney Failure",
  "Asthma",
  "knee Pain",
  "Nicotine Withdrawal",
  "Obesity",
  "Sleep Disorder",
  "TB (Tuberculosis)",
  "Urinary Tract Information",
  "Vertigo",
  "Vitamin B12 Deficiency",
  "Lactose Intolerance",
  "Meningitis",
  "Other",
];

const Add = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([
    "Kidney Failure",
    "Back Pain",
    "Cold",
    "Asthma",
  ]);

  const toggleInterest = (interest) => {
    setShowGraph(true);
    setSelectedInterests((prevSelected) =>
      prevSelected.includes(interest)
        ? prevSelected.filter((item) => item !== interest)
        : [...prevSelected, interest]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loading");
    setShowGraph(true); // Show graph after navigation
  };

  const [showGraph, setShowGraph] = useState(false);

  return (
    <>
      <Main />
      <div style={{ backgroundColor: "#eaeaea" }}>
        <section className="content py-3 pe-5">
          <header className="header-add">Add Data</header>

          {!showGraph && (
            <div
              className="col-11 grid-margin"
              style={{
                margin: "0 auto",
                height:"73vh"
              }}
            >
              <div className="">
                <div className="card-body">
                  <form className="form-sample" onSubmit={handleSubmit}>
                    <div className="main-add">
                      <div className="row">
                        {interests.map((interest, index) => (
                          <div className="col-6 col-md-3" key={index}>
                            <button
                              type="button"
                              className={`btn-select-mul ${
                                selectedInterests.includes(interest)
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() => toggleInterest(interest)}
                            >
                              {interest}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {selectedInterests.length > 0 && showGraph && <Graph setShowGraph={setShowGraph} />}
    </>
  );
};

export default Add;
