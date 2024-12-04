import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // useNavigate is used for navigation
import '../App.css';
import logo from '../images/logo.jpeg';

function Navbar() {
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Check if the user is logged in (token present in localStorage)
  const isLoggedIn = localStorage.getItem("token");

  // Logout function to handle user logout
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");

    // Redirect to home page after logout
    navigate("/");  // Navigate to home page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <i className="search-icon"></i>
        <i className="cart-icon"></i>
        <div className="auth-buttons">
          {isLoggedIn ? (
            // If user is logged in, show the logout button
            <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            // If user is not logged in, show login and signup buttons
            <>
              <Link to="/login">
                <button className="btn login-btn">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn signup-btn">Signup</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
