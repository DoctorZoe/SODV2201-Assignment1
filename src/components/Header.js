import React from 'react';
import Dropdown from './Dropdown';
import logo from '../assets/bvcfullcut.jpg';
import '../index.css';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <img src={logo} alt="BVC Logo" className="logo-icon" />
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
