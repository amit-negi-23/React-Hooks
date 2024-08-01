import React, { useState } from "react";

export default function Learning5_useState() {
  
  const [formData, setFormData] = useState(initialState);
  
  function initialState() {
    return { name: "", email: "" };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(formData);
    setFormData(initialState)
  };

  const handleInput = (e)=>{
    setFormData((preVal)=>{
      return {...preVal, [e.target.name]: e.target.value}
    })
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h1>User Form with single handler</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            onChange={handleInput}
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            id="email"
            onChange={handleInput}
            value={formData.email}
          />
        </div>
        <button> Submit </button>
      </form>
    </>
  );
}
