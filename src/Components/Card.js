import React from 'react';
import "./RestaurantCards.css";
import TinderCard from "react-tinder-card";

const Card = ({ restaurant, onCardClick, onCardSwipe, onCardLeft }) => {

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
        key={restaurant.name}
        preventSwipe={["up","down"]}
        onSwipe={(direction) => onCardSwipe(direction, restaurant)}
        onCardLeftScreen={() => onCardLeft(restaurant)}
      >
        <div
          style={{ backgroundImage: "url(" + restaurant.image + ")" }}
          className="card"
        >
          <h3>{restaurant.name}</h3>
          <h4>{restaurant.address}</h4>
        </div>
      </TinderCard>
    </div>
  )
}

export default Card;
