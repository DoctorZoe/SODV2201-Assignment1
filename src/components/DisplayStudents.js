import React, { useState } from "react";

const DisplayStudent = (props) => {
  const [studentList, setStudentList] = useState(props.students);

  return (
    <div>
      <form>
        <div>
          Course:{" "}
          <select>
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
            {props.students.map((student) => (
              <tr key={student.studentID}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.department}</td>
                <td>{student.program}</td>
                <td>{student.studentID}</td>
                <td>{student.registeredCourses.map(course => course + ', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default DisplayStudent;
