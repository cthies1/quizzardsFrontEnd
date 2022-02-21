import React from "react";
import Friend from "./friend";
import User from "./user";
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

function FriendsList() {
  return (
    <div class="friends-list">
      <div class="friends-box ms-3 mb-5 pb-4">
        <h4 class="mx-2 my-2"> Friends: </h4>
        <Friend userName={"avanboven"} link={photo2} />
        <Friend userName={"bbridge"} link={photo3} />
        <Friend userName={"ddolan"} link={photo4} />
        <Friend userName={"cmonaghan"} link={photo5} />
        <hr />
        <h4 class="mx-2 my-2"> Friend Requests: </h4>
        <User userName={"ahuffman"} link={photo6} />
        <User userName={"dneal"} link={photo7} />
        <User userName={"slanglois"} link={photo8} />
        <User userName={"mgamble"} link={photo9} />
        <User userName={"rcurfman"} link={photo10} />
        <User userName={"mhoffman"} link={photo11} />
      </div>
    </div>
  );
}

export default FriendsList;
