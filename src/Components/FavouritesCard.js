"use strict";
import React from 'react';
import "./FavouritesCard.css";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { IconButton } from '@material-ui/core';

const FavouritesCard = ({ restaurant, handleUnFavorite }) => {
  return (
    <div className='list_items_container'>
      <li className="list_items" key={restaurant.name}>

        <img className="fav_images" src={restaurant.image}/>
        <div className="rest_info">
          <b className='restaurant_name'>{restaurant.name}</b>
          <IconButton className='unfav'>
            <DeleteTwoToneIcon onClick={() => {handleUnFavorite(restaurant)}}> unfavorite </DeleteTwoToneIcon>
          </IconButton>
          <br/><br/>
          <a>{restaurant.address}</a>
        </div>
      </li>
      <br/>
      <br/>
    </div>
  );
}

export default FavouritesCard;