import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

//import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import { IconButton } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExitIcon from '@material-ui/icons/ExitToApp'
import StarIcon from '@material-ui/icons/Star';
import logo from "../Images/tender_sq.png";

const NavBar = ({loginStatus, loginType}) => {

  const getRedirectLinkIfLogIn = (loginType) => {
    switch (loginType){
      case "USER":
        return "/"
      case "RESTAURANT":
        return "/my-restaruant"
      case "ADMIN":
        return "/"
      default:
        return "/"
    }

  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className='header'>
      <div id='header_left'>

        <IconButton component={Link} to="/" className="icon_button">
          <img className="header_icon, header_logo" src={logo} alt="TENDER"/>
        </IconButton>

        {(!loginStatus || loginType==="USER" ) &&
        <IconButton component={Link} to="/fav" className="icon_button">
          <StarIcon fontSize="large" className="header_icon"/>
        </IconButton>}

      </div>


      <div id='header_right'>

        {!loginStatus &&
        <IconButton component={Link} to="/login-restaurant" className="icon_button">
          <StorefrontIcon fontSize="large" className="header_icon"/>
        </IconButton>}

        {!loginStatus &&
        <IconButton component={Link} to="/login-user" className="icon_button">
          <AccountCircleIcon fontSize="large" className="header_icon"/>
        </IconButton>}



        {loginStatus &&
        <IconButton component={Link} to={getRedirectLinkIfLogIn(loginType)} className="icon_button">
          <AccountCircleIcon fontSize="large" className="header_icon"/>
        </IconButton>}

        {loginStatus &&
        <IconButton onClick={refreshPage} className="icon_button">
          <ExitIcon fontSize="large" className="header_icon"/>
        </IconButton>
        }

      </div>
    </div>
  );
}

export default NavBar;
