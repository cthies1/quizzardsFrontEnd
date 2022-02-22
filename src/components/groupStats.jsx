import React, { Component } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart, Bar } from "react-chartjs-2";

class GroupStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        datasets: [
          {
            data: [15, 35, 45, 5],
            backgroundColor: [
              "#f14e48",
              "#ff9038",
              "#feca1d",
              "#43c12c",
              "#0273e9",
              "#8d48f1",
              "#de35e7",
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="group-stats">
        <Bar
          data={this.state.chartData}
          height={250}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default GroupStats;
