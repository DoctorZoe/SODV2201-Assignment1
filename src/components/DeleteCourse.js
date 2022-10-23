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
      <form style={{ fontSize: "1.5rem" }} onSubmit={submitHandler}>
        <h1 style={{ fontSize: "2rem" }}>Delete a Course</h1>
        <br />
        <label>Course to Delete: </label>
        <select
          required
          onChange={selectedCourseHandler}
          style={{ fontSize: "1.25rem" }}
        >
          <option value="">Pick a Course</option>
          {props.courses
            .sort(
              (course1, course2) =>
                course1.courseTerm
                  .toString()
                  .localeCompare(course2.courseTerm.toString()) ||
                course1.courseName > course2.courseName
            )
            .map((course) => (
              <option value={course.courseCode} key={course.courseCode}>
                {course.courseCode + ", " + course.courseName}
              </option>
            ))}
        </select>
        <br />
        <button
          className="submitBtn"
          type="submit"
          style={{ fontSize: "1.25rem" }}
        >
          Delete Course
        </button>
      </form>
    </div>
  );
};

export default DeleteCourse;
