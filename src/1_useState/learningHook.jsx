import React from "react";
import { useState } from "react";

function Learning_useState() {

  const [name, setName] = useState("JavaScript");

  const changeLanguage = () => {
    setName("React");
    console.log(name);
  };

  return (
    <>
      <h1>I am Learning {name}!</h1>
      <button onClick={changeLanguage}>Add new </button>
    </>
  );
}

export default Learning_useState;
