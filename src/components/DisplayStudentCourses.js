import React from "react";
import { useState } from "react";

const DisplayArray = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const searchGo = (event) => {
    setSearchValue(event.target.value);
  };

  var currentStudent = props.registeredStudents.find(student => student.username === props.currentUser.username)
  
  console.log(props.currentUser.username)
  
  if(!props.currentUser.username == "") var arr = currentStudent.registeredCourses;
  if(props.currentUser.username == "") var arr = [];

  const resultArr = [...arr].filter((course) =>
    (course.courseName + course.courseCode)
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <form>
        <label>Search Course: </label>
        <input type="text" value={searchValue} onChange={searchGo} />
        <div>
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
              {resultArr
                .sort(
                  (course1, course2) =>
                    course1.courseTerm
                      .toString()
                      .localeCompare(course2.courseTerm.toString()) ||
                    course1.courseCode > course2.courseCode
                )
                .map((courses) => (
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
        </div>
      </form>
    </div>
  );
};

export default DisplayArray;
