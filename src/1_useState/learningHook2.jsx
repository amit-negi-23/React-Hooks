import React, { useState } from "react";

export default function Learning2_useState() {

  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  
  return (
    <>
      <h1>Count Value: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </>
  );
}
