import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { getSugarLevel,getGoalDataAPI } from "../../api";

const Graph = ({ id, type }) => {
  const [beforeMealData, setBeforeMealData] = useState([]);
  const [afterMealData, setAfterMealData] = useState([]);
  const [day, setDay] = useState([]);
  const [daySteps, setDaySteps] = useState([]);

  const [steps, setSteps] = useState([]);


  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[date.getDay()];
  };

  const getSugarLevelDataFunction = async () => {
    try {
      const response = await getSugarLevel();
      const data = response.data.data.result;

      const beforeMealArray = data.map((record) => record.before_meal);
      const afterMealArray = data.map((record) => record.after_meal);
      const dayNamesArray = data.map((record) => getDayName(record.date));

      setDay(dayNamesArray);
      setBeforeMealData(beforeMealArray);
      setAfterMealData(afterMealArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSugarLevelDataFunction();
    }, 10);

    return () => clearTimeout(timer);
  }, []);



  const getGoalsDataFunction = async () => {
    try {
      const response = await getGoalDataAPI();
      const data = response?.data?.data.result;
      const dayNamesArray = data.map((record) => getDayNameSteps(record?.date));
      const steps = data.map((record) => record?.no_of_steps);

      setDaySteps(dayNamesArray);
      setSteps(steps)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getGoalsDataFunction();
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const getDayNameSteps = (dateString) => {
    const date = new Date(dateString);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[date.getDay()];
  };



  useEffect(() => {
    const initializeChart = () => {
      const ctx = document.getElementById(id);

      if (!ctx) {
        console.error(`Canvas element with id "${id}" not found`);
        return;
      }

      const existingChart = Chart.getChart(id);
      if (existingChart) {
        existingChart.destroy();
      }

      const data = {
        labels: type === "line" ? daySteps: day,
        datasets: type === "line"
          ? [
              {
                label: "Steps",
                data: steps, // Use fetched before meal data
                borderColor: "rgba(255, 0, 0, 1)", // Line color will be normal red
                backgroundColor: "rgba(0, 0, 0, 0)", // No background color
                borderWidth: 2, // Increase border width for better visibility
                fill: false, // No fill under the line
              },
            ]
          : [
              {
                label: "Before Meal",
                data: beforeMealData, // Use fetched before meal data
                backgroundColor: "rgba(255, 99, 132, 0.2)", // All bars will be red
                borderColor: "rgba(255, 99, 132, 1)", // All borders will be red
                borderWidth: 1,
              },
              {
                label: "After Meal",
                data: afterMealData, // Use fetched after meal data
                backgroundColor: "rgba(255, 0, 0, 1)", // All bars will be normal red
                borderColor: "rgba(255, 0, 0, 1)", // All borders will be normal red
                borderWidth: 1,
              },
            ],
      };

      new Chart(ctx, {
        type: type,
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: type === "line" ? 500 : 50, // Step size for Y-axis numbers
              },
            },
          },
        },
      });
    };

    initializeChart();

    // Clean up function to destroy the chart when the component unmounts
    return () => {
      const existingChart = Chart.getChart(id);
      if (existingChart) {
        existingChart.destroy();
      }
    };
  }, [id, type, steps,beforeMealData, afterMealData, day]); // Add dependencies

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <canvas id={id}></canvas>
    </div>
  );
};

export default Graph;
