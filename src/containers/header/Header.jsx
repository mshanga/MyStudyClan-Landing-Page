import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gundua__header section__padding" id="home">
    <div className="gundua__header-content">
      <h1 className="gradient__text">Let&apos;s Ease Your Research with Gundua</h1>
      <p>Streamline your research process with Gundua - Our platform can help you find the information you need quickly and easily.</p>

      <div className="gundua__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gundua__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gundua__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header