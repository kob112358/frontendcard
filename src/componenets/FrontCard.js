import React from "react";
import "./FrontCard.css";
import { ReactComponent as YourSvg } from "../images/card-logo.svg";

const FrontCard = (props) => {

  function monthYearDisplay(expDate) {
    return String(expDate).padStart(2, '0');
  }

  const cardNumber = `${props.number.slice(0,4)} ${props.number.slice(4,8)} ${props.number.slice(8,12)} ${props.number.slice(12,16)}`;

  return (
    <div className="display-card">
      <YourSvg className="svg" />
      <div className="display-card__number">{cardNumber ? cardNumber : '0000 0000 0000 0000'}</div>
      <div className="display-card__info">
        {props.name}
        <div>
          {monthYearDisplay(props.month)}/
          {monthYearDisplay(props.year)}
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
