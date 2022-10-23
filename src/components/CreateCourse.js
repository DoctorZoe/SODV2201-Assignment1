import React, { useState } from 'react';

const CreateCourse = props => {
  //All info about a course
  const [enteredCode, setEnteredCode] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredTerm, setEnteredTerm] = useState('');
  const [enteredStartDate, setEnteredStartDate] = useState('');
  const [enteredEndDate, setEnteredEndDate] = useState('');

  /*** Setting entered values based on onChange events ***/
  const codeChangeHandler = event => {
    setEnteredCode(event.target.value);
  };

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const termChangeHandler = event => {
    setEnteredTerm(event.target.value);
  };

  const startDateChangeHandler = event => {
    setEnteredStartDate(event.target.value);
  };

  const endDateChangeHandler = event => {
    setEnteredEndDate(event.target.value);
  };

  //Send the newCourse info to be added to parent element
  const submitHandler = event => {
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
    setEnteredCode('');
    setEnteredName('');
    setEnteredTerm('');
    setEnteredStartDate('');
    setEnteredEndDate('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Course Code</label>
        <input
          type="text"
          value={enteredCode}
          placeholder="Course Code"
          required
          onChange={codeChangeHandler}
        ></input>
        <br />
        <label>Course Name</label>
        <input
          type="text"
          value={enteredName}
          placeholder="Course Name"
          required
          onChange={nameChangeHandler}
        ></input>
        <br />
        <label>Course Term</label>
        <input
          type="number"
          value={enteredTerm}
          placeholder="Course Term"
          required
          min={1}
          max={4}
          onChange={termChangeHandler}
        ></input>
        <br />
        <label>Start Date</label>
        <input
          type="date"
          value={enteredStartDate}
          required
          onChange={startDateChangeHandler}
        ></input>
        <br />
        <label>End Date</label>
        <input
          type="date"
          value={enteredEndDate}
          required
          onChange={endDateChangeHandler}
        ></input>
        <br />
        <button type="submit">Create New Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
