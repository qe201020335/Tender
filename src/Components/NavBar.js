import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { IconButton } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StarIcon from '@material-ui/icons/Star';
import logo from "../Images/tender_sq.png";

const NavBar = () => {
  return (
    <div className='header'>
      <div id='header_left'>

        <IconButton component={Link} to="/">
          <img className="header_icon, header_logo" src={logo} alt="TENDER"/>
        </IconButton>

        <IconButton component={Link} to="/fav">
          <StarIcon fontSize="large" className="header_icon"/>
        </IconButton>

      </div>


      <div id='header_right'>

        <IconButton component={Link} to="/restaurant">
          <StorefrontIcon fontSize="large" className="header_icon"/>
        </IconButton>

        <IconButton component={Link} to="/Profile"><AccountBoxIcon fontSize="large" className="header_icon"/>
        </IconButton>

      </div>
    </div>
  );
}

export default NavBar;
