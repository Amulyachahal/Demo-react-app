import "./App.css";
import React, { useState } from "react";
import Input from "./Components/Input";
import OutputList from "./Components/OutputList";

// const data = [
//   { name: "Mark", age: 23 },
//   { name: "Katherina", age: 28 },
// ];
function App() {
  const [state, setState] = useState([
    { name: "Mark", age: 23 },
    { name: "Katherina", age: 28 },
  ]);
  // const [message, setMessage] = useState("");
  const inputHandler = (name, age) => {
    const enteredData = { name: name, age: age };
    setState((previousData) => {
      const updatedData = [...previousData, enteredData];
      // console.log(updatedData);
      return updatedData;
    });
    // console.log(state);
    // return data;
    // return [...data]
    // console.log("in App js", name, age);
  };

  return (
    <div>
      <Input onInputChange={inputHandler} />
      <OutputList items={state} />
    </div>
  );
}

export default App;
