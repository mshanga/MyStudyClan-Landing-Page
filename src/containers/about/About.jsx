import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="MyStudyClan__whatMyStudyClan section__margin" id="wMyStudyClan">
    <div className="MyStudyClan__whatMyStudyClan-feature">
      <Feature title="What is MyStudyClan" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="MyStudyClan__whatMyStudyClan-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="MyStudyClan__whatMyStudyClan-container">
      <Feature title="Judiciary" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Research" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default About