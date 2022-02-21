import React from "react";
import { PersonCircle, SuitHeartFill } from "react-bootstrap-icons";

function Friend({ userName, link }) {
  return (
    <div class="friend">
      <div class="row">
        <img
          class="img-fluid rounded-circle col-lg-2 ms-4 my-2 px-2 py-2"
          src={link}
          alt=""
        />

        <div class="col-lg-1 heart">
          <SuitHeartFill color="#F93154" />
        </div>
        <h5 class="font-weight-light col-lg-8 ps-2 pt-4"> {userName} </h5>
      </div>
    </div>
  );
}

export default Friend;
