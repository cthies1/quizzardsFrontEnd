import React from "react";
import { QuizBox } from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import { photo13, photo14, photo15, photo16, photo17 } from "../images";

function Quizzes() {
  return (
    <div className="quizzes">
      <div class="container">
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-6 mt-5 mb-4">
            <MDBCol md="6">
              <MDBInput
                hint="Search"
                type="text"
                containerClass="active-pink active-pink-2 mt-0 mb-3"
                variant="outline-primary"
                size="lg"
              />
            </MDBCol>
          </div>
          <div class="col-lg-3 mt-5 mb-4">
            <Link to="/createQuiz">
              <Button variant="outline-primary" size="lg">
                Create New Quiz +
              </Button>{" "}
            </Link>
          </div>
        </div>
        <hr />
        <div class="row align-items-center mt-5 mb-2">
          <h1 class="font-weight-bold col-lg-4">Suggested Quizzes</h1>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <QuizBox link={photo13} quizName="Hogwarts" />
          </div>
          <div class="col-lg-3">
            <QuizBox link={photo14} quizName="Puppies" />
          </div>
          <div class="col-lg-3">
            <QuizBox link={photo15} quizName="Astronomy" />
          </div>
          <div class="col-lg-3">
            <QuizBox link={photo16} quizName="Candy" />
          </div>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <QuizBox link={photo17} quizName="Books" />
          </div>
          <div class="col-lg-3">
            <QuizBox link={photo13} quizName="Hogwarts" />
          </div>
          <div class="col-lg-3">
            <QuizBox link={photo14} quizName="Puppies" />
          </div>
          <div class="col-lg-3">
            <QuizBox link={photo15} quizName="Astronomy" />
          </div>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <QuizBox link={photo16} quizName="Candy" />
          </div>
          <div class="col-lg-3">
            <QuizBox link={photo17} quizName="Books" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizzes;
