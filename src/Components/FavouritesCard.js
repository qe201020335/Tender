"use strict";
import React from 'react';
import "./FavouritesCard.css";

const FavouritesCard = ({ restaurant, handleUnFavorite }) => {
  return (
    <div className='list_items_container'>
      <li className="list_items" key={restaurant.name}>
        <b className='restaurant_name'>{restaurant.name}</b><button onClick={() => {handleUnFavorite(restaurant)}}>unfavorite</button><br/>
        {restaurant.address}
      </li>
      <br/>
    </div>
  );
}

export default FavouritesCard;