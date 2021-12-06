import React, {useEffect, useState} from 'react';
import {getAllRestaurant} from "../Apis/Restaurant";
import AdminRestListEntry from "./AdminRestListEntry";
import RestaurantProfile from "./RestaurantProfile";
import "./Admin.css"

const Admin = () => {

  const [isAdminEditing, setIsAdminEditing] = useState(false);
  const [editingRestID, setEditingRestID] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    const fetchRests = async () => {
      const rests = await getAllRestaurant();
      console.log(rests)
      setAllRestaurants(rests)
    }
    fetchRests()
  }, [])

  const onClickEdit = (restaurantID) => {
    console.log("about to edit " + restaurantID)
    setEditingRestID(restaurantID)
    setIsAdminEditing(true)

  }

  const setEditedRest = (editedRest) => {
    console.log(editedRest)
    let targetIndex = -1;
    for (let i = 0; i < allRestaurants.length; i++) {
      if (allRestaurants[i]._id === editingRestID) {
        targetIndex = i
        break
      }
    }
    if (targetIndex >= 0) {
      allRestaurants[targetIndex] = editedRest
      setAllRestaurants(allRestaurants)
    }
    setIsAdminEditing(false)
    setEditingRestID("")
  }


  return (
    isAdminEditing ? <RestaurantProfile restaurantID={editingRestID} setEditedRest={setEditedRest} editingState={true}/>
      :
      <div>
        <h2 id="admin_title">All Restaurants</h2>
        <br/>
        <div id='rest_list_container'>
          <ul>
            { allRestaurants.map((restaurant) => {
              return <AdminRestListEntry restaurant={restaurant} onClickEdit={onClickEdit}/>
                })}
          </ul>
        </div>
      </div>
  )
}

export default Admin;