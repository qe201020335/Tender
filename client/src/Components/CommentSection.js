import React, {useEffect, useState} from 'react';
import FavouritesCard from './FavouritesCard';
import {getUserFavorites, removeUserFavorites} from "../Apis/User";
import {getRestaurant} from "../Apis/Restaurant";
import "./MyFavourites.css";

const CommentSection = ({ restaurant }) => {

  return (
    <div>
      <h2 className="fav_title">My Favourites</h2>
      <br/>
      <div className='list_container'>
        <ul>
          { myFavourites.map((restaurant) => {
              return (<FavouritesCard restaurant={restaurant} handleUnFavorite={unfavourite}/>);
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default CommentSection;