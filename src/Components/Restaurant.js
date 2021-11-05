import React, { StrictMode } from 'react'
import "./Restaurant.css"
import NavBar from "./NavBar";
import UserProfile from './UserProfile';
import Profile from './Profile';

import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import EditProfile from './EditProfile';
import LoginForm from './LoginForm';

const Restaurant = ({loginStatus, setLoginStatus, isRestaurant, setRestaurant}) => {

  function logoutHandlerRest(){
    setLoginStatus(0)
    sessionStorage.setItem('loginStat', "0");
  }

  if (loginStatus === 0){
    return(
      <Profile 
      loginStatus={loginStatus} 
      setLoginStatus={setLoginStatus} 
      restStatus={true} 
      isRestaurant={isRestaurant} 
      setRestaurant={setRestaurant}/>
    );
  }
  let userName = sessionStorage.getItem("username")
  let contactKey = userName + "Contact"
  let addressKey = userName + "Address"
  let descriptionKey = userName + "Description"
  let picKey = userName + "Pic"
  return(
    <div>
      <br/>
      <h2 className='txtheader'>My Store</h2>
      <div className='restaurantInfo_container'>
        <b>My Name</b> <br/>
        {sessionStorage.getItem(userName)}
        <br/><br/>
        <b>MyContact</b> <br/>
        {sessionStorage.getItem(contactKey)}
        <br/><br/>
        <b>My Address</b> <br/>
        {sessionStorage.getItem(addressKey)}
        <br/><br/>
        <b>My Description</b> <br/>
        {sessionStorage.getItem(descriptionKey)}
        <br/><br/><br/>
      </div>
      <div className='button_container'>
        <button type="submit" className="logout_submit" onClick={logoutHandlerRest} >Log Out</button>
        <button type="submit" className="logout_submit">Edit</button>
        {
          loginStatus ? <Redirect to='/restaurant'/> : <div></div>
        }
      </div>
      <div className="restaurant_pic">
        <img className="restaurant_pic" src={sessionStorage.getItem(picKey)} alt={userName} />
      </div>
    </div>
  );

  // if (!sessionStorage.getItem('loginStat')){
  //   sessionStorage.setItem('loginStat', "0");
  // }
  // let loginStatus = sessionStorage.getItem('loginStat')

  // if (loginStatus === '0'){
  //   return(
  //     <Redirect to='/Profile'/>
  //   )
  // }
  // return(
  //   <div>
  //     <h2>My restaurant profile</h2>
  //     <button type="submit" className="logout_submit" onClick={logoutHandlerRest} >Log Out</button>
  //     {console.log(sessionStorage.getItem('loginStat'))}
  //     { () => {
  //         if (sessionStorage.getItem('loginStat') === '0'){
  //           return (<Redirect to='/restaurant'/>)
  //         }
  //       }
  //     }

  //   </div>
  // )
}
export default Restaurant