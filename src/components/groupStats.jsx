import React, { Component } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart, Bar } from "react-chartjs-2";

class GroupStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: this.props.barLabels,
        datasets: [
          {
            data: this.props.barData,
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

  static defaultProps = {
    barLabels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
    barData: [3, 9, 18, 13, 7, 2, 14],
  };

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
