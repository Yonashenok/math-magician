import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './PageNav.module.css';

function PageNav() {
  return (
    <nav className={classes.navContainer}>
      <h2 className={classes.header}>Math Magicians</h2>
      <ul className={classes.navListContainer}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
