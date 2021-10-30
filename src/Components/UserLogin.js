import React, { StrictMode } from 'react'
import "./UserLogin.css"
import NavBar from "./NavBar";

import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Description } from '@material-ui/icons';

const UserLogin = () => {
  if (!sessionStorage.getItem('loginStat')){
    sessionStorage.setItem('loginStat', "0");
  }

  const [loginStatus, setLoginStatus] = useState(parseInt(sessionStorage.getItem('loginStat')));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editing, setEditing] = useState(false);


  function LoginHandler(){
    console.log("Checking log info");
    // hardcoded username & password
    if (username === "user" && password === "user"){
      console.log("correct");
      setLoginStatus(1);
      sessionStorage.setItem('loginStat', "1")
      sessionStorage.setItem('username', "user")
    }
    else if (username === "admin" && password === "admin"){
      console.log("correct")
      setLoginStatus(1);
      sessionStorage.setItem('loginStat', "1")
      sessionStorage.setItem('username', "admin")
    }
    else{
      console.log("wrong password")
      alert("Wrong username or password!")
      setLoginStatus(0);
      sessionStorage.setItem('loginStat', "0")
    }
  }

  function LogoutHandler(){
    setLoginStatus(0);
    sessionStorage.setItem('loginStat', "0")
  }

  function EditHandler(){
    setEditing(true)
  }

  function changeDescHandler(){
    setEditing(false)
  }

  const changeHandlerDesc = (event) =>{
    const target = event.target;
    const value = String(target.value);
    const userName = String(sessionStorage.getItem('username'))
    sessionStorage.setItem(userName, value)
  }

  const changeHandlerUsername = (event) =>{
    const target = event.target;
    const value = target.value;
    setUsername(value)
  }

  const changeHandlerPassword = (event) =>{
    const target = event.target;
    const value = target.value;
    setPassword(value)
  }

  if (loginStatus === 1 && editing === false){
    let userName = String(sessionStorage.getItem('username'))
    return (
      <div id="userInfo_container">
        <b>Username:</b> {userName}
        <br/><br/>
        <b>Description:</b> 
        <br/>
        {sessionStorage.getItem(userName) 
         ? sessionStorage.getItem(userName)
         : "You have no description! Click Edit Profile to set one!"}
        <br/><br/>
        <button type="button" className="logout_submit" onClick={EditHandler} >Edit Profile</button>
        <br/>
        <button type="submit" className="logout_submit" onClick={LogoutHandler} >Log Out</button>
        {loginStatus
        ? <Redirect to='/UserLogin'/>
        : <div></div>
        }
        {editing
        ? <Redirect to='/UserLogin'/>
        : <div></div>
        }
      </div>
    );
  }
  if (editing === true){
    let userName = String(sessionStorage.getItem('username'))
    return(
      <div className='edit_container'>
        <label><b>New Description</b></label>
        <br/>
        
        <textarea name='udesc' onChange={changeHandlerDesc} rows="6" cols="50">{sessionStorage.getItem(userName) ? sessionStorage.getItem(userName) : ''}</textarea>
        <br/>
        <br/>
        <button type="submit" className="logout_submit" onClick={changeDescHandler}>Save changes</button>
        {editing
        ? <Redirect to='/UserLogin'/>
        : <div></div>
        }
      </div>
    );
  }

  return (
    <div className="userLogin_header">
    <form id="login_form">
      <label><b>Username</b></label>
      <input id="username_input" type="text" placeholder="Enter Username" name="uname" value = {username} onChange={changeHandlerUsername} required/>
      <br/>
      <label><b>Password</b></label>
      <input id="password_input" type="password" placeholder="Enter Password" name="psw" value = {password} onChange={changeHandlerPassword} required/>
      <br/>
      <br/>
      <button type="submit" className="login_submit" onClick={LoginHandler} >Login</button>
    </form>
  </div>
  );
}


export default UserLogin