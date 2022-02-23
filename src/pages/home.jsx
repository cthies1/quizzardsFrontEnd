import React from "react";
import { FriendsList, QuizBox } from "../components";
import GroupBox from "../components/groupBox";
import {
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
} from "../images";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="float-end col-lg-3">
          <FriendsList />
        </div>
        <div className="row align-items-center my-5">
          <div className="col-lg-1">
            <img
              className="img-fluid rounded-circle mb-4 mb-lg-0"
              src={photo12}
              alt=""
            />
          </div>
          <h3 className="font-weight-light col-lg-3">cthies</h3>
        </div>
        <div className="row align-items-center mt-5 mb-2">
          <h1 className="font-weight-bold col-lg-4">Your Groups</h1>
        </div>
        <div className="row col-lg-9 pb-5">
          <div className="col-lg-4">
            <GroupBox link={photo13} name="Hogwarts" />
          </div>
          <div className="col-lg-4">
            <GroupBox link={photo14} name="Puppies" />
          </div>
          <div className="col-lg-4">
            <GroupBox link={photo15} name="Astronomy" />
          </div>
        </div>
        <div className="row col-lg-9 pb-5">
          <div className="col-lg-4">
            <GroupBox link={photo16} name="Candy" />
          </div>
          <div className="col-lg-4">
            <GroupBox link={photo17} name="Books" />
          </div>
        </div>
        <div className="row align-items-center mt-5 mb-2">
          <h1 className="font-weight-bold col-lg-4">Your Groups</h1>
        </div>
        <div className="row col-lg-9 pb-5">
          <div className="col-lg-4">
            <QuizBox
              name="Hogwarts"
              description="description of the quiz goes here."
            />
          </div>
          <div className="col-lg-4">
            <QuizBox
              name="Puppies"
              description="description of the quiz goes here."
            />
          </div>
          <div className="col-lg-4">
            <QuizBox
              name="Astronomy"
              description="description of the quiz goes here."
            />
          </div>
        </div>
        <div className="row col-lg-9 pb-5">
          <div className="col-lg-4">
            <QuizBox
              name="Candy"
              description="description of the quiz goes here."
            />
          </div>
          <div className="col-lg-4">
            <QuizBox
              name="Books"
              description="description of the quiz goes here."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
