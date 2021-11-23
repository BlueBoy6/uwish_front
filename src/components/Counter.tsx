import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((store: any) => store.counter);

  return (
    <div className="Counter">
      <p>Counter value: {counter.value}</p>
      <p>
        <button onClick={() => dispatch({ type: "counter/decrement" })}>
          decrement
        </button>{" "}
        <button onClick={() => dispatch({ type: "counter/increment" })}>
          increment
        </button>{" "}
        <button onClick={() => dispatch({ type: "counter/increment-async" })}>
          increment-acync
        </button>
      </p>
    </div>
  );
}
