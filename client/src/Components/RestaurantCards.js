import React, { useState, useEffect } from 'react';
import "./RestaurantCards.css";
import Card from "./Card";
import { getAllRestaurant } from "../Repository/RestaurantRepository";
import SwipeButtonsBar from "./SwipeButtonsBar";

const RestaurantCards = ({ onCardClick }) => {
  // Use session storage to mimic database for now
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState(false);
  const [currDisplayRest, setCurrDisplayRest] = useState(null)

  let swipeDirection;
  let currDisplayRestIndex = 0;
  const restaurants = []

  useEffect(() => {
    const rests = getAllRestaurant()
    rests.forEach((restaurant) => (restaurants.push(
      {
        restaurant : restaurant,
        card : <Card restaurant={ restaurant } onCardClick={ onCardClick } onCardSwipe={ onCardSwipe } onCardLeftScreen={ onCardLeftScreen }/>
      })
    ))
    console.log(restaurants)
    nextCard()
  }, [])

  console.log(restaurants);

  const nextCard = () => {
    console.log("try to display card " + currDisplayRestIndex)
    if (currDisplayRestIndex < restaurants.length) {
      setCurrDisplayRest(restaurants[currDisplayRestIndex])
      currDisplayRestIndex++
    } else {
      console.log("no more cards!")
    }
  }

  const onCardSwipe = (direction, restaurant) => {
    // card is flying now but hasn't left the dom yet
    swipeDirection = direction
    console.log(`Swiping ${direction} ${restaurant.name}`);

  };

  const onCardLeftScreen = (restaurant) => {
    // This is when we display next card
    console.log(`${restaurant.name} out ${swipeDirection}!`);
    setLike(false)
    setDislike(false)
    nextCard()
  }


  return (
    <div className="RestaurantCards">
      <div className="RestaurantCards_cardContainer">
        {currDisplayRest!==null && currDisplayRest.card}
      </div>
      <SwipeButtonsBar like={like} setLike={setLike} dislike={dislike} setDislike={setDislike} fav={fav} setFav={setFav}/>
    </div>
  )
}

export default RestaurantCards
