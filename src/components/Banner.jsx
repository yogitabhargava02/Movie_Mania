import React from 'react';
import '../assets/Styles/Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/Movies.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-custom">
      <div style={{ display: "block", width: 700, padding: 10 }}>
        <img src={logo} alt="Navbar Logo" height="65px" width="auto" style={{ marginLeft: '50px' }}  />
      </div>
    </nav>
  );
};

export default Navbar;
