import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="wrapper">
      <div className="info">
        <h1>Admin Page</h1>
        <br />
        <Link className="menu-link" to="/admin/search">
          Search
        </Link>
        <Link className="menu-link" to="/admin/add">
          Add
        </Link>
        <Link className="menu-link" to="/admin/delete">
          Delete
        </Link>
        <Link className="menu-link" to="/admin/registered-students">
          Registered Students
        </Link>
        <Link className="menu-link" to="/admin/questions">
          Questions
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default AdminPage;
