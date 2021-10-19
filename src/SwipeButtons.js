import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon frontSize="large" className="swipeButtons_repeat"/>
            </IconButton>
            <IconButton>
                <CloseIcon frontSize="large" className="swipeButtons_left"/>
            </IconButton>
            <IconButton>
                <StarRateIcon frontSize="large" className="swipeButtons_star"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon frontSize="large" className="swipeButtons_right"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
