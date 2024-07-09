import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'; // Import the custom CSS file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">BlueIndia Jobs</NavLink>

        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Pricing">Pricing</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;