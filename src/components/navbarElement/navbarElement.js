import React from "react";
import { Link } from "react-router-dom";
import "./navbarElement.css";

const NavbarElement = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = token ? true : false;

  const handleLogout = () => {
    localStorage.removeItem("token");}

  return (
    <div className="container" >
      <Link to="/" className="navbar-element">
        HOME
      </Link>
      <Link to="/about" className="navbar-element">
        ABOUT
      </Link>
      <Link to="/signup" className="navbar-element">
        SIGNUP
      </Link>
      {
        isLoggedIn ? (<div className="navbar-element active" onClick={handleLogout}>
          LOGOUT
        </div>):
        (<Link to="/login" className="navbar-element active">
          LOGIN
        </Link>)
      }

    </div>
  );
};

export default NavbarElement;
