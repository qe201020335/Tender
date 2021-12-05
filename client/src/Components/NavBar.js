import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import "./NavBar.css";

import logoutHandler from "../Actions/logout";

import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import { IconButton } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExitIcon from '@material-ui/icons/ExitToApp'
import StarIcon from '@material-ui/icons/Star';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import logo from "../Images/tender_sq.png";

const NavBar = ({loginStatus, loginType, setMyUser, setLoginType}) => {

  const history = useHistory()

  const getRedirectLinkIfLogIn = (loginType) => {
    switch (loginType){
      case "USER":
        return "/"
      case "RESTAURANT":
        return "/my-restaruant"
      case "ADMIN":
        return "/admin"
      default:
        return "/"
    }
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  const onLogoutClick = async () => {
    const result = await logoutHandler()
    if (!result) {
      console.log("Cannot logout!")
    } else {
      setMyUser(null)
      setLoginType("LOGGED_OUT")
      history.push("/")
      refreshPage()
    }
  }

  const getAccountTitle = (type) => {
    switch (type) {
      case "ADMIN":
        return "All Restaurants"
      case "REST":
        return "My Restaurant"
      default:
        return "My Account"
    }
  }

  return (
    <div className='header'>
      <div id='header_left'>
        <Tooltip title="TENDER!" placement="bottom" followCursor>
        <IconButton component={Link} to="/" className="icon_button">
          <img className="header_icon, header_logo" src={logo} alt="TENDER"/>
        </IconButton>
        </Tooltip>

        {(!loginStatus || loginType==="USER" ) &&
        <Tooltip title="Favourites" placement="bottom">
        <IconButton component={Link} to="/my-favourites" className="icon_button">
          <StarIcon fontSize="large" className="header_icon"/>
        </IconButton>
        </Tooltip>}

      </div>


      <div id='header_right'>

        {!loginStatus &&
          <Button variant="contained" component={Link} to={"/login"}>Login</Button>
        }

        {loginStatus &&
        <Tooltip title={getAccountTitle(loginType)} placement="bottom">
          <IconButton component={Link} to={getRedirectLinkIfLogIn(loginType)} className="icon_button">
            {loginType === "REST" ? <StorefrontIcon fontSize="large" className="header_icon"/> : <AccountCircleIcon fontSize="large" className="header_icon"/>}
          </IconButton>
        </Tooltip>
        }

        {loginStatus &&
        <Tooltip title="Logout" placement="bottom">
          <IconButton onClick={onLogoutClick} className="icon_button">
            <ExitIcon fontSize="large" className="header_icon"/>
          </IconButton>
        </Tooltip>
        }

      </div>
    </div>
  );
}

export default NavBar;
