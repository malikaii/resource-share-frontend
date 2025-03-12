import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuth } from './Auth';
function Navbar() {
    const auth = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Resource Share
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
         {
            !auth.user && <li>
            <Link to="/login">Login</Link>
          </li>
         } 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;