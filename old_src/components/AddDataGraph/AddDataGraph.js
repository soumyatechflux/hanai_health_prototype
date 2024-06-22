import React, { useState } from 'react';
import './AddDataGraph.css';

const AddDataGraph = ({ setShowGraph }) => {
  const [formData, setFormData] = useState({
    date: '2024-01-01',
    time: '16:38',
    bloodGlucose: 'O+',
    mealTime: '1 PM',
    medication: 'Supplement Supports',
  });

  const [buttonStyle, setButtonStyle] = useState({
    width: "20%",
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    textAlign: "center",
    display: "block",
    margin: "0 auto",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  });

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

  const handleHover = () => {
    setButtonStyle({
      ...buttonStyle,
      backgroundColor: "gray", 
      color: "white",
    });
  };

  const handleLeave = () => {
    setButtonStyle({
      ...buttonStyle,
      backgroundColor: "red",
      color: "white",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    setShowGraph(false); // Close the graph after form submission
  };

  return (
    <div className="data-form">
      <form className="data" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          className="input-field date input"
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="input-field time input"
        />
        <label htmlFor="bloodGlucose">Blood Glucose</label>
        <input
          type="text"
          name="bloodGlucose"
          value={formData.bloodGlucose}
          onChange={handleChange}
          className="input-field input"
        />
        <label htmlFor="mealTime">Meal Time</label>
        <input
          type="text"
          name="mealTime"
          value={formData.mealTime}
          onChange={handleChange}
          className="input-field input"
        />
        <label htmlFor="medication">Medication</label>
        <input
          type="text"
          name="medication"
          value={formData.medication}
          onChange={handleChange}
          className="input-field input"
        />
        <button
          style={buttonStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddDataGraph;
