import React from 'react';
import "./SwipeButtonsBar.css";
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@material-ui/core';
import { useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const SwipeButtonsBar = ({like, setLike, dislike, setDislike}) => {


  function handleDislike(){
    setDislike(!dislike);
  }
  function handleLike(){
    setLike(!like);
  }

  return (
    <div className="SwipeButtonsBar">
      <div className="SwipeButtons">
        {/* <IconButton>
                    <ReplayIcon frontSize="large" className="swipeButtons_repeat"/>
                </IconButton> */}
        <IconButton>
          <ClearIcon className="closeIcon" fontSize="large" className="swipeButtons_left" onClick={handleDislike}/>
        </IconButton>
        <IconButton>
          <StarIcon fontSize="large" className="swipeButtons_star"/>
        </IconButton>
        <IconButton>
          <FavoriteIcon color={like ? "secondary" : ""} fontSize="large" className="swipeButtons_right" onClick={handleLike}/>
        </IconButton>
      </div>
    </div>

  )
}

export default SwipeButtonsBar;
