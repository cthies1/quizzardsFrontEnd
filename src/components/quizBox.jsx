import React from "react";
import { Link } from "react-router-dom";

function QuizBox({ name, description }) {
  return (
    <div className="quiz-box">
      <Link to="/quizPage">
        <div className="group-name bg-dark text-white px-3 py-3 rounded">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default QuizBox;
