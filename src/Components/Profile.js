import React, { StrictMode } from 'react'
import "./Profile.css"
import NavBar from "./NavBar";
import UserProfile from './UserProfile';

import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import EditProfile from './EditProfile';
import LoginForm from './LoginForm';

const Profile = () => {
  if (!sessionStorage.getItem('loginStat')){
    sessionStorage.setItem('loginStat', "0");
  }

  const [loginStatus, setLoginStatus] = useState(parseInt(sessionStorage.getItem('loginStat')));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editing, setEditing] = useState(false);
  const [isRestaurant, setRestaurant] = useState(false);


  function loginHandler(){
    console.log("Checking log info");
    // hardcoded username & password
    if (username === "user" && password === "user"){
      console.log("correct");
      setLoginStatus(1);
      setRestaurant(false);
      sessionStorage.setItem('loginStat', "1")
      sessionStorage.setItem('username', "user")
      sessionStorage.setItem('type', 'user')
    }
    else if (username === "admin" && password === "admin"){
      console.log("correct")
      setLoginStatus(1);
      setRestaurant(false);
      sessionStorage.setItem('loginStat', "1")
      sessionStorage.setItem('username', "admin")
      sessionStorage.setItem('type', 'admin')
    }
    else if (username === "rest" && password === "rest"){
      console.log("correct")
      setLoginStatus(1);
      setRestaurant(true);
      sessionStorage.setItem('loginStat', "1")
      sessionStorage.setItem('username', "rest")
      sessionStorage.setItem('type', 'rest')
    }
    else{
      console.log("wrong password")
      alert("Wrong username or password!")
      setLoginStatus(0);
      sessionStorage.setItem('loginStat', "0")
    }
  }

  function logoutHandler(){
    setLoginStatus(0);
    sessionStorage.setItem('loginStat', "0")
  }

  function editHandler(){
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

  if (loginStatus === 1 && sessionStorage.getItem('type') === 'rest'){
    return (<Redirect to='/restaurant'/>)
  }

  if (loginStatus === 1 && editing === false && isRestaurant === false){

    return (
      <UserProfile 
        editHandler = {editHandler}
        logoutHandler = {logoutHandler}
        loginStatus = {loginStatus}
        editing = {editing}
      />
    );
  }
  else if (loginStatus === 1 && editing === false && isRestaurant === true){

  }

  if (editing === true ){
    return(
      <EditProfile
        changeHandlerDesc = {changeHandlerDesc}
        changeDescHandler = {changeDescHandler}
        editing = {editing}
      />
    );
  }

  return (
    <LoginForm
      username={username}
      password={password}
      changeHandlerUsername={changeHandlerUsername}
      changeHandlerPassword={changeHandlerPassword}
      loginHandler={loginHandler}
    />
  );
}


export default Profile