import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const StudentPage = () => {
  return (
    <div>
      <div className="info">
        <h1>Student/Course Page</h1>
        <br />
        <Link className="menu-link" to="/student/view">
          View Enrolled Courses
        </Link>
        <Link className="menu-link" to="/student/search">
          Search Courses
        </Link>
        <Link className="menu-link" to="/student/signup">
          Sign Up
        </Link>
        <Link className="menu-link" to="/student/form">
          Send Questions
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default StudentPage;
