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
      <button onClick={handleClick}>{menuOpen ? 'Close' : 'Menu'}</button>
      <ul className={`menuNav ${menuOpen ? ' showMenu' : ''}`}>
        <img src={smallicon} alt="BVC Icon" className="small-icon" />
        <hr />
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/student/view" onClick={closeMenu}>
          Course Registration
        </NavLink>
        <NavLink to="/admin/search" onClick={closeMenu}>
          Admin (Temp Menu)
        </NavLink>
      </ul>
    </nav>
  );
};

export default Dropdown;
