import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo-white.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

//BEM --> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gundua__navbar">
      <div className="gundua__navbar-links">
        <div className="gundua__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gundua__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgundua">About</a></p>
          {/* <p><a href="#possibility">Case Studies</a></p> */}
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gundua__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gundua__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gundua__navbar-menu_container scale-up-center">
          <div className="gundua__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgundua">About</a></p>
          {/* <p><a href="#possibility">Case Studies</a></p> */}
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Library</a></p>
          </div>
          <div className="gundua__navbar-menu_container-links-sign">
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