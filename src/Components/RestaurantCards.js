import React, { useState } from 'react';
import "./RestaurantCards.css";
import Card from "./Card";
//import axios from './axios';
//import { useEffect } from 'react'

const RestaurantCards = ({ onCardClick }) => {
  const [restaurant, setRestaurant] = useState([
    // Hardcoded for phase 1
    {name: "Popeyes",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F06%2F09%2Fpopeyes.jpg&q=85",
      address: "553 Bloor St W, Toronto, ON M5S 1Y6"},

        {name: "Mcdonald's",
        image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-tray.jpg",
        address: "675 Yonge St, Toronto, ON M4Y 1T2"},

        {name: "Subway",
        image: "https://www.nrn.com/sites/nrn.com/files/Subway-Melts-Franchisee-Alert.jpg",
        address: "917 Bay St., Toronto, ON M5S 1Z9"}
    ]);

  // useEffect(() => {
  //     async function fetchData() {
  //         const req = await axios.get('/tinder/cards');

  //         setRestaurant(req.data);
  //     }

  //     fetchData();
  // }, [])

  console.log(restaurant);

  const onCardSwipe = (direction, nameDelete) => {
    console.log("removing: " + nameDelete);
  };

  const onCardLeft = (name) => {
    console.log(name + " out!");
    console.log(restaurant);
  }

  return (
    <div className="RestaurantCards">
      <div className="RestaurantCards_cardContainer">
        { restaurant.map((restaurant) => (
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
