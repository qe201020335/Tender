"use strict";
import React from 'react';
import FavouritesCard from './FavouritesCard';
import { Redirect } from 'react-router-dom';
import "./MyFavourites.css";

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
      <h2 className="fav_title">My Favourites</h2>
      <div className='list_container'>
        <ul>
          { user.favorites.map((restaurant) => {
              return (<FavouritesCard restaurant={restaurant} onUnfavourite={onUnfavourite}/>);
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default MyFavourites;