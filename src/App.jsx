import React from "react";
import "./App.css";
import Counter from "./componant/counter";
import { CounterContext } from "./context/context";
import { useContext } from "react";

function App() {
  const countContext = useContext(CounterContext);
  console.log(countContext);

  return (
    <div>
      <h1>Count is {countContext.count}</h1>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
