import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const DonutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    const doughnutLabel = {
      id: "doughnutLabel",
      beforeDatasetsDraw(chart, arfs, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;
        ctx.font = "bold 13px sans-serif";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("65% \nCustomers", xCoor, yCoor);
      },
    };

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [30, 60, 40],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(102, 102, 255)",
              "rgb(255, 255, 255)",
            ],
          },
        ],
      },
      plugins: [doughnutLabel],
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} style={{ width: "300px", height: "200px" }} />
    </div>
  );
};

export default DonutChart;
