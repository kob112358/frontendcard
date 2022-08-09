import "./App.css";
import { useState } from "react";
import BackCard from "./componenets/BackCard";
import Complete from "./componenets/Complete";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardNameError, setCardNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expMonthError, setExpMonthError] = useState("");
  const [expYearError, setExpYearError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const resetForm = () => {
    setCardName("JANE APPLESEED");
    setCardNumber("0000000000000000");
    setExpMonth("");
    setExpYear("");
    setCvc("000");
    setIsComplete(false);
  };
  const nameChangeHandler = (event: any): void => {
    event.preventDefault();
    setCardName(event.target.value);
  };
  const numberChangeHandler = (event: any): void => {
    event.preventDefault();
    if (event.target.value.length === 0) {
      setCardNumber("0000000000000000");
    } else {
      setCardNumber(event.target.value);
    }
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
  const expYearBlurHandler = (event: any) => {
    event.preventDefault();
    let expYear = event.target.value;
    if (expYear.length === 0) {
      setExpYearError(`Can't be blank`);
    } else if (expYear.length !== 2) {
      setExpYearError("Not valid year");
    } else if (isNaN(expYear)) {
      setExpYearError("Wrong format, numbers only");
    } else {
      setExpYearError("");
    }
  };
  const cvcBlurHandler = (event: any) => {
    event.preventDefault();
    let cvc = event.target.value;
    if (cvc.length === 0) {
      console.log(cvc.length);
      setCvcError(`Can't be blank`);
    } else if (isNaN(cvc)) {
      setCvcError("Wrong format, numbers only");
    } else if (cvc.length !== 3) {
      setCvcError("Wrong length CVC");
    } else {
      setCvcError("");
    }
  };

  const completeHandler = (event: any) => {
    event.preventDefault();
    if (
      cardNameError.length === 0 &&
      cardNumberError.length === 0 &&
      expMonthError.length === 0 &&
      expYearError.length === 0 &&
      cvcError.length === 0 &&
      cardName.length > 0 &&
      cardNumber.length >= 15 &&
      cardNumber.length <=16 &&
      expMonth.length > 0 &&
      expYear.length > 0 &&
      cvc.length > 0
    ) {
      setIsComplete(true);
    } else {
      alert("Please fix form errors before proceeding");
    }
  };

  return (
    <div className="creditComponent">
      <div className="header">
        <BackCard
          name={cardName}
          number={cardNumber}
          month={expMonth}
          year={expYear}
          cvc={cvc}
        />
      </div>
      {!isComplete && (
        <form onSubmit={completeHandler}>
          <div>
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input
              id="name"
              type="text"
              className={cardNameError.length > 0 ? "error" : ""}
              placeholder="  e.g. Jane Appleseed"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            ></input>
            <div className={cardNameError.length > 0 ? "error-text" : ""}>
              {cardNameError}
            </div>
          </div>
          <div>
            <label htmlFor="number">CARD NUMBER</label>
            <input
              id="number"
              type="number"
              className={cardNumberError.length > 0 ? "error" : ""}
              placeholder="  e.g. 1234 5678 9123 0000"
              onChange={numberChangeHandler}
              onBlur={numberBlurHandler}
            ></input>
            <div className={cardNumberError.length > 0 ? "error-text" : ""}>
              {cardNumberError}
            </div>
          </div>
          <div className="form__info">
            <label className="form__exp" htmlFor="month">
              EXP DATE
            </label>
            <label htmlFor="year" className="form__exp">
              (MM/YY)
            </label>
            <label htmlFor="cvc" className="form__cvc">
              CVC
            </label>
            <input
              id="month"
              type="number"
              className={`form__exp ${
                expMonthError.length > 0 ? " error" : ""
              }`}
              onChange={expMonthChangeHandler}
              onBlur={expMonthBlurHandler}
              placeholder="  MM"
            ></input>
            <input
              className={`form__exp ${expYearError.length > 0 ? " error" : ""}`}
              type="number"
              id="year"
              placeholder="  YY"
              onChange={expYearChangeHandler}
              onBlur={expYearBlurHandler}
            ></input>
            <input
              type="number"
              id="cvc"
              className={`form__cvc ${cvcError.length > 0 ? "error" : ""}`}
              placeholder="  e.g. 123"
              onChange={cvcChangeHandler}
              onBlur={cvcBlurHandler}
            ></input>
            <div
              className={`form__exp ${
                expMonthError.length > 0 ? "error-text" : ""
              }`}
            >
              {expMonthError}
            </div>
            <div
              className={`form__exp ${
                expYearError.length > 0 ? "error-text" : ""
              }`}
            >
              {expYearError}
            </div>
            <div
              className={`form__cvc ${cvcError.length > 0 ? "error-text" : ""}`}
            >
              {cvcError}
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      )}
      {isComplete && <Complete resetForm={resetForm}/>}
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/kob112358">
            Eric Kobliska
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
