import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const [btnStudentSelected, setBtnStudentSelected] = useState(false);
  const [btnAdminSelected, setBtnAdminSelected] = useState(false);
  const [btnSelected, setBtnSelected] = useState(false);

  const styleBtnStudent = () => {
    setBtnStudentSelected(true);
    setBtnAdminSelected(false);
    setBtnSelected(true);
  };

  const styleBtnAdmin = () => {
    setBtnAdminSelected(true);
    setBtnStudentSelected(false);
    setBtnSelected(true);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const updatePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let correctInfo = false;

    if (btnStudentSelected) {
      props.students.map((student) => {
        if (username.toLowerCase() === student.username.toLowerCase() && password === student.password) {
          props.updateUser({
            username: student.username,
            password: student.password,
            type: "student",
          });
          console.log("Logging in as student");
          //Send to student page
          navigate("/student/search");
          correctInfo = true;
        }
      });
    }

    if (btnAdminSelected) {
      props.admins.map((admin) => {
        if (username.toLowerCase() === admin.username.toLowerCase() && password === admin.password) {
            props.updateUser({
              username: admin.username,
              password: admin.password,
              type: "admin",
            });
          console.log("Logging in as admin");
          //Send to admin page
          navigate("/admin/search");
          correctInfo = true;
        }
      });
    }

    if(!correctInfo) alert("Incorrect username/password, please try again")
  };

  const displayedText = () => {
    if (!btnSelected) {
      return "Please Choose Student / Admin";
    } else if (btnStudentSelected) {
      return "Logging in as Student";
    } else if (btnAdminSelected) {
      return "Logging in as Admin";
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <button
          type="button"
          onClick={styleBtnStudent}
          className={btnStudentSelected ? "selectedBtn" : "btn"}
        >
          Student
        </button>
        <button
          type="button"
          onClick={styleBtnAdmin}
          className={btnAdminSelected ? "selectedBtn" : "btn"}
        >
          Admin
        </button>{" "}
        <br />
        <div className="row">
          Username:{" "}
          <input
            type="text"
            value={username}
            required
            onChange={updateUsernameHandler}
          />{" "}
          <br />
        </div>
        <div className="row">
          Password:{" "}
          <input
            type="password"
            value={password}
            required
            onChange={updatePasswordHandler}
          />{" "}
          <br />
        </div>
        <button
          className={btnSelected ? "submitBtn" : "submitBtnDisabled"}
          type="submit"
          disabled={btnSelected ? false : true}
        >
          Submit
        </button>{" "}
        <br />
        <p>{displayedText()}</p>
      </form>
    </div>
  );
};

export default Login;
