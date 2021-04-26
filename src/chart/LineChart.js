import React from "react";
import Chart from "react-google-charts";

function LineChart({data}) {
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);
  const chartData = [["Hora", "Aforo"]];
  for(let i = 0; i < dataKeys.length; i++){
    chartData.push([dataKeys[i], dataValues[i]]);
  }

  return (
      <Chart
        width={900}
        height={300}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          chartArea: { width: "90%" },
          hAxis: {
            minValue: 0,
            maxValue: 100,
          },
          vAxis:{
            gridlines: {
              color: "#7A7A7A"
            }
          },
          backgroundColor: {
            fill: '#D6D6D6'
          },
          fontSize: 10,
          legend:{
            position: "none"
          },
          series: {
            0: {color: "#A9294F"}
          },
          pointSize: 5
        }}
        
      />
  );
}

export default LineChart;
