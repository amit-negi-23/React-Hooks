import React, { useEffect, useState } from "react";

export default function Learning2_useEffect() {
  const [count, setCount] = useState(1);

  // 1) works with first render and every re-render 
  useEffect(()=>{
    console.log("Ist useEffect: ", "Component mounted!",count)
  });



  // 2) works only with first render 
  useEffect(()=>{
    console.log("2st useEffect: ", "Component mounted!",count)
  },[])



  // 3) works with first render and only when the state variable of dependency array change 
  useEffect(()=>{
    console.log("3rd useEffect: ", "Component mounted!", count)
  },[count])
  return (
    <>
      <h1>useEffect multiple cases</h1>
      <button onClick={() => {setCount(count + 1)}}> change </button>
    </>
  );
}
