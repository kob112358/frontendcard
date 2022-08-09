import React from "react";
import FrontCard from "./FrontCard";
import "./BackCard.css";

function BackCard(props) {
  return (
    <div className="background-card">
      <div className="background-card__cvc">{props.cvc}</div>
      <FrontCard
        name={props.name}
        number={props.number}
        month={props.month}
        year={props.year}
      />
    </div>
  );
}

export default BackCard;
