import React, { useState } from "react";
import "./data-form.css";
import { setAGoalAPI } from "../../../api";
import Graph from "./Graph";
import { useNavigate } from "react-router-dom";

const DataForm = () => {
  const navigate = useNavigate();
  const [renders, setRenders] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    footsteps: "",
  });

  const storeSugarLevel = async () => {
    try {
      setRenders(false);
      const response = await setAGoalAPI({
        date: formData.date,
        footsteps: formData.footsteps,
      });

      if (response?.data?.response === true) {
        setRenders(true);
      }
    } catch (err) {
      console.error("Error saving goal:", err);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.target.value });
  };

  const handleFootStepsChange = (e) => {
    setFormData({ ...formData, footsteps: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storeSugarLevel();

    setFormData({
      date: "",
      footsteps: "",
    });
  };

  return (
    <div className="row row-graph">
      <div className="col-md-7 col-12 graph">
        <div className="cell">
          {!renders && <Graph id="chart2" type="line" />}
          {renders && <Graph id="chart2" type="line" />}
        </div>
      </div>
      <div className="col-md-5 col-12 data-form-container">
        <div className="data-form">
          <form className="data" onSubmit={handleSubmit}>
            <label htmlFor="date" className="py-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              className="input-field-data date input py-1"
              max={getCurrentDate()}
            />

            <label htmlFor="footsteps" className="py-2">
              Foot Steps Count
            </label>
            <input
              type="number"
              // min={40}
              // step={0.2}
              // max={400}
              name="footsteps"
              value={formData.footsteps}
              onChange={handleFootStepsChange}
              className="input-field-data input py-1"
            />

            <button type="submit" className="data-submit-btn">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
