import React, { useState, useEffect } from 'react';
import "./RestaurantCards.css";
import Card from "./Card";
import { getAllRestaurant } from "../Apis/Restaurant";
import SwipeButtonsBar from "./SwipeButtonsBar";
import tender_sq from "../Images/tender_sq.png"

const RestaurantCards = ({ myAccountID, onCardClick }) => {
  const [currDisplayTop, setCurrDisplayTop] = useState(null)
  const [currDisplayBottom, setCurrDisplayBottom] = useState(null)

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
    nextCard()
  }

  return (
    <div className="RestaurantCards">
      <div className="bg_div" >
        <img src={tender_sq} className="cards_bg_img" alt="tender_img"/>
        { !currDisplayTop &&
        <label className="cards_oops">{"Oops! We run out of restaurants (>﹏<) "}</label>}
      </div>
      <div className="RestaurantCards_cardContainer">
        {currDisplayBottom!==null && currDisplayBottom.card}
        {currDisplayTop!==null && currDisplayTop.card}
      </div>
      <SwipeButtonsBar restaurant={currDisplayTop ? currDisplayTop.restaurant : null} myAccountID={myAccountID}/>
    </div>
  )
}

export default RestaurantCards
