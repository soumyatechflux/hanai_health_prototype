import "./labreports.css";
import pdf from "./PDF_file_icon.svg.png";
import Main from "../main/Main";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Labreports() {
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
      <Main />
      <ToastContainer />


      {showLabReports && (

      <section className="content-section py-3 pe-5"  style={{height:"89vh"}}>
        <div className="labreports mt-2">
          <h3>Lab Reports</h3>
          <div className={`row m-row mt-3 ${highlightFirstTest ? 'highlight' : ''}`}>
            <div className="col-6 col-md-3 p-row">
              <h5>Test</h5>
              <h6>mg/dL</h6>
            </div>
            <div className="col-6 col-md-3 p-row">
              <h5>Date</h5>
              <h6>10/02/2024</h6>
            </div>
            <div className="col-6 col-md-3 p-row">
              <h5>Time</h5>
              <h6>11:00 AM</h6>
            </div>
            <div className="col-6 col-md-3 p-row" id="reports">
              <h5>Reports</h5>
              <a href="#">
                <img src={pdf} alt="PDF" className="pdf-img" />
              </a>
            </div>
          </div>
          <div className="row m-row mt-4">
            <div className="col-6 col-md-3 p-row">
              <h5>Test</h5>
              <h6>ECG</h6>
            </div>
            <div className="col-6 col-md-3 p-row">
              <h5>Date</h5>
              <h6>10/02/2024</h6>
            </div>
            <div className="col-6 col-md-3 p-row">
              <h5>Time</h5>
              <h6>11:00 AM</h6>
            </div>
            <div className="col-6 col-md-3 p-row" id="reports">
              <h5>Reports</h5>
              <a href="#">
                <img src={pdf} alt="PDF" className="pdf-img" />
              </a>
            </div>
          </div>
          <div className="row m-row mt-4">
            <div className="col-6 col-md-3 p-row">
              <h5>Test</h5>
              <h6>Lipid Profile</h6>
            </div>
            <div className="col-6 col-md-3 p-row">
              <h5>Date</h5>
              <h6>10/02/2024</h6>
            </div>
            <div className="col-6 col-md-3 p-row">
              <h5>Time</h5>
              <h6>11:00 AM</h6>
            </div>
            <div className="col-6 col-md-3 p-row" id="reports">
              <h5>Reports</h5>
              <a href="#">
                <img src={pdf} alt="PDF" className="pdf-img" />
              </a>
            </div>
          </div>
          <div className="row m-row mt-4">
            <div className="col-6 col-md-3 p-row">
              <h5>Test</h5>
              <h6>Vitamin B12</h6>
            </div>
            <div className="col-6 col-md-3 p-row">
              <h5>Date</h5>
              <h6>10/02/2024</h6>
            </div>
            <div className="col-6 col-md-3 p-row">
              <h5>Time</h5>
              <h6>11:00 AM</h6>
            </div>
            <div className="col-6 col-md-3 p-row" id="reports">
              <h5>Reports</h5>
              <a href="#">
                <img src={pdf} alt="PDF" className="pdf-img" />
              </a>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <button className="lab-btn"  onClick={showBookTestSection} >Take a Lab Test</button>
          </div>
        </div>
      </section>
      )}




{showBookTest && (
      <section className="content-section py-3 pe-5"  style={{height:"89vh"}}>
        <div className="labreports mt-3">
          <h3>Book Test</h3>
          <div className="row">
            <div className="col-md-4 col-12 column">
              <select name="lab" id="lab1" className="lab" value={formState.lab} onChange={handleInputChange}>
                <option value="lab1">Lab 1</option>
                <option value="lab2">Lab 2</option>
                <option value="lab3">Lab 3</option>
              </select>
            </div>
            <div className="col-md-4 col-12 column">
              <select name="testType" id="testType" className="lab" value={formState.testType} onChange={handleInputChange}>
                <option value="bloodTest">Blood Test</option>
                <option value="urineTest">Urine Test</option>
                <option value="xray">X-ray</option>
              </select>
            </div>
            <div className="col-md-4 col-12 column">
              <select name="venue" id="venue" className="lab" value={formState.venue} onChange={handleInputChange}>
                <option value="venue1">Venue 1</option>
                <option value="venue2">Venue 2</option>
                <option value="venue3">Venue 3</option>
              </select>
            </div>
          </div>
          <div className="row my-4 colmar">
            <div className="col-md-4 col-12 column col12">
              <input className="lab" placeholder="Date" name="date" value={formState.date} onChange={handleInputChange} />
            </div>
            <div className="col-md-4 col-12 column col12">
              <select name="timeSlot" id="timeSlot" className="lab" value={formState.timeSlot} onChange={handleInputChange}>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
          </div>
          <h3>Payment</h3>
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
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="col-md-4 col-12 column col12">
              <select name="expiryYear" id="expiryYear" className="lab" value={formState.expiryYear} onChange={handleInputChange}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <button className="lab-btn" onClick={handleFormSubmit}>Submit</button>
          </div>
        </div>
      </section>
)}

    </>
  );
}

export default Labreports;
