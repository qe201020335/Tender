import React from 'react'
import "./UserLogin.css"
import { Link } from "react-router-dom"

import { IconButton } from '@material-ui/core';
import logo from "./Images/tender_rec.png"

function UserLogin() {
    return (
        <div className="userLogin_header">
            <Link to="/">
                <img 
                    className="userLogin_header_logo"
                    src={logo}
                    alt="TENDER"
                />
            </Link>
            <a>This is user login page</a>
        </div>
    );
}

export default UserLogin