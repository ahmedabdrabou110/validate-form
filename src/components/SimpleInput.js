// import { useState } from "react";
import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  // NAME INPUT
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  // EMAIL INPUT
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  //   const [enteredName, setEnteredName] = useState("");
  //   const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //   const [enteredEmail, setEnteredEmail] = useState("");
  //   const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //   const enteredNameIsValid = enteredName.trim() !== "";
  //   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  //   const enteredEmailIsValid = enteredEmail.includes("@");
  //   const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (nameInputIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //   nameInputChangeHandler();

  //   const nameInputChangeHandler = (event) => {
  //     setEnteredName(event.target.value);
  //   };

  //   const emailInputChangeHandler = (event) => {
  //     setEnteredEmail(event.target.value);
  //   };

  //   nameInputBlurHandler();

  //   const nameInputBlurHandler = (event) => {
  //     setEnteredNameTouched(true);
  //   };

  //   const emailInputBlurHandler = (event) => {
  //     setEnteredEmailTouched(true);
  //   };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!nameInputIsValid) {
      return;
    }

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetName();

    resetEmail();
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);

    console.log(enteredName, enteredEmail);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
