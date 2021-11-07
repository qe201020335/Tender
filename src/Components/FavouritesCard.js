"use strict";
import React from 'react';

const FavouritesCard = ({ restaurant, onUnfavourite }) => {
  return (
    <div>
      <li key={restaurant.name}>
        {restaurant.name} - {restaurant.address}
        <button onClick={onUnfavourite}>unfavorite</button>
      </li>
    </div>
  );
}

export default FavouritesCard;