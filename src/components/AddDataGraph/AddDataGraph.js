import React, { useState } from 'react';
import './AddDataGraph.css';

const AddDataGraph = () => {
  const [formData, setFormData] = useState({
    date: '2024-01-01',
    time: '16:38',
    bloodGlucose: 'O+',
    mealTime: '1 PM',
    medication: 'Supplement Supports',
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

  return (
    <div className="data-form">
      <form className="data">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          className="input-field"
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="bloodGlucose">Blood Glucose</label>
        <input
          type="text"
          name="bloodGlucose"
          value={formData.bloodGlucose}
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="mealTime">Meal Time</label>
        <input
          type="text"
          name="mealTime"
          value={formData.mealTime}
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="medication">Medication</label>
        <input
          type="text"
          name="medication"
          value={formData.medication}
          onChange={handleChange}
          className="input-field"
        />
      </form>
    </div>
  );
};

export default AddDataGraph;
