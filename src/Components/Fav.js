"use strict";
import React from 'react';
import { Redirect } from 'react-router-dom';

const Fav = ({loginStatus}) => {
  if (loginStatus === true){
    return (
      <p>Favourite Page (Under construction)</p>
    )
  }
  else{
    return (
      <Redirect to='/login-user'/>
    )
  }
}

export default Fav;