import React from "react";
import Chart from "react-google-charts";

function LineChart() {
  return (
      <Chart
        width={900}
        height={300}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Hora", "Aforo"],
          ["06:00", 1],
          ["07:00", 3],
          ["08:00", 10],
          ["09:00", 25],
          ["10:00", 35],
          ["11:00", 38],
          ["12:00", 23],
          ["13:00", 40],
          ["14:00", 35],
          ["15:00", 52],
         
        ]}
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
