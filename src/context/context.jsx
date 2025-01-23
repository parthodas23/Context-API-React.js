import React from "react";
import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const ContextProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterContext.Provider value={{ count, setCount }}>
        {props.children}
      </CounterContext.Provider>
    </div>
  );
};
