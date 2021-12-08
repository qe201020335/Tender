import React, {useEffect, useState} from 'react';
import "./SwipeButtonsBar.css";
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton, Tooltip} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {addUserFavorites, removeUserFavorites} from "../Apis/User";
import {useHistory} from "react-router-dom";

const SwipeButtonsBar = ({myAccountID, restaurant}) => {

  console.log(restaurant)
  console.log(myAccountID)

  const history = useHistory()

  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setDislike(restaurant !== null ? restaurant.dislikes.includes(myAccountID) : false)
    setLike(restaurant !== null ? restaurant.likes.includes(myAccountID) : false)
    setFav(restaurant !== null ? restaurant.favourites.includes(myAccountID) : false)
  }, [myAccountID, restaurant])
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
      } else {
        console.log("undo like " + restaurant.name)
        const result = await removeUserFavorites(myAccountID, { like: restaurant._id });
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
      } else {
        console.log("undo dislike " + restaurant.name)
        const result = await removeUserFavorites(myAccountID, { dislike: restaurant._id });
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
    <div className="SwipeButtonsBar">

      {restaurant && <label id="card_tut"><strong>Click for details. Drag to swipe!</strong></label>}

      <div className="SwipeButtons">
        <ThemeProvider theme={theme}>

          <Tooltip title="Dislike!" placement="top">
          <IconButton onClick={onDislikeClick}>
            <ClearIcon color={dislike ? "dislike" : ""} fontSize="large" className="swipeButtons_left" />
          </IconButton>
          </Tooltip>

          <Tooltip title="Favourite!" placement="top">
          <IconButton onClick={onFavClick}>
            <StarIcon fontSize="large" color={fav ? "fav": ""} className="swipeButtons_star"/>
          </IconButton>
          </Tooltip>

          <Tooltip title="Like!" placement="top">
          <IconButton onClick={onLikeClick}>
            <FavoriteIcon color={like ? "like" : ""} fontSize="large" className="swipeButtons_right" />
          </IconButton>
          </Tooltip>

        </ThemeProvider>
      </div>
    </div>

  )
}

export default SwipeButtonsBar;
