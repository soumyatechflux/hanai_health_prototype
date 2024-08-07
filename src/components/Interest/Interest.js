import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./interest.css";
import { getAllDiseasesAPI, selectDiseaseAPI, updateSelectedInterestsAPI } from "../../api";
import { Spinner } from "react-bootstrap";

const Interest = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [diseases, setDiseases] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleGetDiseases = async () => {
    setLoading(true);
    try {
      const response = await getAllDiseasesAPI();
      // console.log(response.data.data.new_array); // Log the whole response to inspect its structure
      const diseases = response.data.data.new_array;
      setDiseases(diseases);

      // Set the selected interests based on is_selected: true
      const initialSelectedInterests = diseases.filter(
        (disease) => disease.is_selected
      );
      console.log(initialSelectedInterests)
      setSelectedInterests(initialSelectedInterests);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetDiseases();
  }, []);

  const toggleInterest = (interest) => {
    setSelectedInterests((prevSelected) =>
      prevSelected.some((item) => item.id === interest.id)
        ? prevSelected.filter((item) => item.id !== interest.id)
        : [...prevSelected, interest]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log();
    try {
      const newvalue = {
        "selectedInterests": makeProperSendFormat(selectedInterests),
      }

      await selectDiseaseAPI(newvalue);
      navigate("/loading");
    } catch (error) {
      console.error(error);
    }
  };

  const makeProperSendFormat = (datas) => {
    const newArr = [];
    for (let data of datas) {
      newArr.push(data.id);
    }
    return newArr;
  }
  // console.log(selectedInterests);
  return (
    <div>
      <section className="content">
        <header className="header-interest my-4 text-center">
          Choose your Interest
        </header>

        {loading && (
          <div className="d-flex justify-content-center mt-3">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}

        <div className="col-12 grid-margin mx-auto">
          <form className="interest-form-sample" onSubmit={handleSubmit}>
            <div className="interest-card-body">
              <div className="main-add">
                <div className="row">
                  {diseases.map((interest, index) => (
                    <div className="col-6 col-md-3 mb-3" key={index}>
                      <button
                        type="button"
                        className={`btn-select-mul ${
                          selectedInterests.some(
                            (item) => item.id === interest.id
                          )
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => toggleInterest(interest)}
                      >
                        {interest.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="interest-submit-btn">
              <button type="submit" className="btn-start-interest nxt">
                Let's Start
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Interest;
