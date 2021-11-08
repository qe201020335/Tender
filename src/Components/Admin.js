"use strict";
import React from 'react';
import { Redirect } from 'react-router-dom';

const Admin = ({ loginType }) => {
  if (loginType !== "ADMIN") {
    return (<Redirect to="/login-user"/>)
  }
  return (
    <h1>Admin Page</h1>



  )


}

export default Admin;