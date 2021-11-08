import React from 'react'
import "./Restaurant.css"

const RestaurantProfileForm = ({ restaurant, onRestaurantEdit }) => {
  return(
    <div>

      <div className='restaurantInfo_container'>
        <b>Name</b>
        <input className='restaurant_input' type="text" name="name" placeholder="Enter Name" value = {restaurant.name} onChange={onRestaurantEdit} required/>
        <br/><br/>
        <b>Contact</b>
        <input className='restaurant_input' type="text" name="contact" placeholder="Enter Contact Info" value = {restaurant.contact} onChange={onRestaurantEdit} required/>
        <br/><br/>
        <b>Address</b>
        <input className='restaurant_input' type="text" name="address" placeholder="Enter Address" value = {restaurant.address} onChange={onRestaurantEdit} required/>
        <br/><br/>
        <b>Description</b>
        <textarea className='restaurant_input' name="description" onChange={onRestaurantEdit} value = {restaurant.description} rows="6" cols="80"/>
        <br/><br/><br/>
      </div>
      <div className="restaurant_pic">
        <img className="restaurant_pic" src={restaurant.image}/>
      </div>
    </div>
  )
}

export default RestaurantProfileForm;