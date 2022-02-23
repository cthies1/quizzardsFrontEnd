import React from "react";

function GroupBox({ link, name }) {
  return (
    <div className="group-box">
      <img className="group-box img-fluid mb-4 mb-lg-0" src={link} alt="" />
      <div className="overlay"></div>
      <h2 className="group-name">{name}</h2>
    </div>
  );
}

export default GroupBox;
