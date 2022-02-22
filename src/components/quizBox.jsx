import React from "react";

function QuizBox({ link, quizName }) {
  return (
    <div className="quiz-box">
      <img
        className="group-box img-fluid rounded-circle mb-4 mb-lg-0"
        src={link}
        alt=""
      />

      <div className="overlay"></div>
      <h2 className="quiz-name">{quizName}</h2>
    </div>
  );
}

export default QuizBox;
