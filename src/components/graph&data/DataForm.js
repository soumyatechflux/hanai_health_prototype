import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./data-form.css";
import { addSugarLevelAPI } from "../../api";
import { useNavigate } from "react-router-dom";

const DataForm = ({ setShowGraph }) => {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    before_meal: "",
    after_meal: "",
  });

  const storeSugarLevel = async () => {
    try {
      const response = await addSugarLevelAPI({
        disease_id: 1,
        date: formData.date,
        time: formData.time,
        before_meal: formData.before_meal,
        after_meal: formData.after_meal,
      });
      console.log(response);
    } catch (err) {
      console.error("Error storing sugar level:", err);
    }
  };

  useEffect(() => {
    const ctx = document.getElementById("chart3").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Series 1",
            data: [151, 90, 253, 189, 314, 250, 200],
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            borderColor: "rgba(255, 0, 0, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    storeSugarLevel();
    setShowGraph(false);
    navigate("/home");
  };

  return (
    <div className="row row-graph">
      <div className="col-md-7 col-12 graph">
        <div className="cell cell-graph">
          <canvas id="chart3"></canvas>
        </div>
      </div>
      <div className="col-md-5 col-11 data-form-container">
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
            />
            <label htmlFor="time" className="py-2">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="input-field-data time input py-1"
            />
            <label htmlFor="before_meal" className="py-2">
              Before Meal
            </label>
            <input
              type="text"
              name="before_meal"
              value={formData.before_meal}
              onChange={handleChange}
              className="input-field-data input py-1"
            />
            <label htmlFor="after_meal" className="py-2">
              After Meal
            </label>
            <input
              type="text"
              name="after_meal"
              value={formData.after_meal}
              onChange={handleChange}
              className="input-field-data input py-1"
            />
            <button
              type="submit"
              className="data-submit-btn"
              onClick={handleSubmit}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
