import React, { StrictMode } from 'react'
import "./Restaurant.css"
import NavBar from "./NavBar";
import UserProfile from './UserProfile';

import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import EditProfile from './EditProfile';
import LoginForm from './LoginForm';

const Restaurant = () => {

  function logoutHandlerRest(){
    sessionStorage.setItem('loginStat', "0")
  }

  if (!sessionStorage.getItem('loginStat')){
    sessionStorage.setItem('loginStat', "0");
  }
  let loginStatus = sessionStorage.getItem('loginStat')

  if (loginStatus === '0'){
    return(
      <Redirect to='/UserLogin'/>
    )
  }
  return(
    <div>
      <h2>My restaurant profile</h2>
      <button type="submit" className="logout_submit" onClick={logoutHandlerRest} >Log Out</button>
      {console.log(sessionStorage.getItem('loginStat'))}
      { () => {
          if (sessionStorage.getItem('loginStat') === '0'){
            return (<Redirect to='/restaurant'/>)
          }
        }
      }

    </div>
  )
}
export default Restaurant