import React from "react";

function Member({ userName, link }) {
  return (
    <div className="member">
      <div className="row">
        <img
          className="img-fluid rounded-circle col-lg-2 ms-4 my-2 px-2 py-2"
          src={link}
          alt=""
        />
        <h5 className="font-weight-light col-lg-8 ps-2 pt-4"> {userName} </h5>
      </div>
    </div>
  );
}

export default Member;
