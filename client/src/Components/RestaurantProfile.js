import React, { useState } from 'react'
import RestaurantProfileView from './RestaurantProfileView'
import RestaurantProfileForm from './RestaurantProfileForm'
import "./RestaurantProfile.css";
import { Redirect } from 'react-router-dom';

const RestaurantProfile = ({}) => {
  // const [isEditing, setIsEditing] = useState(editingState);
  // const [editingRestaruant, setEditingRestaruant] = useState(JSON.parse(JSON.stringify(restaurant)));
  // const onEditClick = () => {
  //   setIsEditing(true);
  // }

  // const onEditSubmit = () => {
  //   setMyRestaurant(editingRestaruant);
  //   setIsEditing(false);
  //   console.log(editingRestaruant)
  //   //TODO: update database
  // }

  // const onRestaurantEdit = (event) => {
  //   setEditingRestaruant(prevState => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value
  //   }));
  // }

  // if (loginType !== "RESTAURANT" && loginType !== "ADMIN") {
  //   return (
  //     <Redirect to="/"/>
  //   )
  // }

  // return(
  //   <div>
  //     <br/> <br/>
  //     <h2 className='txtheader'>Store Profile</h2>
  //     { isEditing ? <RestaurantProfileForm restaurant={editingRestaruant} onRestaurantEdit={onRestaurantEdit}/>
  //       : <RestaurantProfileView restaurant={editingRestaruant}/> }
  //     <div className='button_container'>
  //       { isEditing ? <button type="submit" onClick={onEditSubmit}>Save Changes</button>
  //         : <button type="submit" onClick={onEditClick}>Edit</button> }
  //     </div>
  //     <div className="restaurant_pic">
  //       <img className="restaurant_pic" src={restaurant.image} alt="restaurant"/>
  //     </div>
  //   </div>
  // )
}
export default RestaurantProfile