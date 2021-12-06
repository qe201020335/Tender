import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import {getAllRestaurant} from "../Repository/RestaurantRepository";
import AdminRestListEntry from "./AdminRestListEntry";
import RestaurantProfile from "./RestaurantProfile";
import "./Admin.css"

const Admin = () => {

  const [isAdminEditing, setIsAdminEditing] = useState(false);
  const [editingRest, setEditingRest] = useState("");

  const onClickEdit = (restaurant) => {
    setIsAdminEditing(true)
    setEditingRest(restaurant)
  }

  const setEditedRest = (EditedRest) => {
    setIsAdminEditing(false)
    // TODO: update entry
  }


  return (
    <div>
      <h2 id="admin_title">Admin Page</h2>
      <br/>
      {isAdminEditing ? <RestaurantProfile RestaurantID={editingRest} etEditedRest={setEditedRest} editingState={true}/>
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