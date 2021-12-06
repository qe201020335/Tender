import React, { useState, useEffect } from 'react';
import "./RestaurantCards.css";
import Card from "./Card";
import { getAllRestaurant } from "../Apis/Restaurant";
import { addUserFavorites, removeUserFavorites } from "../Apis/User";
import SwipeButtonsBar from "./SwipeButtonsBar";

const RestaurantCards = ({ myAccountID, onCardClick }) => {
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

  const onLikeClick = async () => {
    if (currDisplayTop) {
      if (!like) {
        console.log("liked " + currDisplayTop.restaurant.name)
        const result = await addUserFavorites(myAccountID, { like: currDisplayTop.restaurant._id });
      } else {
        console.log("undo like " + currDisplayTop.restaurant.name)
        const result = await removeUserFavorites(myAccountID, { like: currDisplayTop.restaurant._id });
      }
      setLike(!like)
    }
  }

  const onDislikeClick = async () => {
    if (currDisplayTop) {
      if (!dislike) {
        console.log("disliked " + currDisplayTop.restaurant.name)
        const result = await addUserFavorites(myAccountID, { dislike: currDisplayTop.restaurant._id });
      } else {
        console.log("undo dislike " + currDisplayTop.restaurant.name)
        const result = await removeUserFavorites(myAccountID, { dislike: currDisplayTop.restaurant._id });
      }
      setDislike(!dislike)
    }
  }

  const onFavClick = async () => {
    if (currDisplayTop) {
      if (!fav) {
        console.log("faved " + currDisplayTop.restaurant.name)
        const result = await addUserFavorites(myAccountID, { favourite: currDisplayTop.restaurant._id });
      } else {
        console.log("undo fav " + currDisplayTop.restaurant.name)
        const result = await removeUserFavorites(myAccountID, { favourite: currDisplayTop.restaurant._id });
      }
      setFav(!fav)
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
