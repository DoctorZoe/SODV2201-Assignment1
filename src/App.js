import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import Landing from "./pages/LandingPage";
import StudentPage from "./pages/StudentPage";

import ContactForm from "./components/ContactForm";
import CreateCourse from "./components/CreateCourse";
import DeleteCourse from "./components/DeleteCourse";
import Header from "./components/Header";

import "./index.css";
import DisplayArray from "./components/DisplayArray";

const App = () => {
  //Baseline courseData as a starting point
  const [courseData, setCourseData] = useState([
    {
      courseCode: "PM111",
      courseName: "Intro to Project Management",
      courseTerm: 1,
      courseStartDate: "2022-09-06",
      courseEndDate: "2022-12-16",
    },
    {
      courseCode: "PF111",
      courseName: "C++ Programming Fundamentals",
      courseTerm: 1,
      courseStartDate: "2022-09-06",
      courseEndDate: "2022-12-16",
    },
    {
      courseCode: "CM111",
      courseName: "Computer Maintenance",
      courseTerm: 1,
      courseStartDate: "2022-09-06",
      courseEndDate: "2022-12-16",
    },
    {
      courseCode: "IS111",
      courseName: "Information Security",
      courseTerm: 1,
      courseStartDate: "2022-09-06",
      courseEndDate: "2022-12-16",
    },
    {
      courseCode: "NET222",
      courseName: "Networking",
      courseTerm: 2,
      courseStartDate: "2023-01-09",
      courseEndDate: "2023-04-21",
    },
    {
      courseCode: "WEB222",
      courseName: "Web Technology",
      courseTerm: 2,
      courseStartDate: "2023-01-09",
      courseEndDate: "2023-04-21",
    },
    {
      courseCode: "PM222",
      courseName: "Project Management",
      courseTerm: 2,
      courseStartDate: "2023-01-09",
      courseEndDate: "2023-04-21",
    },
    {
      courseCode: "PM333",
      courseName: "Intermediate Project Management",
      courseTerm: 3,
      courseStartDate: "2023-10-04",
      courseEndDate: "2023-12-15",
    },
    {
      courseCode: "PF333",
      courseName: "Advanced C++ Programming Fundamentals",
      courseTerm: 3,
      courseStartDate: "2023-10-04",
      courseEndDate: "2023-12-15",
    },
    {
      courseCode: "CM333",
      courseName: "Advanced Computer Maintenance",
      courseTerm: 3,
      courseStartDate: "2023-10-04",
      courseEndDate: "2023-12-15",
    },
    {
      courseCode: "IS333",
      courseName: "Advanced Information Security",
      courseTerm: 3,
      courseStartDate: "2023-10-04",
      courseEndDate: "2023-12-15",
    },
    {
      courseCode: "NET444",
      courseName: "Advanced Networking",
      courseTerm: 4,
      courseStartDate: "2024-01-08",
      courseEndDate: "2024-04-19",
    },
    {
      courseCode: "WEB444",
      courseName: "Advanced Web Technology",
      courseTerm: 4,
      courseStartDate: "2024-01-08",
      courseEndDate: "2024-04-19",
    },
    {
      courseCode: "PR444",
      courseName: "Advanced Project Management",
      courseTerm: 4,
      courseStartDate: "2024-01-08",
      courseEndDate: "2024-04-19",
    },
  ]);

  //Add a course to courseData
  const addCourseHandler = (newCourse) => {
    let repeat = false; //For notifying of duplicate courseCodes

    courseData.forEach((course) => {
      if (
        course.courseCode.toLowerCase() === newCourse.courseCode.toLowerCase()
      ) {
        //Checking for duplicate courseCodes
        repeat = true;
        alert("Cannot have two courses with same course code!");
      }
    });

    if (!repeat) {
      setCourseData((prevState) => {
        return [...prevState, newCourse];
      });
      alert(
        "Course " +
          newCourse.courseCode +
          ", " +
          newCourse.courseName +
          " has been added."
      );
    }
  };

  //Delete a course from courseData
  const deleteCourseHandler = (courseToDelete) => {
    const course = courseData.find(
      (course) => course.courseCode === courseToDelete
    );

    setCourseData(
      courseData.filter((course) => course.courseCode !== courseToDelete)
    );

    alert(
      course.courseCode + ", " + course.courseName + " - successfully deleted."
    );
  };

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="student" element={<StudentPage />}>
          <Route path="view" />
          <Route
            path="search"
            element={<DisplayArray courseCode={courseData} />}
          />
          <Route path="signup" />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="admin" element={<AdminPage />}>
          <Route path="search" />
          <Route
            path="add"
            element={<CreateCourse onAddCourse={addCourseHandler} />}
          />
          <Route
            path="delete"
            element={
              <DeleteCourse
                courses={courseData}
                onDeleteCourse={deleteCourseHandler}
              />
            }
          />
          <Route path="registered-students" />
          <Route path="questions" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
