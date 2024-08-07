import React, { useRef } from "react";

export default function Learning3_useRef() {
  const btnRef = useRef(null);

  const handleColor = ()=>{
    btnRef.current.style.color ="red"
  }
  const handleRemove = () => {
    btnRef.current.style.display = "none";
  };

  const handleShow = ()=>{
    btnRef.current.style.display = "block"
  }
  
  return (
    <>
      <h1>learning useRef</h1>
      <h2 ref={btnRef}>Hiii I am a Paragraph</h2>
      <div>
        <button onClick={handleColor}>color Red</button> &nbsp;
        <button onClick={handleRemove}>Remove msg</button> &nbsp;
        <button onClick={handleShow}>Show msg</button>
      </div>
    </>
  );
}
