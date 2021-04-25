import React from 'react';
import Chart from "react-google-charts";

function LineChart(){
  return(
    <Chart
    width={1500}
    height={500}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Hora', 'Aforo'],
      ['08:00', 10],
      ['09:00', 25],
      ['10:00', 35],
      ['11:00', 38],
      ['12:00', 23],
      ['13:00', 40],
      ['14:00', 35],
      ['15:00', 52],
      ['16:00', 23],
      ['17:00', 20],
      ['18:00', 33],
      ['19:00', 15],
      ['20:00', 27],
      ['21:00', 4],
      ['22:00', 2],
    ]}
    options={{
      chartArea: { width: '60%' },
      hAxis: {
        minValue: 0,
        maxValue: 100
      },

    }}
    legendToggle
  />
  );
};

export default LineChart;