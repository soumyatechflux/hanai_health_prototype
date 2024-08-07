// src/RulerPicker.js
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./RularPicker.css";
import Age from "./../../img/Age.PNG";
import Height from "./../../img/height.PNG";
import Weight from "./../../img/weight.PNG";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getBMI_RulerDataAPI, postBMI_RulerDataAPI, postCustomerDataAPI } from "../../../../api";

const RulerPicker = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBmiRulerData = async () => {
      setIsLoading(true);
      try {
        const response = await getBMI_RulerDataAPI();
        if (response?.data?.response === true && response?.data?.data?.data) {
          const data = response.data.data.data[0]; // Access the first object in the array
          setAge(data.age || "75");
          setHeight(data.height || "150");
          setWeight(data.weight || "100");
        } else {
          toast.error(
            "Failed to fetch customer data. Status: " + response.status
          );
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
        toast.error("Failed to fetch customer data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBmiRulerData();
  }, []);

  const handleNext = async () => {
    
    navigate("/interest");

    setIsLoading(true);

    try {
      // Create the data object
      const data = {
        height: height,
        weight: weight,
        age: age,
      };

      // Call the API with the data object
      const response = await postBMI_RulerDataAPI(data);

      // Check if the response indicates success
      if (response.status === 200) {
        // Ensure response status is 200 OK
        toast.success("BMI data submitted successfully.");
        navigate("/interest");
      } else {
        toast.error(`Failed to submit BMI data. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting BMI data:", error);
      toast.error(
        "An error occurred while submitting BMI data. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="content-rular py-3 px-5">
        <header
          style={{ textAlign: "center", fontSize: "25px" }}
          className="py-3"
        >
          BMI Calculator
        </header>
        <div className="container-fluid main-container">
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Height} alt="height" className="image" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm pb-3">
              <div className="ruler-section">
                <h6 className="pt-2">Height</h6>
                <div className="ruler-scale">
                  <Slider
                    min={10}
                    max={300}
                    step={1}
                    value={height}
                    onChange={setHeight}
                    railStyle={{ height: 50 }}
                    trackStyle={{ height: 10, backgroundColor: "transparent" }}
                    handleStyle={{
                      height: 0,
                      width: 0,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "20px solid red",
                      marginLeft: -10,
                      marginTop: -5,
                    }}
                  />
                  <div className="value">{height} cm</div>
                  {console.log(height)}
                </div>
              </div>
            </div>
          </div>
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Weight} alt="weight" className="image" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm pb-3">
              <div className="ruler-section">
                <h6 className="pt-2">Weight</h6>
                <div className="ruler-scale">
                  <Slider
                    min={1}
                    max={200}
                    step={1}
                    value={weight}
                    onChange={setWeight}
                    railStyle={{ height: 50 }}
                    trackStyle={{ height: 10, backgroundColor: "transparent" }}
                    handleStyle={{
                      height: 0,
                      width: 0,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "20px solid red",
                      marginLeft: -10,
                      marginTop: -5,
                    }}
                  />
                  <div className="value">{weight} kg</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-rular">
            <div className="col-3 column-3">
              <img src={Age} alt="age" className="image img3" />
            </div>
            <div className="col-9 column-9 scale table-responsive-sm pb-3">
              <div className="ruler-section">
                <h6 className="pt-2">Age</h6>
                <div className="ruler-scale">
                  <Slider
                    min={0}
                    max={150}
                    step={1}
                    value={age}
                    onChange={setAge}
                    railStyle={{ height: 50 }}
                    trackStyle={{ height: 10, backgroundColor: "transparent" }}
                    handleStyle={{
                      height: 0,
                      width: 0,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "20px solid red",
                      marginLeft: -10,
                      marginTop: -5,
                    }}
                  />
                  <div className="value">{age} year</div>
                </div>
              </div>
            </div>
          </div>
          <div className="" style={{ float: "right", marginTop: "30px" }}>
            <button className="btn-start mt-2" onClick={handleNext}disabled={isLoading}>
            {isLoading ? "Calculating..." : "Calculate"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RulerPicker;
