"use strict";
import React from 'react';
import FavouritesCard from './FavouritesCard'

const MyFavourites = ({ user, setMyUser }) => {
  const onUnfavourite = (event) => {
  }
  return (
    <div>
      <h1>My Favourites</h1>
      <ul>
        { user.favorites.map((restaurant) => {
            return <FavouritesCard restaurant={restaurant} onUnfavourite={onUnfavourite}/>;
          })
        }
      </ul>
    </div>
  );
}

export default MyFavourites;