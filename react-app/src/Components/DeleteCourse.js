import React, { useState } from "react";

const DeleteCourse = (props) => {
  //Currently selected course
  const [selectedCourse, setSelectedCourse] = useState();

  //Updating currently selected course based on onChange event
  const selectedCourseHandler = (event) => {
    setSelectedCourse(event.target.value);
  };

  //Send the selectedCourse to the parent element to be removed from courseData
  const submitHandler = (event) => {
    event.preventDefault();

    props.onDeleteCourse(selectedCourse); //Called from parent to pass data
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Course to Delete: </label>
        <select required onChange={selectedCourseHandler}>
          <option value="">Pick a Course</option>
          {props.courses.map((course) => (
            <option value={course.courseCode} key={course.courseCode}>
              {course.courseCode + ", " + course.courseName}
            </option>
          ))}
        </select>
        <button type="submit">Delete Course</button>
      </form>
    </div>
  );
};

export default DeleteCourse;
