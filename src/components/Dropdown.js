import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import CourseRegistration from '../Pages/CourseRegistration';
// import Landing from '../pages/LandingPage';

import '../index.css';
import smallicon from '../assets/bvciconcut.jpg';

const Dropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navBar">
      <button className={`${menuOpen ? 'closeBtn' : 'menuBtn'}`} onClick={handleClick}>{menuOpen ? 'Close' : 'Menu'}</button>
      <ul className={`menuNav ${menuOpen ? ' showMenu' : ''}`}>
        <img src={smallicon} alt="BVC Icon" className="small-icon" />
        <hr />
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/student/search" onClick={closeMenu}>
          Courses
        </NavLink>
        <NavLink to="/student/signup" onClick={closeMenu}>
          Sign Up
        </NavLink>
        <NavLink to="/student/form" onClick={closeMenu}>
          Contact Us
        </NavLink>
        <br />
        <hr />
        <NavLink to="/admin/search" onClick={closeMenu}>
          Admin
        </NavLink>
      </ul>
    </nav>
  );
};

export default Dropdown;
