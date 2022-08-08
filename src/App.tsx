import "./App.css";
import { useState } from "react";
import CreditCard from "./componenets/CreditCard";

function App() {
  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [expMonth, setExpMonth] = useState();
  const [expYear, setExpYear] = useState();
  const [cvc, setCvc] = useState();
  const [cardNameError, setCardNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expMonthError, setExpMonthError] = useState("");
  const [expYearError, setExpYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const nameChangeHandler = (event: any): void => {
    event.preventDefault();
    setCardName(event.target.value);
  };
  const numberChangeHandler = (event: any): void => {
    event.preventDefault();
    console.log(typeof event.target.value);
    setCardNumber(event.target.value);
  };
  const expMonthChangeHandler = (event: any): void => {
    event.preventDefault();
    setExpMonth(event.target.value);
  };
  const expYearChangeHandler = (event: any): void => {
    event.preventDefault();
    setExpYear(event.target.value);
  };
  const cvcChangeHandler = (event: any): void => {
    event.preventDefault();
    setCvc(event.target.value);
  };

  const nameBlurHandler = (event: any) => {
    event.preventDefault();
    let name = event.target.value;
    if (name.length === 0) {
      setCardNameError(`Can't be blank`);
    } else if (typeof name !== "string") {
      setCardNameError("Wrong format, strings only");
    } else {
      setCardNameError("");
    }
  };
  const numberBlurHandler = (event: any) => {
    event.preventDefault();
    let number = event.target.value;
    console.log(typeof number, number);
    if (String(number).length === 0) {
      setCardNumberError(`Can't be blank`);
    } else if (isNaN(number)) {
      setCardNumberError("Wrong format, numbers only");
    } else if (String(number).length !== 16) {
      if (
        String(number).length === 15 &&
        String(number).slice(0, 2) !== ("34" || "37")
      ) {
        setCardNumberError("The length is incorrect");
      } else {
        setCardNumberError("The length is incorrect");
      }
    } else {
      setCardNumberError("");
    }
  };
  const expMonthBlurHandler = (event: any) => {
    event.preventDefault();
    let expMonth = event.target.value;
    if (expMonth.length === 0) {
      console.log(expMonth.length);
      setExpMonthError(`Can't be blank`);
    } else if (isNaN(expMonth)) {
      setExpMonthError("Wrong format, numbers only");
    } else if (parseInt(expMonth) > 12 || parseInt(expMonth) < 1) {
      setExpMonthError("Not a valid month");
    } else {
      setExpMonthError("");
    }
  };

  return (
    <div className="creditComponent">
      <div className="header">
        <div className="background-card">
          <CreditCard
            name={cardName}
            number={cardNumber}
            month={expMonth}
            year={expYear}
            cvc={cvc}
          />
        </div>
      </div>
      <form>
        <label htmlFor="name">Cardholder Name</label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        ></input>

        <label htmlFor="number">Card Number</label>
        <input
          id="number"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={numberChangeHandler}
          onBlur={numberBlurHandler}
        ></input>
        <>
          <label htmlFor="month">EXP DATE</label>
          <input
            id="month"
            type="number"
            onChange={expMonthChangeHandler}
            onBlur={expMonthBlurHandler}
          ></input>
          <label htmlFor="year">(MM/YY)</label>
          <input
            type="number"
            id="year"
            placeholder="YY"
            onChange={expYearChangeHandler}
          ></input>
          <label htmlFor="cvc">CVC</label>
          <input
            type="number"
            id="cvc"
            placeholder="e.g. 123"
            onChange={cvcChangeHandler}
          ></input>
        </>
        <button>Confirm</button>
      </form>
      <p>- Completed state start -</p>
      Thank you! We've added your card details Continue
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/kob112358">
          Eric Kobliska
        </a>
        .
      </div>
    </div>
  );
}

export default App;
