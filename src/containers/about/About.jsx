import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="MyStudyClan__whatMyStudyClan section__margin" id="wMyStudyClan">
    <div className="MyStudyClan__whatMyStudyClan-feature">
      <Feature title="About MyStudyClan" text="MyStudyClan is a cutting-edge social platform designed specifically for software developers to enhance their learning, collaborate with peers, and build a strong network within the industry. The platform aims to provide a supportive and interactive environment where developers can engage in meaningful discussions, share knowledge, and participate in collaborative projects." />
    </div>
    <div className="MyStudyClan__whatMyStudyClan-heading">
      <h1 className="gradient__text">World's best Developer platform</h1>
      <p>Connect with other Developers</p>
    </div>
    <div className="MyStudyClan__whatMyStudyClan-container">
      <Feature title="Connect" text="Embrace your passion for technology and connect with other like minded software engineers" />
      <Feature title="Learn" text="In Tech learning is a life long persuit. Be in the loop and learn the best trends and in demand frameworks" />
      <Feature title="Grow" text="Knowledge is power in this information. Elevate your career by learning the best in demand technologies" />
    </div>
  </div>
);

export default About