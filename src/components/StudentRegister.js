import React, { useState } from 'react';

var studentInfoArray = [];
// var activeStudent;

function StudentRegister() {
  const [student, updateStudentInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    department: '',
    program: '',
    studentID: '',
    username: '',
    password: '',
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Name: </h2>
        <input
          type="text"
          placeholder="First Name"
          value={updateStudentInfo.firstName}
          onChange={e =>
            updateStudentInfo({ ...student, firstName: e.target.value })
          }
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={student.lastName}
          onChange={e =>
            updateStudentInfo({ ...student, lastName: e.target.value })
          }
        />
        <br></br>

        <h2>Contact Information: </h2>
        <input
          type="text"
          placeholder="Email "
          value={student.email}
          onChange={e =>
            updateStudentInfo({ ...student, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Phone "
          value={student.phone}
          onChange={e =>
            updateStudentInfo({ ...student, phone: e.target.value })
          }
        />
        <br></br>

        <h2>Date of Birth: </h2>
        <input
          type="text"
          placeholder="Year"
          value={student.birthYear}
          onChange={e =>
            updateStudentInfo({ ...student, birthYear: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Month (Numeric):"
          value={student.birthMonth}
          onChange={e =>
            updateStudentInfo({ ...student, birthMonth: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Day (Numeric): "
          value={student.birthDay}
          onChange={e =>
            updateStudentInfo({ ...student, birthDay: e.target.value })
          }
        />
        <br></br>

        <h2>Education Information: </h2>

        <input
          type="text"
          placeholder="Enter department"
          value={student.department}
          onChange={e =>
            updateStudentInfo({ ...student, department: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter program "
          value={student.program}
          onChange={e =>
            updateStudentInfo({ ...student, program: e.target.value })
          }
        />
        <br></br>

        <h2>Account Information: </h2>
        <input
          type="text"
          placeholder="Enter username "
          value={student.username}
          onChange={e =>
            updateStudentInfo({ ...student, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter password "
          value={student.password}
          onChange={e =>
            updateStudentInfo({ ...student, password: e.target.value })
          }
        />

        <br></br>

        <button type="submit" onClick={() => SubmitRegistration(student)}>
          Register
        </button>
      </form>
    </>
  );
}

function handleSubmit(event) {
  event.preventDefault();
}

function SubmitRegistration(student) {
  var isValid = true;

  //Input Validations
  if (student.firstName === '') {
    isValid = false;
    console.log('Please enter a first name!');
  }
  if (student.lastName === '') {
    console.log('Please enter a last name!');
    isValid = false;
  }
  if (student.email === '') {
    console.log('Please enter an email');
    isValid = false;
  }
  if (student.phone === '') {
    console.log('Please enter a phone number!');
    isValid = false;
  }
  if (student.year === '') {
    console.log('Please enter a year!');
    isValid = false;
  }
  if (student.month === '') {
    console.log('Please enter a month!');
    isValid = false;
  }
  if (student.day === '') {
    console.log('Please enter a day!');
    isValid = false;
  }
  if (student.department === '') {
    console.log('Please enter a department!');
    isValid = false;
  }
  if (student.program === '') {
    console.log('Please enter a program!');
    isValid = false;
  }
  if (student.username === '') {
    console.log('Please enter a username!');
    isValid = false;
  }
  if (student.password === '') {
    console.log('Please enter a password!');
    isValid = false;
  }

  student.studentID = GenerateNewStudentID();

  studentInfoArray.forEach(s => {
    if (student.username === s.username) {
      console.log('Username is already in use! please enter a different one');
      isValid = false;
    }
  });

  if (isValid) {
    console.log(
      'Succesfully registered new student: ' +
        student.firstName +
        ' ' +
        student.lastName +
        ', id: ' +
        student.studentID
    );
    studentInfoArray[studentInfoArray.length] = new StudentInfo(
      student.firstName,
      student.lastName,
      student.email,
      student.phone,
      student.year,
      student.month,
      student.day,
      student.department,
      student.program,
      student.id,
      student.username,
      student.password
    );
    console.log(studentInfoArray[studentInfoArray.length - 1]);
    console.log(studentInfoArray);
  } else {
    console.log('Something went wrong with the submit');
  }
}

class StudentInfo {
  constructor(
    first,
    last,
    email,
    phone,
    year,
    month,
    day,
    department,
    program,
    id,
    username,
    password
  ) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.phone = phone;
    this.year = year;
    this.month = month;
    this.day = day;
    this.department = department;
    this.program = program;
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

function GenerateNewStudentID() {
  //#TODO search database to make sure ID is unique

  //Generate random number between 000000 - 999999

  return Math.floor(Math.random() * 999999);
}

export default StudentRegister;
