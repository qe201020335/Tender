"use strict";
import React from 'react';
import FavouritesCard from './FavouritesCard';
import { Redirect } from 'react-router-dom';

const MyFavourites = ({ user, setMyUser, loginType }) => {
  const onUnfavourite = (event) => {
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
            return <FavouritesCard restaurant={restaurant} onUnfavourite={onUnfavourite}/>;
          })
        }
      </ul>
    </div>
  );
}

export default MyFavourites;