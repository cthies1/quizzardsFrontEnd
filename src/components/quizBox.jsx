import React from "react";

function QuizBox({ link, quizName }) {
  return (
    <div class="quiz-box">
      <img
        class="group-box img-fluid rounded-circle mb-4 mb-lg-0"
        src={link}
        alt=""
      />

      <div class="overlay"></div>
      <h2 class="quiz-name">{quizName}</h2>
    </div>
  );
}

export default QuizBox;
