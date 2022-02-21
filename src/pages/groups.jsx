import React from "react";
import { GroupBox } from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import { photo13, photo14, photo15, photo16, photo17 } from "../images";

function Groups() {
  return (
    <div className="groups">
      <div class="container">
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-6 mt-5 mb-4">
            <MDBCol md="6">
              <MDBInput
                hint="Search Groups"
                type="text"
                containerClass="active-pink active-pink-2 mt-0 mb-3"
                variant="outline-primary"
                size="lg"
              />
            </MDBCol>
          </div>
          <div class="col-lg-3 mt-5 mb-4">
            <Link to="/createGroup">
              <Button variant="outline-primary" size="lg">
                Create New Group +
              </Button>{" "}
            </Link>
          </div>
        </div>
        <hr />
        <div class="row align-items-center mt-5 mb-2">
          <h1 class="font-weight-bold col-lg-4">Suggested Groups</h1>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <GroupBox link={photo13} groupName="Hogwarts" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo14} groupName="Puppies" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo15} groupName="Astronomy" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo16} groupName="Candy" />
          </div>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <GroupBox link={photo17} groupName="Books" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo13} groupName="Hogwarts" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo14} groupName="Puppies" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo15} groupName="Astronomy" />
          </div>
        </div>
        <div class="row pb-5">
          <div class="col-lg-3">
            <GroupBox link={photo16} groupName="Candy" />
          </div>
          <div class="col-lg-3">
            <GroupBox link={photo17} groupName="Books" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
