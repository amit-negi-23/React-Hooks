import React, { useEffect, useState } from "react";

export default function Learning_useEffect() {
  const [count, setCount] = useState(1);

  useEffect(()=>{
    console.log("i am working well: ",count) 
  });

  return (
    <>
      <h1>Learning useeffect Hook</h1>
      <button onClick={() => {setCount(count + 1)}}> change </button>
    </>
  );
}
