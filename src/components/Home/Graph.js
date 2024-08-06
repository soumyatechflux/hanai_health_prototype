import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { getSugarLevel } from "../../api";

const Graph = ({ id, type }) => {
  const [beforeMealData, setBeforeMealData] = useState([]);
  const [afterMealData, setAfterMealData] = useState([]);
  const [day, setDay] = useState([]);

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
    }, 100);

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
                label: "Before Meal",
                data: beforeMealData, // Use fetched before meal data
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
  }, [id, type, beforeMealData, afterMealData, day]); // Add dependencies

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <canvas id={id}></canvas>
    </div>
  );
};

export default Graph;
