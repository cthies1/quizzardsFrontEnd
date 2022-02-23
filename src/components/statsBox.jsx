import React from "react";
import GroupStats from "./groupStats";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function StatsBox({ name, result, labels, data }) {
  return (
    <div className="stats-box">
      <div className="outline ms-3 mb-5 pb-4">
        <h4 className="mx-3 my-3"> Group Stats: {name}</h4>
        <div className="mx-4 my-2">
          <GroupStats barLabels={labels} barData={data} />
        </div>
        <hr />
        <div className="row mx-auto">
          <h4 className="col-lg-7 ms-2 my-2"> My Results: {result}</h4>
          <div className="col-lg-4">
            <Link to="/quiz" quizId="xxxxxx">
              <Button variant="outline-primary">Take this Quiz</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsBox;
