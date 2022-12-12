import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Piechart = ({ chartData }) => {
  return (
    <div className="w-[100px] h-[100px]">
      <Doughnut data={chartData}/>
    </div>
  );
};

export default Piechart;
