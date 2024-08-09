import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./add_data.css";
import DataForm from "../graph&data/DataForm";
import MainPage from "../MainPage/MainPage";
import { getAllDiseasesAPI } from "../../api";

const Add_Data = ({onLogout}) => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showGraph, setShowGraph] = useState(false);
  const [disease, setDisease] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (interest) => {
    setShowGraph(true);
    setSelectedInterests((prevSelected) =>
      prevSelected.includes(interest)
        ? prevSelected.filter((item) => item !== interest)
        : [...prevSelected, interest]
    );
  };

  const getAllDisease = async () => {
    try {
      setLoading(true);
      const response = await getAllDiseasesAPI();
      setDisease(response?.data?.data?.new_array);
    } catch (err) {
      console.error("Error fetching disease:", err);
    } finally {
      setLoading(false);
      setShowGraph(true); // Show graph immediately after fetching diseases
    }
  };

  useEffect(() => {
    getAllDisease();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loading");
    setShowGraph(true); // Show graph after navigation
  };

  return (
    <>
       <MainPage onLogout={onLogout}/>
      <section className="content-section add-content-section py-3 pe-5">
        <header className="header-add-data">Add Data</header>

        {!showGraph && (
          <div className="col-12 grid-margin mx-auto">
            <div className="">
              <div className="card-body">
                <form className="form-sample" onSubmit={handleSubmit}>
                  <div className="main-add">
                    <div className="row">
                      {disease.map((interest, index) => (
                        <div className="col-6 col-md-3" key={index}>
                          <button
                            type="button"
                            className={`btn-select-mul ${
                              interest.is_selected ? "selected" : ""
                            }`}
                            onClick={() => toggleInterest(interest.name)}
                          >
                            {interest.name}
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
        {showGraph && (
          <DataForm setShowGraph={setShowGraph} />
        )}
      </section>
    </>
  );
};

export default Add_Data;
