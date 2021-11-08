"use strict";
import React from 'react';

const FavouritesCard = ({ restaurant, handleUnFavorite }) => {
  return (
    <div>
      <li key={restaurant.name}>
        {restaurant.name} - {restaurant.address}
        <button onClick={() => {handleUnFavorite(restaurant)}}>unfavorite</button>
      </li>
    </div>
  );
}

export default FavouritesCard;