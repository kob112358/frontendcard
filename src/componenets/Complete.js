import React from "react";
import styles from "./Complete.module.css";
import { ReactComponent as Check } from "../images/icon-complete.svg";

const Complete = (props) => {
  return (
    <div className={styles.completed}>
      <Check />
      <div>THANK YOU!</div>
      <div> We've added your card details</div>
      <button onClick={props.resetForm}>Continue</button>
    </div>
  );
};

export default Complete;
