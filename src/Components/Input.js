import React, { useState } from "react";
import Card from "./Card";
import styles from "./Input.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const Input = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);

    // props.onInputChange(name);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    // props.onInputChange(age);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (i.e. > 0)",
      });
      return;
    }
    props.onInputChange(name, age);
    setName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
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
          <input
            id="inputName"
            type="text"
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="inputAge">Enter your age (Years)</label>
          <input
            id="inputAge"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};
export default Input;
