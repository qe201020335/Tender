import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

//import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import { IconButton } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StarIcon from '@material-ui/icons/Star';
import logo from "../Images/tender_sq.png";

const NavBar = () => {
  return (
    <div className='header'>
      <div id='header_left'>

        <IconButton component={Link} to="/" className="icon_button">
          <img className="header_icon, header_logo" src={logo} alt="TENDER"/>
        </IconButton>

        <IconButton component={Link} to="/fav" className="icon_button">
          <StarIcon fontSize="large" className="header_icon"/>
        </IconButton>

      </div>


      <div id='header_right'>

<<<<<<< HEAD
        <IconButton component={Link} to="/login-restaurant">
          <StorefrontIcon frontSize="large" className="header_icon"/>
        </IconButton>

        <IconButton component={Link} to="/">
          <AccountBoxIcon frontSize="large" className="header_icon"/>
=======
        <IconButton component={Link} to="/restaurant" className="icon_button">
          <StorefrontIcon fontSize="large" className="header_icon"/>
        </IconButton>

        <IconButton component={Link} to="/Profile" className="icon_button">
          <AccountCircleIcon fontSize="large" className="header_icon"/>
>>>>>>> b614bc213d577f662280b31ae77d409f1682cd26
        </IconButton>

      </div>
    </div>
  );
}

export default NavBar;
