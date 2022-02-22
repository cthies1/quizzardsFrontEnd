import React from "react";
import GroupStats from "./groupStats";

function StatsBox({ result }) {
  return (
    <div className="stats-box">
      <div className="outline ms-3 mb-5 pb-4">
        <h4 className="mx-3 my-3"> Group Stats: </h4>
        <div className="mx-4 my-2">
          <GroupStats />
        </div>
        <hr />
        <div className="row mx-auto">
          <h4 className="mx-2 my-2"> My Results: {result}</h4>
        </div>
      </div>
    </div>
  );
}

export default StatsBox;
