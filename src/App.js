import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import Landing from "./pages/LandingPage";
import StudentPage from "./pages/StudentPage";

import ContactForm from "./components/ContactForm";
import CreateCourse from "./components/CreateCourse";
import DeleteCourse from "./components/DeleteCourse";
import DisplayArray from "./components/DisplayArray";
import DisplayStudentCourses from "./components/DisplayStudentCourses";
import DisplayStudent from "./components/DisplayStudents";
import DisplayQuestions from "./components/DisplayQuestions";
import EnrollCourse from "./components/EnrollCourse";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StudentRegister from "./components/StudentRegister";

import "./index.css";

const App = () => {
  //Baseline courseData as a starting point
  const [courseData, setCourseData] = useState([
    {
      courseCode: "PM111",
      courseName: "Intro to Project Management",
      courseTerm: 1,
      courseStartDate: "2022-09-06",
      courseEndDate: "2022-12-16",
      courseFees: "676.67",
      courseDescription:
        "This is a course where we will introduce you to basic Project Management concepts.",
    },
    {
      courseCode: "PF111",
      courseName: "C++ Programming Fundamentals",
      courseTerm: 1,
      courseStartDate: "2022-09-06",
      courseEndDate: "2022-12-16",
      courseFees: "785.15",
      courseDescription:
        "This is a course where we will introduce you to basic C++ Programming fundamentals.",
    },
    {
      courseCode: "CM111",
      courseName: "Computer Maintenance",
      courseTerm: 1,
      courseStartDate: "2022-09-06",
      courseEndDate: "2022-12-16",
      courseFees: "457.49",
      courseDescription:
        "In this course you will learn about the basics of computer maintenance.",
    },
    {
      courseCode: "IS111",
      courseName: "Information Security",
      courseTerm: 1,
      courseStartDate: "2022-09-06",
      courseEndDate: "2022-12-16",
      courseFees: "647.77",
      courseDescription:
        "In this course you will learn about the basics of Information Security.",
    },
    {
      courseCode: "NET222",
      courseName: "Networking",
      courseTerm: 2,
      courseStartDate: "2023-01-09",
      courseEndDate: "2023-04-21",
      courseFees: "533.66",
      courseDescription:
        "In this course you will be introduced to the basics of networking and how to setup a home network.",
    },
    {
      courseCode: "WEB222",
      courseName: "Web Technology",
      courseTerm: 2,
      courseStartDate: "2023-01-09",
      courseEndDate: "2023-04-21",
      courseFees: "874.95",
      courseDescription:
        "In this course you will learn about the basics of web design and programming.",
    },
    {
      courseCode: "PM222",
      courseName: "Project Management",
      courseTerm: 2,
      courseStartDate: "2023-01-09",
      courseEndDate: "2023-04-21",
      courseFees: "788.87",
      courseDescription:
        "In this course you will dive deeper into the many aspects of project management.",
    },
    {
      courseCode: "PM333",
      courseName: "Intermediate Project Management",
      courseTerm: 3,
      courseStartDate: "2023-10-04",
      courseEndDate: "2023-12-15",
      courseFees: "877.78",
      courseDescription:
        "In this course you will study more specific aspects about project management specifically pertaining to software development.",
    },
    {
      courseCode: "PF333",
      courseName: "Advanced C++ Programming Fundamentals",
      courseTerm: 3,
      courseStartDate: "2023-10-04",
      courseEndDate: "2023-12-15",
      courseFees: "966.96",
      courseDescription:
        "In this course you will learn more advanced and in-depth features within the C++ programming language.",
    },
    {
      courseCode: "CM333",
      courseName: "Advanced Computer Maintenance",
      courseTerm: 3,
      courseStartDate: "2023-10-04",
      courseEndDate: "2023-12-15",
      courseFees: "579.89",
      courseDescription:
        "This course will go into more specific elements about computer maintenance.",
    },
    {
      courseCode: "IS333",
      courseName: "Advanced Information Security",
      courseTerm: 3,
      courseStartDate: "2023-10-04",
      courseEndDate: "2023-12-15",
      courseFees: "745.54",
      courseDescription:
        "In this course you will go into more specific detail pertaining to aspects of information security.",
    },
    {
      courseCode: "NET444",
      courseName: "Advanced Networking",
      courseTerm: 4,
      courseStartDate: "2024-01-08",
      courseEndDate: "2024-04-19",
      courseFees: "713.67",
      courseDescription:
        "In this course you will learn more advanced networking techniques and learn how to set up a mid-sized office network.",
    },
    {
      courseCode: "WEB444",
      courseName: "Advanced Web Technology",
      courseTerm: 4,
      courseStartDate: "2024-01-08",
      courseEndDate: "2024-04-19",
      courseFees: "634.50",
      courseDescription:
        "In this course you will learn how to create websites using react as well as back-end logic and setting up a server.",
    },
    {
      courseCode: "PR444",
      courseName: "Advanced Project Management",
      courseTerm: 4,
      courseStartDate: "2024-01-08",
      courseEndDate: "2024-04-19",
      courseFees: "533.24",
      courseDescription:
        "In this course you will learn advanced techniques about project management as well as create your own project idea.",
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

  // Display student questions from ContactForm data
  const [studentQuestions, setStudentQuestions] = useState([]);

  const submitFormHandler = (submittedFormInput) => {
    setStudentQuestions((prevState) => {
      return [...prevState, submittedFormInput];
    });
    // console.log(studentQuestions);
  };

  const [registeredStudents, setRegisteredStudents] = useState([]);

  const addNewStudent = (newStudent) => {
    setRegisteredStudents((prevState) => {
      return [...prevState, newStudent];
    });
    console.log("in app");
    console.log(registeredStudents);
  };

  const enrollCourseHandler = (enrolledCourses) => {
    setRegisteredStudents(
      registeredStudents.map((student) => {
        if (student.username === currentUser.username) {
          return {
            ...student,
            registeredCourses: [...student.registeredCourses, enrolledCourses],
          };
        } else return { ...student };
      })
    );
    console.log("in app");
    console.log(currentUser.username);
    console.log(enrolledCourses);
    console.log(registeredStudents);
  };

  const [registeredAdmins, setRegisteredAdmins] = useState([
    { username: "Admin", password: "password" },
  ]);

  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
    profileType: "",
  });

  const updateUserHandler = (currentUser) => {
    setCurrentUser(currentUser);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={
            <Landing
              students={registeredStudents}
              admins={registeredAdmins}
              updateUser={updateUserHandler}
            />
          }
        />
        <Route path="student" element={<StudentPage />}>
          <Route
            path="view"
            element={
              <DisplayStudentCourses
                currentUser={currentUser}
                registeredStudents={registeredStudents}
              />
            }
          />
          <Route
            path="search"
            element={
              <>
                <DisplayArray courseCode={courseData} />
                <EnrollCourse
                  courseCode={courseData}
                  currentUser={currentUser}
                  students={registeredStudents}
                  enrollCourse={enrollCourseHandler}
                />
              </>
            }
          />
          <Route
            path="signup"
            element={
              <StudentRegister
                onSignup={addNewStudent}
                students={registeredStudents}
              />
            }
          />
          <Route
            path="form"
            element={<ContactForm onSubmitForm={submitFormHandler} />}
          />
        </Route>
        <Route path="admin" element={<AdminPage />}>
          <Route
            path="search"
            element={<DisplayArray courseCode={courseData} />}
          />
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
          <Route
            path="registered-students"
            element={
              <DisplayStudent
                students={registeredStudents}
                courses={courseData}
              />
            }
          />
          <Route
            path="questions"
            element={<DisplayQuestions studentQuestions={studentQuestions} />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
