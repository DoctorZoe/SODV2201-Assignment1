import React, { useState } from "react";

function StudentRegister(props) {
  const [student, updateStudentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    department: "",
    program: "",
    studentID: "",
    username: "",
    password: "",
    registeredCourses: []
  });

  function handleSubmit(event) {
    event.preventDefault();
    
    //Input Validations
    var isValid = true;
    
    props.students.forEach((s) => {
      console.log('test loop')
      console.log(s)
      if (student.username === s.username) {
        alert("Username is already in use! please enter a different one");
        console.log("Username is already in use! please enter a different one");
        isValid = false;
      }
    });
  
    if (isValid) {
      student.studentID = GenerateNewStudentID();

      props.onSignup(student);
  
      console.log(
        "Succesfully registered new student: " +
          student.firstName +
          " " +
          student.lastName +
          ", id: " +
          student.studentID
      );
      console.log(student);

      updateStudentInfo({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "yyyy-mm-dd",
        department: "",
        program: "",
        studentID: "",
        username: "",
        password: ""
      });
    } else {
      console.log("Something went wrong with the submit");
    }

    function GenerateNewStudentID() {
      //#TODO search database to make sure ID is unique
    
      //Generate random number between 000000 - 999999
    
      return Math.floor(Math.random() * 999999);
    }    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Name: </h2>
        <input
          type="text"
          placeholder="First Name"
          value={student.firstName}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, firstName: e.target.value })
          }
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={student.lastName}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, lastName: e.target.value })
          }
        />
        <br></br>

        <h2>Contact Information: </h2>
        <input
          type="email"
          placeholder="Email "
          value={student.email}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Phone "
          value={student.phone}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, phone: e.target.value })
          }
        />
        <br></br>

        <h2>Date of Birth: </h2>
        <input
          type="date"
          value={student.dateOfBirth}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, dateOfBirth: e.target.value })
          }
        />
        <br></br>

        <h2>Education Information: </h2>

        <input
          type="text"
          placeholder="Enter department"
          value={student.department}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, department: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter program "
          value={student.program}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, program: e.target.value })
          }
        />
        <br></br>

        <h2>Account Information: </h2>
        <input
          type="text"
          placeholder="Enter username "
          value={student.username}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter password "
          value={student.password}
          required
          onChange={(e) =>
            updateStudentInfo({ ...student, password: e.target.value })
          }
        />

        <br></br>

        <button type="submit" className="submitBtn">
          Register
        </button>
      </form>
    </>
  );
}

export default StudentRegister;
