import "./labreports.css";
import pdf from "./PDF_file_icon.svg.png";
import report_pdf from "./1.3_compressed.pdf";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "../MainPage/MainPage";
import {
  addBookTestAPI,
  getAllVendorsAPI,
  getBookTestDataAPI,
} from "../../api";

const LabreportsComponant = () => {
  const timeSlots = ["Morning", "Afternoon", "Evening"];

  const [labReports, setLabReports] = useState([]);
  const [formState, setFormState] = useState({
    lab: "",
    test_type: "",
    venue: "",
    date: "",
    timeSlot: "",
  });
  const [highlightFirstTest, setHighlightFirstTest] = useState(false);
  const [showLabReports, setShowLabReports] = useState(true); // Initially show Lab Reports
  const [showBookTest, setShowBookTest] = useState(false);
  const [venues, setVenues] = useState([]);
  const [testTypes, setTestType] = useState([]);
  const [labs, setLab] = useState([]);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const getBookTestDataFunction = async () => {
    try {
      const response = await getBookTestDataAPI();
      console.log(response?.data?.response?.data);
      const bookTest = response?.data?.response?.data;
      setLabReports(bookTest);
    } catch (error) {}
  };

  useEffect(() => {
    getBookTestDataFunction();
  }, []);
  
  const getVendorsInfoFunction = async () => {
    try {
      const response = await getAllVendorsAPI();
      // console.log(response?.data?.response?.data);
      const vendors = response?.data?.response?.data;
      const uniqueVenues = await [
        ...new Set(vendors.map((vendor) => vendor.venue)),
      ];
      const uniqueTestTypes = await [
        ...new Set(vendors.map((vendor) => vendor.type)),
      ];
      const uniqueLabs = await [
        ...new Set(vendors.map((vendor) => vendor.name)),
      ];
      setTestType(uniqueTestTypes);
      setLab(uniqueLabs);
      setVenues(uniqueVenues);
    } catch (error) {}
  };

  useEffect(() => {
    getVendorsInfoFunction();
  }, []);

  const handleBookTest = async (e) => {
    e.preventDefault();
    console.log(formState);
    // Validate form state to ensure all fields are populated
    if (
      !formState.lab ||
      !formState.test_type ||
      !formState.venue ||
      !formState.date ||
      !formState.timeSlot
    ) {
      toast.error("Please fill all the fields before submitting.");
      return;
    }

    // Create payload
    const payload = {
      labname: formState.lab,
      test_type: formState.test_type,
      venue: formState.venue,
      date: formState.date,
      timeslot: formState.timeSlot,
    };

    try {
      // Log payload to ensure it’s correctly structured
      console.log("Payload being sent:", payload);

      // Send request
      const response = await addBookTestAPI(payload);
      if (response.data.response === true) {
        showLabReportsSection();
        toast.success("Successfully booked!");
      }
    } catch (error) {
      // Handle error
      console.error("Error booking test:", error);
      toast.error(
        "An error occurred while booking the test. Please try again."
      );
    }
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
        <section className="content-section lab-content-section py-3 pe-5">
          <div className="labreports" style={{ marginTop: "65px" }}>
            <h3>Lab Reports</h3>
            {labReports.map((report, index) => (
              <div
                className={`row m-row mt-3 ${
                  highlightFirstTest && index === 0 ? "highlight" : ""
                }`}
                key={index}
              >
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
                  <a
                    href={report_pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={pdf} alt="PDF" className="pdf-img" />
                  </a>
                </div>
              </div>
            ))}
            <div className="mt-3 d-flex justify-content-center">
              <button className="lab-btn" onClick={showBookTestSection}>
                Take a Lab Test
              </button>
            </div>
          </div>
        </section>
      )}

      {showBookTest && (
        <section className="content-section book-content-section  py-3 pe-5">
          <div className="labreports" style={{ marginTop: "65px" }}>
            <form onSubmit={handleBookTest}>
              <h3>Book Test</h3>
              <div className="row">
                <div className="col-md-4 col-12 column">
                  <select
                    name="lab"
                    id="lab1"
                    className="lab"
                    value={formState.lab}
                    onChange={handleInputChange}
                    required
                  >
                    {labs.map((lab, index) => (
                      <option value={lab} key={index}>
                        {lab}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 col-12 column">
                  <select
                    name="test_type"
                    id="testType"
                    className="lab"
                    value={formState.test_type}
                    onChange={handleInputChange}
                  >
                    {testTypes.map((testType, index) => (
                      <option
                        value={testType.toLowerCase().replace(" ", "")}
                        key={index}
                      >
                        {testType}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 col-12 column">
                  <select
                    name="venue"
                    id="venue"
                    className="lab"
                    value={formState.venue}
                    onChange={handleInputChange}
                  >
                    {venues.map((venue, index) => (
                      <option value={venue} key={index}>
                        {venue}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row my-4 colmar">
                <div className="col-md-4 col-12 column col12">
                  <input
                    className="lab"
                    type="date"
                    placeholder="Date"
                    name="date"
                    required
                    value={formState.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-4 col-12 column col12">
                  <select
                    name="timeSlot"
                    id="timeSlot"
                    className="lab"
                    value={formState.timeSlot}
                    onChange={handleInputChange}
                  >
                    {timeSlots.map((slot, index) => (
                      <option value={slot.toLowerCase()} key={index}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 col-md-12 d-flex justify-content-center">
                  <button className="lab-btn" type="submit">
                    Book Now
                  </button>
                  <button
                    className="lab-btn"
                    onClick={showLabReportsSection}
                    style={{ marginLeft: "10px" }}
                  >
                    Back to Lab Reports
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default LabreportsComponant;
