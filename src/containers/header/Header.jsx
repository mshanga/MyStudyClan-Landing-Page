import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="MyStudyClan__header section__padding" id="home">
    <div className="MyStudyClan__header-content">

      <h1 className="gradient__text">Revolutionizing the Learning Experience</h1>
      <p>We are building a community of software developers to share knowledge and learn from each other </p>

      <div className="MyStudyClan__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="MyStudyClan__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="MyStudyClan__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header