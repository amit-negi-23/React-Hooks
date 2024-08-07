import React, { useRef } from "react";

export default function Learning_useRef() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus()
  }
  return (
    <>
      <h1>Learning useRef Hook</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus the input</button>
      </div>
    </>
  );
}
