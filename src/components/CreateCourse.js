import React, { useState } from "react";

import "./CreateCourse.css";

const CreateCourse = (props) => {
  //All info about a course
  const [enteredCode, setEnteredCode] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredTerm, setEnteredTerm] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");

  /*** Setting entered values based on onChange events ***/
  const codeChangeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const termChangeHandler = (event) => {
    setEnteredTerm(event.target.value);
  };

  const startDateChangeHandler = (event) => {
    setEnteredStartDate(event.target.value);
  };

  const endDateChangeHandler = (event) => {
    setEnteredEndDate(event.target.value);
  };

  //Send the newCourse info to be added to parent element
  const submitHandler = (event) => {
    event.preventDefault();

    const newCourse = {
      courseCode: enteredCode,
      courseName: enteredName,
      courseTerm: enteredTerm,
      courseStartDate: enteredStartDate,
      courseEndDate: enteredEndDate,
    };

    props.onAddCourse(newCourse); //Called from parent to pass data

    //Reset to default values after form submission
    setEnteredCode("");
    setEnteredName("");
    setEnteredTerm("");
    setEnteredStartDate("");
    setEnteredEndDate("");
  };

  return (
    <div>
      <form className="font-sizing" onSubmit={submitHandler}>
        <h1 style={{ fontSize: "2rem" }}>Add a Course</h1>
        <br />
        <label>
          Course Code
          <input
            type="text"
            value={enteredCode}
            placeholder="Course Code"
            required
            className="input-box"
            onChange={codeChangeHandler}
          ></input>
        </label>
        <br />
        <label>
          Course Name
          <input
            type="text"
            value={enteredName}
            placeholder="Course Name"
            required
            className="input-box"
            onChange={nameChangeHandler}
          ></input>
        </label>
        <br />
        <label>
          Course Term
          <input
            type="number"
            value={enteredTerm}
            placeholder="Course Term"
            required
            min={1}
            max={4}
            className="input-box"
            onChange={termChangeHandler}
          ></input>
        </label>
        <br />
        <label>
          Start Date
          <input
            type="date"
            value={enteredStartDate}
            required
            className="input-box"
            onChange={startDateChangeHandler}
          ></input>
        </label>
        <br />
        <label>
          End Date
          <input
            type="date"
            value={enteredEndDate}
            required
            className="input-box"
            onChange={endDateChangeHandler}
          ></input>
        </label>
        <br />
        <button className="submitBtn" type="submit">
          Create New Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
