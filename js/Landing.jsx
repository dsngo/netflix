import React from 'react';
import { Link } from 'react-router-dom';
import '../public/normalize.css';
import '../public/style.css';

const Landing = () =>
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">or Browse All</Link>
  </div>;

export default Landing;
