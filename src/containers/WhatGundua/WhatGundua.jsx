import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgundua.css';

const WhatGundua = () => (
  <div className="gundua__whatgundua section__margin" id="wgundua">
    <div className="gundua__whatgundua-feature">
      <Feature title="What is Gundua" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="gundua__whatgundua-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gundua__whatgundua-container">
      <Feature title="Judiciary" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Research" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default WhatGundua