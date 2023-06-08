import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gundua__blog section__padding" id="blog">
    <div className="gundua__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are talking about it.</h1>
    </div>
    <div className="gundua__blog-container">
      <div className="gundua__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Gundua AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gundua__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Gundua AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Gundua AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Gundua AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Gundua AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog