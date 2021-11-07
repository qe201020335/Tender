"use strict";
import React from 'react';
import { Redirect } from 'react-router-dom';

const Fav = ({loginStatus}) => {
  if (loginStatus === 1){
    return (
      <p>Favourite Page (Under construction)</p>
    )
  }
  else{
    return (
      <Redirect to='/'/>
    )
  };
}

export default Fav;