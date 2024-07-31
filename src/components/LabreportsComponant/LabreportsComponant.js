import "./labreports.css";
import pdf from "./PDF_file_icon.svg.png";
import report_pdf from './1.3_compressed.pdf';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from "../MainPage/MainPage";

const labReports = [
  { test: 'mg/dL', date: '10/02/2024', time: '11:00 AM', highlight: true },
  { test: 'ECG', date: '10/02/2024', time: '11:00 AM' },
  { test: 'Lipid Profile', date: '10/02/2024', time: '11:00 AM' },
  { test: 'Vitamin B12', date: '10/02/2024', time: '11:00 AM' },
];

  const LabreportsComponant = () => {

    const labs = ['Lab 1', 'Lab 2', 'Lab 3'];
  const testTypes = ['Blood Test', 'Urine Test', 'X-ray'];
  const venues = ['Venue 1', 'Venue 2', 'Venue 3'];
  const timeSlots = ['Morning', 'Afternoon', 'Evening'];
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];
  const years = ['2023', '2024', '2025', '2026', '2027'];
    const [formState, setFormState] = useState({
      lab: 'lab1',
      testType: 'bloodTest',
      venue: 'venue1',
      date: '',
      timeSlot: 'morning',
      cardHolderName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '01',
      expiryYear: '2023'
    });
  const [highlightFirstTest, setHighlightFirstTest] = useState(false);
  const [showLabReports, setShowLabReports] = useState(true); // Initially show Lab Reports
  const [showBookTest, setShowBookTest] = useState(false);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formState);
    toast.success('Successfully booked!');
    setHighlightFirstTest(true);
    setFormState({
      lab: 'lab1',
      testType: 'bloodTest',
      venue: 'venue1',
      date: '01/01/2024',
      timeSlot: 'morning',
      cardHolderName: 'HANAI Health',
      cardNumber: '123 123 123',
      cvv: '000',
      expiryMonth: '01',
      expiryYear: '2023'
    });
    setShowBookTest(false); // Close booking section after submission
    setShowLabReports(true); // Show Lab Reports again
  };

  const showBookTestSection = () => {
    setShowLabReports(false);
    setShowBookTest(true);
  };

  const showLabReportsSection = () => {
    setShowLabReports(true);
    setShowBookTest(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <MainPage />
      <ToastContainer />

      {showLabReports && (
        <section className="content-section lab-content-section py-3 pe-5" >
          <div className="labreports" style={{ marginTop: '65px' }}>
            <h3>Lab Reports</h3>
            {labReports.map((report, index) => (
              <div className={`row m-row mt-3 ${highlightFirstTest && index === 0 ? 'highlight' : ''}`} key={index}>
                <div className="col-6 col-md-3 p-row">
                  <h5>Test</h5>
                  <h6>{report.test}</h6>
                </div>
                <div className="col-6 col-md-3 p-row">
                  <h5>Date</h5>
                  <h6>{report.date}</h6>
                </div>
                <div className="col-6 col-md-3 p-row">
                  <h5>Time</h5>
                  <h6>{report.time}</h6>
                </div>
                <div className="col-6 col-md-3 p-row" id="reports">
                  <h5>Reports</h5>
                  <a href={report_pdf} target="_blank" rel="noopener noreferrer">
                    <img src={pdf} alt="PDF" className="pdf-img" />
                  </a>
                </div>
              </div>
            ))}
            <div className="mt-3 d-flex justify-content-center">
              <button className="lab-btn" onClick={showBookTestSection}>Take a Lab Test</button>
            </div>
          </div>
        </section>
      )}




{showBookTest && (
        <section className="content-section book-content-section  py-3 pe-5">
          <div className="labreports" style={{ marginTop: '65px' }}>
            <h3>Book Test</h3>
            <div className="row">
              <div className="col-md-4 col-12 column">
                <select name="lab" id="lab1" className="lab" value={formState.lab} onChange={handleInputChange}>
                  {labs.map((lab, index) => (
                    <option value={`lab${index + 1}`} key={index}>{lab}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 col-12 column">
                <select name="testType" id="testType" className="lab" value={formState.testType} onChange={handleInputChange}>
                  {testTypes.map((testType, index) => (
                    <option value={testType.toLowerCase().replace(' ', '')} key={index}>{testType}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 col-12 column">
                <select name="venue" id="venue" className="lab" value={formState.venue} onChange={handleInputChange}>
                  {venues.map((venue, index) => (
                    <option value={`venue${index + 1}`} key={index}>{venue}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row my-4 colmar">
              <div className="col-md-4 col-12 column col12">
                <input className="lab" type="date" placeholder="Date" name="date" value={formState.date} onChange={handleInputChange} />
              </div>
              <div className="col-md-4 col-12 column col12">
                <select name="timeSlot" id="timeSlot" className="lab" value={formState.timeSlot} onChange={handleInputChange}>
                  {timeSlots.map((slot, index) => (
                    <option value={slot.toLowerCase()} key={index}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* <h3>Payment</h3>
            <div className="row mt-3">
              <div className="col-md-4 col-12 column">
                <input className="lab" placeholder="Card Holder Name*" name="cardHolderName" value={formState.cardHolderName} onChange={handleInputChange} />
              </div>
              <div className="col-md-4 col-12 column">
                <input className="lab" placeholder="Card Number*" name="cardNumber" value={formState.cardNumber} onChange={handleInputChange} />
              </div>
              <div className="col-md-4 col-12 column">
                <input type="password" className="lab" placeholder="CVV*" name="cvv" value={formState.cvv} onChange={handleInputChange} />
              </div>
            </div>
            <div className="row mt-4 colmar">
              <div className="col-md-4 col-12 column col12">
                <select name="expiryMonth" id="expiryMonth" className="lab" value={formState.expiryMonth} onChange={handleInputChange}>
                  {months.map((month, index) => (
                    <option value={month.value} key={index}>{month.label}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 col-12 column col12">
                <select name="expiryYear" id="expiryYear" className="lab" value={formState.expiryYear} onChange={handleInputChange}>
                  {years.map((year, index) => (
                    <option value={year} key={index}>{year}</option>
                  ))}
                </select>
              </div>
            </div> */}
            
            {/* <div className="mt-3 d-flex justify-content-center">
              <button className="lab-btn" onClick={handleFormSubmit}>Submit</button>
            </div> */}
            <div className="row mt-5">
              <div className="col-12 col-md-12 d-flex justify-content-center">
                <button className="lab-btn" onClick={handleFormSubmit}>Book Now</button>
                <button className="lab-btn" onClick={showLabReportsSection} style={{ marginLeft: '10px' }}>Back to Lab Reports</button>
              </div>
            </div>
          </div>
        </section>
      )}

    </>
  );
}

export default LabreportsComponant;
