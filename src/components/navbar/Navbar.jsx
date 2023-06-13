import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo-white.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

//BEM --> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="MyStudyClan__navbar">
      <div className="MyStudyClan__navbar-links">
        <div className="MyStudyClan__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="MyStudyClan__navbar-links_container">
          <p><a href="#home">Home</a></p>          
          <p><a href="#features">Features</a></p>
          <p><a href="#wMyStudyClan">About</a></p>
        </div>
      </div>
      <div className="MyStudyClan__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="MyStudyClan__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="MyStudyClan__navbar-menu_container scale-up-center">
          <div className="MyStudyClan__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#wMyStudyClan">About</a></p>          
          </div>
          <div className="MyStudyClan__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar