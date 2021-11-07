import React from 'react'
import "./Restaurant.css"

const RestaurantProfileView = ({ restaurant }) => {
  return(
    <div>
      <br/>
      <h2 className='txtheader'>My Store</h2>
      <div className='restaurantInfo_container'>
        <b>My Name</b> <br/>
        {restaurant.name}
        <br/><br/>
        <b>MyContact</b> <br/>
        {restaurant.contact}
        <br/><br/>
        <b>My Address</b> <br/>
        {restaurant.address}
        <br/><br/>
        <b>My Description</b> <br/>
        {restaurant.description}
        <br/><br/><br/>
      </div>
    </div>
  )
}

export default RestaurantProfileView;