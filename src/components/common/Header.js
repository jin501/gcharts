import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return(
    <nav className="navbar navbar-nav">
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="charts" activeClassName="active">Charts</Link></li>
      </ul>
    </nav>
  );
};


export default Header;
