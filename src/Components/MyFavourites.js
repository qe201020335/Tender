"use strict";
import React from 'react';
import FavouritesCard from './FavouritesCard';
import { Redirect } from 'react-router-dom';

const MyFavourites = ({ user, setMyUser, loginType }) => {
  const unfavourite = (restaurant) => {
    const restaruantsLeft = user.favorites.filter((curRestaurant) => { 
      return restaurant !== curRestaurant;
    });
    setMyUser({favorites: restaruantsLeft});
  }

  if (loginType !== "USER") {
    return (
      <Redirect to="login-user"/>
    )
  }
  return (
    <div>
      <h1>My Favourites</h1>
      <ul>
        { user.favorites.map((restaurant) => {
            return <FavouritesCard name={restaurant.name} restaurant={restaurant} handleUnFavorite={unfavourite}/>;
          })
        }
      </ul>
    </div>
  );
}

export default MyFavourites;