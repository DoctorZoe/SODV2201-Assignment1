import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const EnrollCourse = (props) => {
  const [selectedCourse, setSelectedCourse] = useState();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

  const selectedHandler = (event) => {
    setSelectedCourse(event.target.value);
  };

  const enrollCourse = (event) => {
    event.preventDefault();
    if (props.currentUser.username === "") {
      alert("You must register first!")
      return navigate('/student/signup')
    }
    let newCourse;
    if (!enrolledCourses.some(course => course.courseName === selectedCourse)) {
      props.courseCode.map((course) => {
        if (course.courseName === selectedCourse) {
          newCourse = course;
        }
      });
      setEnrolledCourses((prevState) => [...prevState, newCourse]);
    }
    else return alert('You have already registered for this course!');
    props.enrollCourse(newCourse);
    console.log(enrolledCourses);
  };

  useEffect(() => {
    let courses;
      props.students.map((student) => {
        if (student.username === props.currentUser.username)
          courses = student.registeredCourses;
      })
      if (courses != undefined) {
        setEnrolledCourses(courses);
      }
  },[]);

  return (
    <div>
      {console.log("onload")}
      {console.log(enrolledCourses)}
      <div>
        <form onSubmit={enrollCourse}>
          <label>Enroll in Course: </label>
          <select required onChange={selectedHandler}>
            <option value=""></option>
            {props.courseCode.map((courseCode) => (
              <option value={courseCode.courseName} key={courseCode.courseName}>
                {courseCode.courseName}
              </option>
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
