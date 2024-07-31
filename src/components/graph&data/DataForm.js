import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './data-form.css';

const DataForm = ({ setShowGraph }) => {
  const chartRef = useRef(null);
  const [formData, setFormData] = useState({
    date: '2024-01-01',
    time: '16:38',
    bloodGlucose: 'O+',
    mealTime: '1 PM',
    medication: 'Supplement Supports',
  });

  useEffect(() => {
    const ctx = document.getElementById('chart3').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Series 1',
          data: [151, 90, 253, 189, 314, 250, 200],
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          borderColor: 'rgba(255, 0, 0, 1)',
          borderWidth: 1,
        }],
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
    setShowGraph(false);
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
            <label htmlFor="date" className='py-2'>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              className="input-field-data date input py-1"
            />
            <label htmlFor="time" className='py-2'>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="input-field-data time input py-1"
            />
            <label htmlFor="bloodGlucose" className='py-2'>Blood Glucose</label>
            <input
              type="text"
              name="bloodGlucose"
              value={formData.bloodGlucose}
              onChange={handleChange}
              className="input-field-data input py-1"
            />
            <label htmlFor="mealTime" className='py-2'>Meal Time</label>
            <input
              type="text"
              name="mealTime"
              value={formData.mealTime}
              onChange={handleChange}
              className="input-field-data input py-1"
            />
            <label htmlFor="medication" className='py-2'>Medication</label>
            <input
              type="text"
              name="medication"
              value={formData.medication}
              onChange={handleChange}
              className="input-field-data input py-1"
            />
            <button type="submit" className='data-submit-btn' onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
