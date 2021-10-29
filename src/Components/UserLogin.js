import React from 'react'
import "./UserLogin.css"
import NavBar from "./NavBar";

import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

const UserLogin = () => {
  if (!sessionStorage.getItem('loginStat')){
    sessionStorage.setItem('loginStat', "0");
  }
  const [loginStatus, setLoginStatus] = useState(parseInt(sessionStorage.getItem('loginStat')));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


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

  if (loginStatus === 1){
    let userName = String(sessionStorage.getItem('username'))
    return (
      <div id="userInfo_container">
        Username: {userName}
        <br/><br/>
        <button type="submit" className="logout_submit" onClick={LogoutHandler} >Log Out</button>
        {loginStatus
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