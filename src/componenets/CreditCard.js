import React from "react";
import "./CreditCard.css";
import { ReactComponent as YourSvg } from "../images/card-logo.svg";

const CreditCard = (props) => {
  return (
    <div className="display-card">
      <YourSvg className="svg" />
      {props.number}
      <div className="display-card__info">
        {props.name}
        <div>
          {props.month}/
          {props.year}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
