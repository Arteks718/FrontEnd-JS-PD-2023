import React, { useState, useEffect } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

export default function Calc() {
  const [x, setX] = useState(0);
  const handleInput = (event) => {
    setX(event.target.value);
  };

  return (
    <>
      <input type="number" name="number" value={x} onChange={handleInput} />
      <p>Component1</p>
      <Component1 x={x} setX={setX}></Component1>
      <p>Component2</p>
      <Component2 x={x} setX={setX}></Component2>
    </>
  );
}
