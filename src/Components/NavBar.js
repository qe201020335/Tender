import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { IconButton } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StarIcon from '@material-ui/icons/Star';
import logo from "../Images/tender_rec.png";

const NavBar = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton component={Link} to="/userLogin">
                    <AccountBoxIcon frontSize="large" className="header_icon"/>
                </IconButton>
                <IconButton component={Link} to="/fav">
                    <StarIcon frontSize="large" className="header_icon"/>
                </IconButton>
            </div>
           <Link to="/">
            <img
                className="header_logo"
                src={logo}
                alt="TENDER"
            /></Link>

            <div className='header_right'>
                <IconButton>
                    <StorefrontIcon frontSize="large" className="header_icon"/>
                </IconButton>
            </div>
        </div>
    );
}

export default NavBar;
