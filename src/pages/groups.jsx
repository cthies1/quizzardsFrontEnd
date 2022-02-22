import React from "react";
import { GroupBox } from "../components";
import Button from "react-bootstrap/Button";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import { photo13, photo14, photo15, photo16, photo17 } from "../images";

function Groups() {
  return (
    <div className="groups">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mt-5 mb-4">
            <MDBCol>
              <MDBInput
                hint="Search Groups"
                type="text"
                containerClass="active-pink active-pink-2 mt-0 mb-3"
                variant="outline-primary"
                size="lg"
              />
            </MDBCol>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3 mt-5 mb-4 float-end">
            <Link to="/createGroup">
              <Button variant="outline-primary" size="lg">
                Create New Group +
              </Button>{" "}
            </Link>
          </div>
        </div>
        {/* <hr /> */}
        <div className="row align-items-center mt-5 mb-2">
          <h1 className="font-weight-bold col-lg-4">Suggested Groups</h1>
        </div>
        <div className="row pb-5">
          <div className="col-lg-3">
            <GroupBox link={photo13} groupName="Hogwarts" />
          </div>
          <div className="col-lg-3">
            <GroupBox link={photo14} groupName="Puppies" />
          </div>
          <div className="col-lg-3">
            <GroupBox link={photo15} groupName="Astronomy" />
          </div>
          <div className="col-lg-3">
            <GroupBox link={photo16} groupName="Candy" />
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-lg-3">
            <GroupBox link={photo17} groupName="Books" />
          </div>
          <div className="col-lg-3">
            <GroupBox link={photo13} groupName="Hogwarts" />
          </div>
          <div className="col-lg-3">
            <GroupBox link={photo14} groupName="Puppies" />
          </div>
          <div className="col-lg-3">
            <GroupBox link={photo15} groupName="Astronomy" />
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-lg-3">
            <GroupBox link={photo16} groupName="Candy" />
          </div>
          <div className="col-lg-3">
            <GroupBox link={photo17} groupName="Books" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
