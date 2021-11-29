import React, { useState, useEffect } from 'react';
import "./RestaurantCards.css";
import Card from "./Card";
import { getAllRestaurant } from "../Repository/RestaurantRepository";

const RestaurantCards = ({ onCardClick, like, setLike, dislike, setDislike}) => {
  // Use session storage to mimic database for now
  
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(getAllRestaurant());
  }, [])

  console.log(restaurants);

  const onCardSwipe = (direction, nameDelete) => {
    console.log("removing: " + nameDelete);
    setLike(false)
    setDislike(false)
  };

  const onCardLeft = (name) => {
    console.log(name + " out!");
    console.log(restaurants);
    setLike(false)
    setDislike(false)
  }

  return (
    <div className="RestaurantCards">
      <div className="RestaurantCards_cardContainer">
        { restaurants.map((restaurant) => (
          <Card restaurant={ restaurant }
                onCardClick={ onCardClick }
                onCardSwipe={ onCardSwipe }
                onCardLeft={ onCardLeft }/>
        )) }
      </div>
    </div>
  )
}

export default RestaurantCards
