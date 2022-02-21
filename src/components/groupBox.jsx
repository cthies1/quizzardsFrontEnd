import React from "react";

function GroupBox({ link, groupName }) {
  return (
    <div class="group-box">
      <img class="group-box img-fluid mb-4 mb-lg-0" src={link} alt="" />
      <div class="overlay"></div>
      <h2 class="group-name">{groupName}</h2>
    </div>
  );
}

export default GroupBox;
