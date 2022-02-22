import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class GroupStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        datasets: [
          {
            label: "House",
            data: [15, 35, 45, 5],
            backgroundColor: ["red", "yellow", "blue", "green"],
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
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default GroupStats;
