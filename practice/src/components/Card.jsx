// Card.jsx

// import React from "react";
import "./Card.css";

const Card = ({ name, course, marks }) => {
  return (
    <div className="studentCard">
      <div className="topSection">
        <div className="profileCircle">
          {name.charAt(0)}
        </div>

        <div>
          <h2>{name}</h2>
          <p>{course}</p>
        </div>
      </div>

      <div className="bottomSection">
        <div className="scoreBox">
          <span>Marks</span>
          <h1>{marks}</h1>
        </div>

        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;