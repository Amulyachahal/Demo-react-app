import React, { useState, useRef } from "react";
import Card from "./Card";
import styles from "./Input.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const Input = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const submitHandler = (event) => {
    const userName = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (i.e. > 0)",
      });
      return;
    }
    props.onInputChange(userName, userAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");

  //   const nameChangeHandler = (event) => {
  //     setName(event.target.value);

  //     // props.onInputChange(name);
  //   };
  //   const ageChangeHandler = (event) => {
  //     setAge(event.target.value);
  //     // props.onInputChange(age);
  //   };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="inputName">Enter your name</label>
          <input id="inputName" type="text" ref={nameInputRef} />
          <label htmlFor="inputAge">Enter your age (Years)</label>
          <input id="inputAge" type="number" ref={ageInputRef} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};
export default Input;
