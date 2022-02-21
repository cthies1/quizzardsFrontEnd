import React from "react";
import Button from "react-bootstrap/Button";

function User({ userName, link }) {
  return (
    <div class="user">
      <div class="row">
        <img
          class="img-fluid rounded-circle col-lg-2 ms-4 mt-2 mb-0 px-2 py-2"
          src={link}
          alt=""
        />
        <h5 class="font-weight-light col-lg-8 ps-2 pt-4 mb-0"> {userName} </h5>
        <div class="ms-5 ps-5">
          <Button variant="outline-success" size="sm">
            Accept
          </Button>{" "}
          <Button variant="outline-danger" size="sm">
            Deny
          </Button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default User;
