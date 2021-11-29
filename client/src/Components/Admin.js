"use strict";
import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import {getAllRestaurant} from "../Repository/RestaurantRepository";
import AdminRestListEntry from "./AdminRestListEntry";
import RestaurantProfile from "./RestaurantProfile";
import "./Admin.css"

const Admin = ({ loginType}) => {

  const [isAdminEditing, setIsAdminEditing] = useState(false);
  const [editingRest, setEditingRest] = useState(null);

  const onClickEdit = (restaurant) => {
    setIsAdminEditing(true)
    setEditingRest(restaurant)
  }

  const setEditedRest = (rest) => {
    setIsAdminEditing(false)
  }

  if (loginType !== "ADMIN") {
    return (<Redirect to="/login-user"/>)
  }

  return (
    <div>
      <h2 id="admin_title">Admin Page</h2>
      <br/>
      {isAdminEditing ? <RestaurantProfile restaurant={editingRest} loginType={loginType} setMyRestaurant={setEditedRest} editingState={true}/>
        :(<div id='rest_list_container'>
            <ul>
              { getAllRestaurant().map((restaurant) => {
                return <AdminRestListEntry restaurant={restaurant} onClickEdit={onClickEdit}/>
                  })}
            </ul>
        </div>)
      }
    </div>
  )
}

export default Admin;