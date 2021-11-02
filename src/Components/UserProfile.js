import React, { StrictMode } from 'react'
import "./UserLogin.css"
import { Redirect } from 'react-router-dom';

const UserProfile = ({editHandler, logoutHandler, loginStatus, editing}) => {
  let userName = String(sessionStorage.getItem('username'))
  return(
    <div id="userInfo_container">
      <b>Username:</b> {userName}
      <br/><br/>
      <b>Description:</b> 
      <br/>
      {sessionStorage.getItem(userName) 
      ? sessionStorage.getItem(userName)
      : "You have no description! Click Edit Profile to set one!"}
      <br/><br/>
      <button type="button" className="logout_submit" onClick={editHandler} >Edit Profile</button>
      <br/>
      <button type="submit" className="logout_submit" onClick={logoutHandler} >Log Out</button>
      {loginStatus
      ? <Redirect to='/UserLogin'/>
      : <div></div>
      }
      {editing
      ? <Redirect to='/UserLogin'/>
      : <div></div>
      }
    </div>
  )
}

export default UserProfile