import React from 'react';
import './navbar.css';
import Logo from '../logo/logo';
import NavbarElement from '../navbarElement/navbarElement';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Logo />
        <NavbarElement />
    </div>
  )
}

export default Navbar