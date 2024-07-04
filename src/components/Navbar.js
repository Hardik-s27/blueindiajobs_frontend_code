import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'; // Ensure you have your custom CSS file linked

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="navbar-brand text-light">
        BlueIndia Jobs
      </div>
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
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link text-light"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/AboutUs"
              className="nav-link text-light"
              activeClassName="active"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Pricing"
              className="nav-link text-light"
              activeClassName="active"
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
