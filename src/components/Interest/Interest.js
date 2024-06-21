import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./interest.css";

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

const Interest = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([
    "Kidney Failure",
    "Back Pain",
    "Cold",
    "Asthma",
  ]);

  const toggleInterest = (interest) => {
    setSelectedInterests((prevSelected) =>
      prevSelected.includes(interest)
        ? prevSelected.filter((item) => item !== interest)
        : [...prevSelected, interest]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loading");
  };

  return (
    <div>
      <section className="content py-3 pe-5">
        <header style={{ marginTop: "20px", marginBottom: "20px" }}>
          Choose your Interest
        </header>
        <div
          className="col-12 grid-margin"
          style={{
            margin: "0 auto",
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
                <div className="margin-btn">
                  <button type="submit" className="btn-start nxt">
                    Let's Start
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interest;
