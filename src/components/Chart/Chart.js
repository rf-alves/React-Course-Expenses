import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map((dp) => {
    return dp.value;
  });
  const maximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={maximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
