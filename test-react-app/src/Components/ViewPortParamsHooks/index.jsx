import React, { useState, useEffect } from "react";

export default function ViewPortParamsHooks() {
  const [x, setX] = useState(window.innerWidth);
  const [y, setY] = useState(window.innerHeight);

  const resizeWindow = () => {
    setX(window.innerWidth);
    setY(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
  }, []);
  return (
    <>
      <h1>width {x}</h1>
      <h1>heigth {y}</h1>
    </>
  );
}