import React, { useState } from "react";

export default function Learning4_useState() {
  const [formData, setFormData] = useState(initialState);

  function initialState() {
    return { name: "", email: "" };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(formData);
    setFormData(initialState);
  };

  const handleName = (e) => {
    setFormData((preVal) => {
      return { ...preVal, name: e.target.value };
    });
  };

  const handleEmail = (e) => {
    setFormData((preVal) => {
      return { ...preVal, email: e.target.value };
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h1>User Form</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            onChange={handleName}
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
            onChange={handleEmail}
            value={formData.email}
          />
        </div>
        <button> Submit </button>
      </form>
    </>
  );
}
