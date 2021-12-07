import React from 'react';
import "./FavouritesCard.css";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { IconButton } from '@material-ui/core';
import logo_rec from "../Images/tender_rec.png";

const FavouritesCard = ({ restaurant, handleUnFavorite }) => {
  return (
    <div className='list_items_container'>
      <li className="list_items" key={restaurant._id}>

        <img className="fav_images" src={!restaurant.image ? logo_rec : restaurant.image} alt="restaurant"/>
        <div className="rest_info">
          <b className='restaurant_name'>{restaurant.name ?? `Restaurant ${restaurant._id}`}</b>
          <IconButton className='unfav' onClick={() => {handleUnFavorite(restaurant)}}>
            <DeleteTwoToneIcon> unfavorite </DeleteTwoToneIcon>
          </IconButton>
          <br/><span className="rest_info_span">{restaurant.phoneNumber ?? "Phone"}</span><br/>
          <span className="rest_info_span">{restaurant.address ?? "Address"}</span>
        </div>
      </li>
      <br/>
      <br/>
    </div>
  );
}

export default FavouritesCard;