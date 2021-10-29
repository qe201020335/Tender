"use strict";
import React from 'react';
import { Redirect } from 'react-router-dom';

const Fav = () => {
  let loginStatus = parseInt(sessionStorage.getItem('loginStat'))
  if (loginStatus === 1){
    return (
      <p>Favourite Page (Under construction)</p>
    )
  }
  else{
    return (
      <Redirect to='/UserLogin'/>
    )
  }
  
}

export default Fav;