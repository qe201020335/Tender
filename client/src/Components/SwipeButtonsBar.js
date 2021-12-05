import React from 'react';
import "./SwipeButtonsBar.css";
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@material-ui/core';
import { useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SwipeButtonsBar = ({like, onLikeClick, dislike, onDislikeClick, fav, onFavClick}) => {

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
      <label id="card_tut"><strong>Click for details. Drag to swipe!</strong></label>
      <div className="SwipeButtons">
        <ThemeProvider theme={theme}>
          <IconButton onClick={onDislikeClick}>
            <ClearIcon color={dislike ? "dislike" : ""} fontSize="large" className="swipeButtons_left" />
          </IconButton>
          <IconButton onClick={onFavClick}>
            <StarIcon fontSize="large" color={fav ? "fav": ""} className="swipeButtons_star"/>
          </IconButton>
          <IconButton onClick={onLikeClick}>
            <FavoriteIcon color={like ? "like" : ""} fontSize="large" className="swipeButtons_right" />
          </IconButton>
        </ThemeProvider>
      </div>
    </div>

  )
}

export default SwipeButtonsBar;
