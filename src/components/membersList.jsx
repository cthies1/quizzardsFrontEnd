import React from "react";
import Friend from "./friend";
import Member from "./member";
import { Button } from "react-bootstrap";
import {
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
} from "../images";

function MembersList() {
  return (
    <div class="members-list">
      <div class="friends-box ms-3 mb-5">
        <div class="row">
          <h4 class="col-lg-5 mx-2 my-2"> Members: </h4>
          <div class="col-lg-1"></div>
          <div class="float-end col-lg-5 mt-2">
            <Button variant="outline-primary">Invite</Button>{" "}
          </div>
        </div>

        <Friend userName={"avanboven"} link={photo2} />
        <Friend userName={"bbridge"} link={photo3} />
        <Friend userName={"ddolan"} link={photo4} />
        <Friend userName={"cmonaghan"} link={photo5} />
        <Member userName={"ahuffman"} link={photo6} />
        <Member userName={"dneal"} link={photo7} />
        <Member userName={"slanglois"} link={photo8} />
        <Member userName={"mgamble"} link={photo9} />
        <Member userName={"rcurfman"} link={photo10} />
        <Member userName={"mhoffman"} link={photo11} />
      </div>
    </div>
  );
}

export default MembersList;
