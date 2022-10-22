import React, { useState } from "react";
import CreateCourse from "./Components/CreateCourse";
import DeleteCourse from "./Components/DeleteCourse";

function App() {
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
      if (course.courseCode.toLowerCase() === newCourse.courseCode.toLowerCase()) { //Checking for duplicate courseCodes
        repeat = true;
        alert("Cannot have two courses with same course code!");
      }
    });

    if (!repeat) {
      setCourseData((prevState) => {
        return [...prevState, newCourse];
      });
    }
  };

  //Delete a course from courseData
  const deleteCourseHandler = (courseToDelete) => {
    setCourseData(
      courseData.filter((course) => course.courseCode !== courseToDelete)
    );
  };

  //To hold the contactFormData sent by users to the admin
  const [contactFormData, setContactFormData] = useState([]);

  //To hold a list of students who have registered and all their info
  const [registeredStudents, setRegisteredStudents] = useState([]);

  return (
    <>
      {/* To be added into correct pages later on... */}
      {/* <CreateCourse onAddCourse={addCourseHandler} />
      <DeleteCourse
        selected={courseData[0].courseCode}
        courses={courseData}
        onDeleteCourse={deleteCourseHandler}
      /> */}
    </>
  );
}

export default App;
