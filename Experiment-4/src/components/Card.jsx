import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="userCard">
      {/* <h1>Student Information</h1> */}
      <div className="UserInfo">
        <h2 id="name">{props.name}</h2>
        <h3 className="course">
          <span>Course:</span> {props.course}
        </h3>
        <h3 className="marks">
          <span>Marks:</span> {props.marks}
        </h3>
      </div>
    </div>
  );
};

export default Card;
