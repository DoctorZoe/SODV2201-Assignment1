import React from "react";
import { useState } from "react";
let enrolledCourses = [];

const EnrollCourse = (props) => {
  
  const [selectedCourse, setSelectedCourse] = useState();

  const selectedHandler = (event) => {
    setSelectedCourse(event.target.value)
    console.log(enrolledCourses);
  };

  const enrollCourse = (event) => {
    event.preventDefault();
    if (!enrolledCourses.includes(selectedCourse)) enrolledCourses.push(selectedCourse);
    console.log(selectedCourse)
    console.log(enrolledCourses)
  };

  return (
    <div className="wrapper">
      <div>
        <form onSubmit={enrollCourse}>
          <label>Enroll in Course: </label>
          <select required onChange={selectedHandler}>
            <option value= ""></option>
            {props.courseCode.map((courseCode) => (
                <option value={courseCode.courseName} key={courseCode.courseName}>{courseCode.courseName}</option>
              ))}
          </select>
          <button type="submit"> Ok</button>
          <br></br>
          <br></br>                    
        </form>
      </div>
    </div>
    
  );
};

export default EnrollCourse;