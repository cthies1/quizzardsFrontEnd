import React from "react";
import { FriendsList } from "../components";
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
      <div class="container">
        <div class="float-end col-lg-3">
          <FriendsList />
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-1">
            <img
              class="img-fluid rounded-circle mb-4 mb-lg-0"
              src={photo12}
              alt=""
            />
          </div>
          <h3 class="font-weight-light col-lg-3">cthies</h3>
        </div>
        <div class="row align-items-center mt-5 mb-2">
          <h1 class="font-weight-bold col-lg-4">Your Groups</h1>
        </div>
        <div class="row col-lg-9 pb-5">
          <div class="col-lg-4">
            <GroupBox link={photo13} groupName="Hogwarts" />
          </div>
          <div class="col-lg-4">
            <GroupBox link={photo14} groupName="Puppies" />
          </div>
          <div class="col-lg-4">
            <GroupBox link={photo15} groupName="Astronomy" />
          </div>
        </div>
        <div class="row col-lg-9 pb-5">
          <div class="col-lg-4">
            <GroupBox link={photo16} groupName="Candy" />
          </div>
          <div class="col-lg-4">
            <GroupBox link={photo17} groupName="Books" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
