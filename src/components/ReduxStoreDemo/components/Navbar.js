import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';

// Link & NavLink pretty much same
// except NavLink adds class=active when clicked on link.
// This is useful to style the links if active
const Navbar = (props) => {
  return (
    <nav className="ui raised very padded segment">
      <a className="ui teal inverted segment" href="/">
        Gloria
      </a>

      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/users">Users</a>
    </nav>
  );
};

export default Navbar;
