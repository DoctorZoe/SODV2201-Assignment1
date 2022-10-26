import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function StudentRegister(props) {
  const navigate = useNavigate();
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
    registeredCourses: [],
  });

  function handleSubmit(event) {
    event.preventDefault();

    //Input Validations
    var isValid = true;

    props.students.forEach((s) => {
      console.log("test loop");
      console.log(s);
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
        password: "",
        registeredCourses: [],
      });
      navigate('/')
    } else {
      console.log("Something went wrong with the submit");
    }

    function GenerateNewStudentID() {
      var tempID;

      var isUniqueStudentID = false;

      //This loop runs and keeps generating ids until a unique id is generated.

      while (!isUniqueStudentID) {
        isUniqueStudentID = true;

        //Generate random number between 000000 - 999999

        tempID = Math.floor(Math.random() * 999999);

        props.students.forEach((s) => {
          //Debugging logs

          //console.log('test loop')

          //console.log(s)

          if (tempID === s.studentID) {
            isValid = false;

            console.log("id was repeated: generating new one.");
          }
        });
      }

      console.log("Succesfully generated a new unique id: " + tempID);

      return tempID;
    }
  }

  return (
    <div className="wrapper">
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

        <label>Select Deparment: </label>
        <select
          required
          value={student.department}
          onChange={(e) =>
            updateStudentInfo({ ...student, department: e.target.value })
          }
        >
          <option value=""></option>
          <option value="IT">IT</option>
          <option value="Other">Other</option>
        </select>
        <label>Select Program: </label>
        <select
          required
          value={student.program}
          onChange={(e) =>
            updateStudentInfo({ ...student, program: e.target.value })
          }
        >
          <option value=""></option>
          <option value="Diploma(2 Years)">Diploma(2 Years)</option>
          <option value="Post-Diploma (1 Year)">Post-Diploma (1 Year)</option>
          <option value="Certificate (3 Months)">Certificate (3 Months)</option>
          <option value="Certificate (6 Months)">Certificate (6 Months)</option>
          <option value="Upgrade">Upgrade</option>
          <option value="Other">Other</option>
        </select>
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
    </div>
  );
}

export default StudentRegister;
