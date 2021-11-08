import React from 'react'
import "./Restaurant.css"

const RestaurantProfileView = ({ restaurant }) => {
  return(
    <div>
      <div className='restaurantInfo_container'>
        <b>Name</b> <br/>
        {restaurant.name}
        <br/><br/>
        <b>Contact</b> <br/>
        {restaurant.contact}
        <br/><br/>
        <b>Address</b> <br/>
        {restaurant.address}
        <br/><br/>
        <b>Description</b> <br/>
        {restaurant.description}
        <br/><br/><br/>
      </div>
    </div>
  )
}

export default RestaurantProfileView;