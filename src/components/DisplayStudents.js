import React, { useState } from "react";

const DisplayStudent = (props) => {
  const [studentList, setStudentList] = useState(props.students);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courseChangeHandler = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="wrapper">
      <form className="tableContainer">
        <div>
          Course:{" "}
          <select onChange={courseChangeHandler}>
            <option value="">Pick a Course</option>
            {props.courses
              .sort(
                (course1, course2) =>
                  course1.courseTerm
                    .toString()
                    .localeCompare(course2.courseTerm.toString()) ||
                  course1.courseCode > course2.courseCode
              )
              .map((course) => (
                <option value={course.courseCode} key={course.courseCode}>
                  {course.courseCode + ", " + course.courseName}
                </option>
              ))}
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>DoB</th>
              <th>Department</th>
              <th>Program</th>
              <th>Student ID</th>
              <th>Registered Courses</th>
            </tr>
          </thead>
          <tbody>
            {studentList
              .filter((student) =>
                student.registeredCourses.some(course => course.courseCode === selectedCourse || selectedCourse === "")
              )
              .map((student) => (
                <tr key={student.studentID}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.dateOfBirth}</td>
                  <td>{student.department}</td>
                  <td>{student.program}</td>
                  <td>{student.studentID}</td>
                  <td style={{ whiteSpace: "pre" }}>
                    {student.registeredCourses.map(
                      (course) =>
                        course.courseCode + ": " + course.courseName + "\n"
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default DisplayStudent;
