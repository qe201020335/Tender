import React, { useState, useEffect } from 'react';
import "./RestaurantCards.css";
import Card from "./Card";
import { getAllRestaurant } from "../Apis/Restaurant";
import SwipeButtonsBar from "./SwipeButtonsBar";
import tender_sq from "../Images/tender_sq.png"
import { useHistory } from 'react-router-dom';
import leftArrow from "../Images/left_arrow.png"
import rightArrow from "../Images/right_arrow.png"
import {addUserFavorites, removeUserFavorites} from "../Apis/User";


const RestaurantCards = ({ myAccountID }) => {
  const [currDisplayTop, setCurrDisplayTop] = useState(null)
  const [currDisplayBottom, setCurrDisplayBottom] = useState(null)
  const [swipeOnce, setSwipeOnce] = useState(false)
  const history = useHistory();
  
  let swipeDirection;
  let currDisplayRestTopIndex = 0;
  const restaurants = []

  
  useEffect(() => {
    const fetchData = async () => {
      const rests =  await getAllRestaurant();
      console.log(rests)
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

  const onCardClick = (restaurant) => {
    history.push(`/restaurant/${restaurant._id}`)
  }

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

  const onCardLeftScreen = async (restaurant) => {
    // This is when we display next card
    console.log(`${restaurant.name} out ${swipeDirection}!`);
    if (!swipeOnce) {
      setSwipeOnce(true)
    }
    // switch (swipeDirection) {
    //   case "left":
    //     await onDislike()
    //     break
    //   case "right":
    //     await onLike()
    //     break
    //   default:
    //     break
    // }
    nextCard()
  }

  // const onLike = async () => {
  //   if (!myAccountID) {
  //     history.push("/login")
  //     return
  //   }
  //   if (currDisplayTop) {
  //     const restaurant = currDisplayTop.restaurant
  //     console.log("liked " + restaurant.name)
  //     await addUserFavorites(myAccountID, { like: restaurant._id });
  //     await removeUserFavorites(myAccountID, { dislike: restaurant._id });
  //   }
  // }
  //
  // const onDislike = async () => {
  //   if (!myAccountID) {
  //     history.push("/login")
  //     return
  //   }
  //
  //   if (currDisplayTop) {
  //     const restaurant = currDisplayTop.restaurant
  //     console.log("disliked " + restaurant.name)
  //     await addUserFavorites(myAccountID, { dislike: restaurant._id });
  //     await removeUserFavorites(myAccountID, { like: restaurant._id });
  //   }
  // }

  return (
    <div className="RestaurantCards">
      <div className="slogan_div">
        <label className="slogan">TENDER - Find Your Favourite Restaurant!</label>
      </div>
      <div className="bg_div" >
        <img src={tender_sq} className="cards_bg_img" alt="tender_img"/>
        { !currDisplayTop &&
        <label className="cards_oops">{"Oops! We run out of restaurants (>﹏<) "}</label>}
      </div>

      {!swipeOnce &&
      <img src={leftArrow} className="card_arrow left_arrow" />}
      {!swipeOnce &&
      <img src={rightArrow} className="card_arrow right_arrow" />}


      <div className="RestaurantCards_cardContainer">
        {currDisplayBottom!==null && currDisplayBottom.card}
        {currDisplayTop!==null && currDisplayTop.card}
      </div>
      <SwipeButtonsBar restaurant={currDisplayTop ? currDisplayTop.restaurant : null} myAccountID={myAccountID}/>
    </div>
  )
}

export default RestaurantCards
