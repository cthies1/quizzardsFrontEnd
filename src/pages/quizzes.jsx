import React from "react";
import { QuizBox } from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import { photo13, photo14, photo15, photo16, photo17 } from "../images";

function Quizzes() {
  return (
    <div className="quizzes">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="row">
            <div className="col-lg-8 mt-5 mb-4">
              <MDBCol>
                <MDBInput
                  hint="Search Quizzes"
                  type="text"
                  containerClass="active-pink active-pink-2 mt-0 mb-3"
                  variant="outline-primary"
                  size="lg"
                />
              </MDBCol>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3 mt-5 mb-4 float-end">
              <Link to="/createQuiz">
                <Button variant="outline-primary" size="lg">
                  Create New Quiz +
                </Button>{" "}
              </Link>
            </div>
          </div>
          {/* <hr /> */}
          <div className="row align-items-center mt-5 mb-2">
            <h1 className="font-weight-bold col-lg-4">Suggested Quizzes</h1>
          </div>
          <div className="row pb-5">
            <div className="col-lg-3">
              <QuizBox link={photo13} quizName="Hogwarts" />
            </div>
            <div className="col-lg-3">
              <QuizBox link={photo14} quizName="Puppies" />
            </div>
            <div className="col-lg-3">
              <QuizBox link={photo15} quizName="Astronomy" />
            </div>
            <div className="col-lg-3">
              <QuizBox link={photo16} quizName="Candy" />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-3">
              <QuizBox link={photo17} quizName="Books" />
            </div>
            <div className="col-lg-3">
              <QuizBox link={photo13} quizName="Hogwarts" />
            </div>
            <div className="col-lg-3">
              <QuizBox link={photo14} quizName="Puppies" />
            </div>
            <div className="col-lg-3">
              <QuizBox link={photo15} quizName="Astronomy" />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-3">
              <QuizBox link={photo16} quizName="Candy" />
            </div>
            <div className="col-lg-3">
              <QuizBox link={photo17} quizName="Books" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizzes;
