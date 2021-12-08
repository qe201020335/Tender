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
import {useHistory} from "react-router-dom";
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";


const RestaurantDetail = ({ myAccountID, myUsername }) => {

  const history = useHistory()

  const [restaurant, setRestaurant] = useState({});
  const [likeArray, setLikeArray] = useState([]);
  const [dislikeArray, setDislikeArray] = useState([]);
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState(false);
  const { id } = useParams();

  useEffect( () => {
    const fetchData = async () => {
      const restaurant = await getRestaurant(id);
      setRestaurant(restaurant)
      setLikeArray(restaurant.likes)
      setDislikeArray(restaurant.dislikes)
      console.log(restaurant)
      setDislike(restaurant !== null ? restaurant.dislikes.includes(myAccountID) : false)
      setLike(restaurant !== null ? restaurant.likes.includes(myAccountID) : false)
      setFav(restaurant !== null ? restaurant.favourites.includes(myAccountID) : false)
    }
    fetchData()
  }, [myAccountID])

  console.log(dislike)
  console.log(like)
  console.log(fav)

  const onLikeClick = async () => {
    if (!myAccountID) {
      history.push("/login")
    }
    if (dislike) {
      await onDislikeClick()
    }
    if (restaurant) {
      if (!like) {
        console.log("liked " + restaurant.name)
        const result = await addUserFavorites(myAccountID, { like: restaurant._id });
        setLikeArray(result.likes)
      } else {
        console.log("undo like " + restaurant.name)
        const result = await removeUserFavorites(myAccountID, { like: restaurant._id });
        setLikeArray(result.likes)
      }
      setLike(!like)
    }
  }

  const onDislikeClick = async () => {
    if (!myAccountID) {
      history.push("/login")
    }
    if (like) {
      await onLikeClick()
    }
    if (restaurant) {
      if (!dislike) {
        console.log("disliked " + restaurant.name)
        const result = await addUserFavorites(myAccountID, { dislike: restaurant._id });
        setDislikeArray(result.dislikes)
      } else {
        console.log("undo dislike " + restaurant.name)
        const result = await removeUserFavorites(myAccountID, { dislike: restaurant._id });
        setDislikeArray(result.dislikes)
      }
      setDislike(!dislike)
    }
  }

  const onFavClick = async () => {
    if (!myAccountID) {
      history.push("/login")
    }
    if (restaurant) {
      if (!fav) {
        console.log("faved " + restaurant.name)
        const result = await addUserFavorites(myAccountID, { favourite: restaurant._id });
      } else {
        console.log("undo fav " + restaurant.name)
        const result = await removeUserFavorites(myAccountID, { favourite: restaurant._id });
      }
      setFav(!fav)
    }
  }

  const theme = createTheme({
    palette: {
      dislike: {
        main: '#1976d2',
      },
      like: {
        main: '#F93B1D',
      },
      fav: {
        main: '#ff8458'
      }
    },
  });

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

          <ThemeProvider theme={theme}>
          <span className="likes">
            <Tooltip title="Like!" placement="top">
              <IconButton onClick={onLikeClick}>
                <FavoriteIcon color={like ? "like" : ""} fontSize="large" className="swipeButtons_right" />
              </IconButton>
            </Tooltip>
            <span className="like-count"> {likeArray ? likeArray.length : 0} </span>
          </span>

          <span className="dislikes">
            <Tooltip title="Dislike!" placement="top">
              <IconButton onClick={onDislikeClick}>
                <ClearIcon color={dislike ? "dislike" : ""} fontSize="large" className="swipeButtons_left" />
              </IconButton>
            </Tooltip>
            <span className="dislike-count"> {dislikeArray ? dislikeArray.length : 0} </span>
          </span>

          <Tooltip title="Favourite!" placement="top">
            <IconButton onClick={onFavClick}>
              <StarIcon fontSize="large" color={fav ? "fav": ""} className="swipeButtons_star"/>
            </IconButton>
          </Tooltip>

          </ThemeProvider>
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