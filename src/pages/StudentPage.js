import React from 'react';
import { Link } from 'react-router-dom';

const StudentPage = () => {
  return (
    <div>
      <div className="info">
        <h1>Student/Course Page</h1>
        <br />
        <Link to="/student/view">View Courses |</Link>
        <Link to="/student/search"> Search Courses |</Link>
        <Link to="/student/signup"> Sign Up |</Link>
        <Link to="/student/form"> Send Questions </Link>
      </div>
    </div>
  );
};

export default StudentPage;
