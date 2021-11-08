import React, { useState, useEffect } from 'react'
import RestaurantProfileView from './RestaurantProfileView'
import RestaurantProfileForm from './RestaurantProfileForm'
import "./RestaurantProfile.css";
import { Redirect } from 'react-router-dom';

const RestaurantProfile = ({ restaurant, setMyRestaurant, loginType, editingState}) => {
  const [isEditing, setIsEditing] = useState(editingState);
  const [editingRestaruant, setEditingRestaruant] = useState(JSON.parse(JSON.stringify(restaurant)));
  const onEditClick = () => {
    setIsEditing(true);
  }

  const onEditSubmit = () => {
    // update the database
    // putRestaurant(editingRestaruant)
    setMyRestaurant(editingRestaruant);
    setIsEditing(false);
  }

  const onRestaurantEdit = (event) => {
    setEditingRestaruant(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  if (loginType !== "RESTAURANT" && loginType !== "ADMIN") {
    return (
      <Redirect to="login-restaurant"/>
    )
  }

  return(
    <div>
      <br/> <br/>
      <h2 className='txtheader'>Store Profile</h2>
      { isEditing ? <RestaurantProfileForm restaurant={editingRestaruant} onRestaurantEdit={onRestaurantEdit}/>
        : <RestaurantProfileView restaurant={editingRestaruant}/> }
      <div className='button_container'>
        { isEditing ? <button type="submit" onClick={onEditSubmit}>Save Changes</button>
          : <button type="submit" onClick={onEditClick}>Edit</button> }
      </div>
      <div className="restaurant_pic">
        <img className="restaurant_pic" src={restaurant.image} />
      </div>
    </div>
  )
}
export default RestaurantProfile