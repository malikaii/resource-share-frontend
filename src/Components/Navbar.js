import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";
import { useOktaAuth } from "@okta/okta-react";
import { Button  } from "../Styles/Button.style";
function Navbar() {
  const {oktaAuth, authState} = useOktaAuth();

  if(!authState) {
    return <p>Loading....</p>
  }


  const handleLogout = async() => oktaAuth.signOut();

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
          <li>
            <Link to="/post">Post a new listing</Link>
          </li>
          {!authState.isAuthenticated ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li>
              <Button onClick={handleLogout}>Logout</Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
