import React from 'react'
import "./Restaurant.css"

const RestaurantProfileForm = ({ restaurant, onRestaurantEdit }) => {
  return(
    <div>
      <br/>
      <h2 className='txtheader'>Edit My Store</h2>
      <div className='restaurantInfo_container'>
        <b>My Name</b>
        <input className='restaurant_input' type="text" name="name" placeholder="Enter Name" value = {restaurant.name} onChange={onRestaurantEdit} required/>
        <br/><br/>
        <b>MyContact</b>
        <input className='restaurant_input' type="text" name="contact" placeholder="Enter Contact Info" value = {restaurant.contact} onChange={onRestaurantEdit} required/>
        <br/><br/>
        <b>My Address</b>
        <input className='restaurant_input' type="text" name="address" placeholder="Enter Address" value = {restaurant.address} onChange={onRestaurantEdit} required/>
        <br/><br/>
        <b>My Description</b>
        <textarea name='restaurantDescription' name="description" onChange={onRestaurantEdit} rows="6" cols="80"></textarea>
        <br/><br/><br/>
      </div>
      <div className="restaurant_pic">
        <img className="restaurant_pic" src={restaurant.image}/>
      </div>
    </div>
  )
}

export default RestaurantProfileForm;