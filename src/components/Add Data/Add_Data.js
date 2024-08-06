import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./add_data.css";
import DataForm from "../graph&data/DataForm";
import MainPage from "../MainPage/MainPage";
import { getAllDiseasesAPI } from "../../api";

const Add_Data = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/loading");
    setShowGraph(true); // Show graph after navigation
  };

  const getAllDisease = async () => {
    try {
      setLoading(true);
      const response = await getAllDiseasesAPI();
      setDisease(response?.data?.data?.new_array);
      console.log(response?.data?.data?.new_array);
    } catch (err) {
      console.error("Error fetching disease:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllDisease();
  }, []);

  return (
    <>
      <MainPage />
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
                              interest.is_selected
                                ? "selected"
                                : ""
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
        {selectedInterests.length > 0 && showGraph && (
          <DataForm setShowGraph={setShowGraph} />
        )}
      </section>
    </>
  );
};

export default Add_Data;
