import React from "react";
import { PersonCircle, SuitHeartFill } from "react-bootstrap-icons";

function Friend({ userName, link }) {
  return (
    <div className="friend">
      <div className="row">
        <img
          className="img-fluid rounded-circle col-lg-2 ms-4 my-2 px-2 py-2"
          src={link}
          alt=""
        />

        <div className="col-lg-1 heart">
          <SuitHeartFill color="#f14e48" />
        </div>
        <h5 className="font-weight-light col-lg-8 ps-2 pt-4"> {userName} </h5>
      </div>
    </div>
  );
}

export default Friend;
