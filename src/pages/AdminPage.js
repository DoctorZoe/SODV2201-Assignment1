import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
      <div className="info">
        <h1>Admin Page</h1>
        <br />
        <Link to="/admin/search">Search |</Link>
        <Link to="/admin/add"> Add |</Link>
        <Link to="/admin/delete"> Delete |</Link>
        <Link to="/admin/registered-students"> Registered Students |</Link>
        <Link to="/admin/questions"> Questions </Link>
      </div>
    </div>
  );
};

export default AdminPage;
