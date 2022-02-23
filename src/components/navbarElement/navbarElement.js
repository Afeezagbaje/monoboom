import React from 'react';
import './navbarElement.css';

const NavbarElement = () => {
  return (
    <div className='container'>
        <div className="navbar-element">HOME</div>
        <div className="navbar-element">ABOUT</div>
        <div className="navbar-element">SIGNUP</div>
        <div className="navbar-element active">LOGIN</div>
    </div>
  )
}

export default NavbarElement;