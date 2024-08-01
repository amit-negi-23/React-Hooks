import React, { useState } from "react";

export default function Learning3_useState() {

  const [amount, setAmout] = useState(0);

  const handleIncrease = () => {
    setAmout((preVal) => {
      return preVal + 10;
    });
  };

  const handleDecrease = () => {
    setAmout((preVal) => preVal - 10);
  };

  const handleReset = () => {
    setAmout(0);
  };
  return (
    <>
      <h1>Amount : {amount}</h1>
      <div>
        <button onClick={handleIncrease}>Increase</button> &nbsp;
        <button onClick={handleDecrease}>Decrease</button> &nbsp;
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
