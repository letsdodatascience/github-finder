import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'; // type checker for props

const NavBar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

// think: default parameters of a function
NavBar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar;
