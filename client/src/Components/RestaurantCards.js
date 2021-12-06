import React, { useState, useEffect } from 'react';
import "./RestaurantCards.css";
import Card from "./Card";
import { getAllRestaurant } from "../Apis/Restaurant";
import SwipeButtonsBar from "./SwipeButtonsBar";

const RestaurantCards = ({ onCardClick }) => {
  // Use session storage to mimic database for now
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState(false);
  const [currDisplayTop, setCurrDisplayTop] = useState(null)
  const [currDisplayBottom, setCurrDisplayBottom] = useState(null)

  let swipeDirection;
  let currDisplayRestTopIndex = 0;
  const restaurants = []
  
  useEffect(() => {
    const fetchData = async () => {
      const rests =  await getAllRestaurant();
      rests.forEach((restaurant) => (restaurants.push(
        {
          restaurant : restaurant,
          card : <Card restaurant={ restaurant } onCardClick={ onCardClick } onCardSwipe={ onCardSwipe } onCardLeftScreen={ onCardLeftScreen }/>
        })
      ))
      nextCard()
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextCard = () => {
    console.log(`try to display card ${currDisplayRestTopIndex} and ${currDisplayRestTopIndex +1}`)
    if (currDisplayRestTopIndex < restaurants.length - 1) {
      setCurrDisplayTop(restaurants[currDisplayRestTopIndex])
      setCurrDisplayBottom(restaurants[currDisplayRestTopIndex + 1])
      currDisplayRestTopIndex++
    } else if (currDisplayRestTopIndex === restaurants.length -1) {
      setCurrDisplayTop(restaurants[currDisplayRestTopIndex])
      setCurrDisplayBottom(null)
      console.log(`no card ${currDisplayRestTopIndex +1}`)
      currDisplayRestTopIndex++
    } else {
      setCurrDisplayTop(null)
      setCurrDisplayBottom(null)
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

  const onLikeClick = () => {
    if (currDisplayTop) {
      console.log("like " + currDisplayTop.restaurant.name)
      setLike(!like)

    }
  }

  const onDislikeClick = () => {
    if (currDisplayTop) {
      console.log("dislike " + currDisplayTop.restaurant.name)
      setDislike(!dislike)
    }
  }

  const onFavClick = () => {
    if (currDisplayTop) {
      console.log("fav " + currDisplayTop.restaurant.name)
      setFav(!fav)
      // TODO: add to fav backend
    }

  }


  return (
    <div className="RestaurantCards">
      <div className="RestaurantCards_cardContainer">
        {currDisplayBottom!==null && currDisplayBottom.card}
        {currDisplayTop!==null && currDisplayTop.card}
      </div>
      <SwipeButtonsBar like={like} onLikeClick={onLikeClick} dislike={dislike} onDislikeClick={onDislikeClick} fav={fav} onFavClick={onFavClick}/>
    </div>
  )
}

export default RestaurantCards
