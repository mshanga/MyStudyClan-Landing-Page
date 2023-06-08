import React from 'react';
import gunduaLogo from '../../assets/logo-white.png';
import './footer.css';

const Footer = () => (
  <div className="gundua__footer section__padding">
    <div className="gundua__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gundua__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gundua__footer-links">
      <div className="gundua__footer-links_logo">
        <img src={gunduaLogo} alt="gundua_logo" />
        <p>Golf View Office Suites, Wambui Rd<br /> All Rights Reserved</p>
      </div>
      <div className="gundua__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gundua__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gundua__footer-links_div">
        <h4>Get in touch</h4>
        <p>Golf View Office Suites, Wambui Rd</p>
        <p>0712 345 678</p>
        <p>info@gundua.co.ke</p>
      </div>
    </div>

    <div className="gundua__footer-copyright">
      <p>@2023 Gundua. All rights reserved.</p>
    </div>
  </div>
);

export default Footer