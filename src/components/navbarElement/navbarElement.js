import React from 'react';
import { Link } from 'react-router-dom';
import './navbarElement.css';

const NavbarElement = () => {
  return (
    <div className='container'>
        <Link to='/' className="navbar-element">HOME</Link>
        <Link to='/about' className="navbar-element">ABOUT</Link>
        <Link to='/signup' className="navbar-element">SIGNUP</Link>
        <Link to='/login' className="navbar-element active">LOGIN</Link>
    </div>
  )
}

export default NavbarElement;