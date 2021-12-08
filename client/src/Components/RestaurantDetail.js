import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "./RestaurantDetail.css"
import logo_rec from "../Images/tender_rec.png";
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton, Tooltip} from '@material-ui/core';
import { getRestaurant } from "../Apis/Restaurant";
import { addUserFavorites, removeUserFavorites } from "../Apis/User";
import CommentSection from "./CommentSection"


const RestaurantDetail = ({ myAccountID, myUsername }) => {
  const [restaurant, setRestaurant] = useState({});
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState(false);
  const { id } = useParams();

  useEffect( () => {
    const fetchData = async () => {
      const restaurant = await getRestaurant(id);
      setRestaurant(restaurant)
      console.log(restaurant)
    }
    fetchData()
  }, [])

  const onLikeClick = async () => {
    if (dislike) {
      await onDislikeClick()
    }
    if (restaurant) {
      if (!like) {
        console.log("liked " + restaurant.name)
        const result = await addUserFavorites(myAccountID, { like: id });
      } else {
        console.log("undo like " + restaurant.name)
        const result = await removeUserFavorites(myAccountID, { like: id });
      }
      setLike(!like)
    }
  }

  const onDislikeClick = async () => {
    if (like) {
      await onLikeClick()
    }
    if (restaurant) {
      if (!dislike) {
        console.log("disliked " + restaurant.name)
        const result = await addUserFavorites(myAccountID, { dislike: id });
      } else {
        console.log("undo dislike " + restaurant.name)
        const result = await removeUserFavorites(myAccountID, { dislike: id });
      }
      setDislike(!dislike)
    }
  }

  const onFavClick = async () => {
    if (restaurant) {
      if (!fav) {
        console.log("faved " + restaurant.name)
        const result = await addUserFavorites(myAccountID, { favourite: id });
      } else {
        console.log("undo fav " + restaurant.name)
        const result = await removeUserFavorites(myAccountID, { favourite: id });
      }
      setFav(!fav)
    }
  }

  return (
    <div className="restDetailPage">
      <div className="restDetailContainer">
        <img className="image" src={!restaurant.image ? logo_rec : restaurant.image} alt="restaurant"/>
        <br/>
        <div className="statsBar">
          <div className="titleAddress">
            <h1 className="title">{restaurant.name ?? `Restaurant ${restaurant._id}`}</h1>
            <br/>
            <h4 className="address">{restaurant.address ?? "Address"}</h4>
          </div>
          <span className="likes">
            <Tooltip title="Like!" placement="top">
              <IconButton onClick={onLikeClick}>
                <FavoriteIcon color={like ? "like" : ""} fontSize="large" className="swipeButtons_right" />
              </IconButton>
            </Tooltip>
            <span className="like-count"> {restaurant.likes ? restaurant.likes.length : null} </span>
          </span>
          <span className="dislikes">
            <Tooltip title="Dislike!" placement="top">
              <IconButton onClick={onDislikeClick}>
                <ClearIcon color={dislike ? "dislike" : ""} fontSize="large" className="swipeButtons_left" />
              </IconButton>
            </Tooltip>
            <span className="dislike-count"> {restaurant.dislikes ? restaurant.dislikes.length : null} </span>
          </span>
          <Tooltip title="Favourite!" placement="top">
            <IconButton onClick={onFavClick}>
              <StarIcon fontSize="large" color={fav ? "fav": ""} className="swipeButtons_star"/>
            </IconButton>
          </Tooltip>
        </div>
        <br/>
        <div className="description card_body"><p>{restaurant.description}</p></div>
        { restaurant.comments && <CommentSection comments={restaurant.comments}
          myAccountID={myAccountID} myUsername={myUsername} restaurantId={restaurant._id}/>
        }
      </div>
    </div>
  );
};

export default RestaurantDetail;