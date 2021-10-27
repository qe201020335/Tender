import React from 'react';
import "./RestaurantCards.css";
import TinderCard from "react-tinder-card";

const Card = ({ restaurant, onCardClick, onCardSwipe, onCardLeft }) => {
    return (
      <div onClick={() => onCardClick(restaurant)} className="swipe">
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
