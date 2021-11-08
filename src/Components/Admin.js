"use strict";
import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import {getAllRestaurant} from "../Repository/RestaurantRepository";
import AdminRestListEntry from "./AdminRestListEntry";
import RestaurantProfile from "./RestaurantProfile";

const Admin = ({ loginType}) => {

  const [isAdminEditing, setIsAdminEditing] = useState(false);
  const [editingRest, setEditingRest] = useState(null);

  const onClickEdit = (restaurant) => {
    setIsAdminEditing(true)
    setEditingRest(restaurant)
    // setEditing(restaurant)
  }

  const setEditedRest = (rest) => {

  }

  if (loginType !== "ADMIN") {
    return (<Redirect to="/login-user"/>)
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <div className='rest_list_container'>
        <ul>
          { getAllRestaurant().map((restaurant) => {
            return <AdminRestListEntry restaurant={restaurant} onClickEdit={onClickEdit}/>
              }) }
        </ul>
      </div>

      {isAdminEditing && <RestaurantProfile restaurant={editingRest} loginType={loginType} setMyRestaurant={setEditedRest}/>}

    </div>

  )
}

export default Admin;