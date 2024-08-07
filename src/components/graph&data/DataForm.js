import React, { useState } from "react";
import "./data-form.css";
import { addSugarLevelAPI } from "../../api";
import Graph from "../Home/Graph";

const DataForm = ({ setShowGraph }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    before_meal: "",
    after_meal: "",
    medication: "",
  });
  const [graphData, setGraphData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Before Meal",
        data: [151, 90, 253, 189, 314, 250, 200], // Example initial data
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "After Meal",
        data: [120, 85, 200, 160, 280, 230, 180], // Example initial data
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  });

  const storeSugarLevel = async () => {
    try {
      const response = await addSugarLevelAPI({
        disease_id: 1,
        date: formData.date,
        time: formData.time,
        before_meal: formData.before_meal,
        after_meal: formData.after_meal,
        medication: formData.medication,
      });
      console.log(response);
    } catch (err) {
      console.error("Error storing sugar level:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
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
    storeSugarLevel();

    // Assuming you add new data to the graph
    const newGraphData = {
      ...graphData,
      labels: [...graphData.labels, formData.date], // Add the date as the label
      datasets: [
        {
          ...graphData.datasets[0],
          data: [
            ...graphData.datasets[0].data,
            parseInt(formData.before_meal, 10), // Ensure data is in the correct format
          ],
        },
        {
          ...graphData.datasets[1],
          data: [
            ...graphData.datasets[1].data,
            parseInt(formData.after_meal, 10), // Ensure data is in the correct format
          ],
        },
      ],
    };

    setGraphData(newGraphData);
    setFormData({ date: "", time: "", before_meal: "", after_meal: "" });
  };

  return (
    <div className="row row-graph">
      <div className="col-md-7 col-12 graph">
        <div className="cell">
          <Graph id="chart1" type="bar" data={graphData} />
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
              max={getCurrentDate()}
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
              required
              value={formData.time}
              onChange={handleChange}
              className="input-field-data time input py-1"
            />
            <label htmlFor="before_meal" className="py-2">
              Before Meal
            </label>
            <input
              type="number"
              min={40}
              max={400}
              name="before_meal"
              value={formData.before_meal}
              onChange={handleChange}
              className="input-field-data input py-1"
            />
            <label htmlFor="after_meal" className="py-2">
              After Meal
            </label>
            <input
              type="number"
              min={40}
              max={400}
              name="after_meal"
              value={formData.after_meal}
              onChange={handleChange}
              className="input-field-data input py-1"
            />
            <label htmlFor="medication" className="py-2">
              Medication
            </label>
            <input
              type="text"
              name="medication"
              value={formData.medication}
              onChange={handleChange}
              required
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
