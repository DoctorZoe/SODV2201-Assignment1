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
    <div>
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
          <label>Currently Enrolled in: </label>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Term</th>
                <th>StartDate</th>
                <th>StartDate</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((courses) => (
                <tr key={courses.courseCode}>
                  <td>{courses.courseCode}</td>
                  <td>{courses.courseName}</td>
                  <td>{courses.courseTerm}</td>
                  <td>{courses.courseStartDate}</td>
                  <td>{courses.courseEndDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </form>
      </div>
    </div>
    
  );
};

export default EnrollCourse;