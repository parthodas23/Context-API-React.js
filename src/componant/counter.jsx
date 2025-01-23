import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/context";

const Counter=()=>{
    const countContext=useContext(CounterContext)
    return (
        <div>
            <button onClick={()=>{countContext.setCount(countContext.count+1)}}>Increment</button>
            <button onClick={()=>{countContext.setCount(countContext.count-1)}}>Decrement</button>
        </div>
    )
}

export default Counter