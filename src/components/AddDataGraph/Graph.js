import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './Graph.css';
import AddDataGraph from './AddDataGraph';

const Graph = ({ setShowGraph }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart
    const ctx = document.getElementById('chart1').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line', // specify the type of chart
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Series 1',
          data: [151, 90, 253, 189, 314, 250, 200],
          backgroundColor: 'rgba(255, 0, 0, 0.2)', // Light red background
          borderColor: 'rgba(255, 0, 0, 1)', // Red border
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      // Cleanup chart instance
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="row row-graph" style={{height:"73vh"}}>
      <div className="col-md-5 graph">
        <div className="cell">
          <canvas id="chart1"></canvas>
        </div>
      </div>
      <div className="col-md-4 form-container">
        <AddDataGraph setShowGraph={setShowGraph} />
      </div>
    </div>
  );
};

export default Graph;
