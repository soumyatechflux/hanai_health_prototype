import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { getGoalDataAPI } from "../../../api";

const Graph = ({ id, type }) => {

  const [day, setDay] = useState([]);
  const [steps, setSteps] = useState([]);


  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[date.getDay()];
  };

  const getGoalsDataFunction = async () => {
    try {
      const response = await getGoalDataAPI();
      const data = response.data.data.result;
      const dayNamesArray = data.map((record) => getDayName(record.date));
      const steps = data.map((record) => record.no_of_steps);

      setDay(dayNamesArray);
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
        labels: day, // Use day names as labels
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
          : null
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
  }, [id, type, steps,day]);

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <canvas id={id}></canvas>
    </div>
  );
};

export default Graph;
