import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function QuizBox({ name, description }) {
  return (
    <div className="quiz-box">
      <Button variant="outline-dark p-0 col-lg-12">
        <div className="group-name bg-dark text-white px-3 py-3">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </Button>{" "}
    </div>
  );
}

export default QuizBox;
