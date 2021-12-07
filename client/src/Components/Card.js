import React from 'react';
import "./RestaurantCards.css";
import TinderCard from "react-tinder-card";
import logo_rec from "../Images/tender_rec.png"

const Card = ({ restaurant, onCardClick, onCardSwipe, onCardLeftScreen }) => {

  let downx;
  let downy;
  let upx;
  let upy;

  const onMouseDown = (e) => {
    downx = e.clientX
    downy = e.clientY
  }

  const onMouseUp = (e) => {
    upx = e.clientX
    upy = e.clientY

    const distance = Math.sqrt((downy - upy)**2 + (downx - upx)**2)
    if (distance < 10) {
      onCardClick(restaurant)
    }
  }

  return (
    <div onMouseUp={onMouseUp} onMouseDown={onMouseDown} className="swipe">
      <TinderCard
        key={restaurant._id}
        preventSwipe={["up","down"]}
        onSwipe={(direction) => onCardSwipe(direction, restaurant)}
        onCardLeftScreen={() => onCardLeftScreen(restaurant)}
      >
        <div
          style={{ backgroundImage: `url(${!restaurant.image ? logo_rec : restaurant.image})` }}
          className="card"
        >
          <h3>{restaurant.name ?? `Restaurant ${restaurant._id}`}</h3>
          <h4>{restaurant.address ?? "Address"}</h4>
        </div>
      </TinderCard>
    </div>
  )
}

export default Card;
