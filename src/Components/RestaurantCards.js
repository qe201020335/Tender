import React, { useState } from 'react';
import "./RestaurantCards.css";
import Card from "./Card";
//import axios from './axios';
//import { useEffect } from 'react'

const RestaurantCards = ({ onCardClick }) => {
  // Use session storage to mimic database for now
  if (!sessionStorage.getItem("popeyes")){ // name
    sessionStorage.setItem("popeyes", "Popeyes")
  }
  if (!sessionStorage.getItem("popeyesAddress")){ // address
    sessionStorage.setItem("popeyesAddress", "553 Bloor St W, Toronto, ON M5S 1Y6")
  }
  if (!sessionStorage.getItem("popeyesContact")){ // contact
    sessionStorage.setItem("popeyesContact", "+1(416)530-0123")
  }
  if (!sessionStorage.getItem("popeyesDescription")){ // description
    sessionStorage.setItem("popeyesDescription", "Popeyes Louisiana Kitchen, Inc., also known as Popeyes and formerly named Popeyes Chicken & Biscuits and Popeyes Famous Fried Chicken & Biscuits.")
  }
  if (!sessionStorage.getItem("popeyesPic")){ // img url
    sessionStorage.setItem("popeyesPic", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F06%2F09%2Fpopeyes.jpg&q=85")
  }

  if (!sessionStorage.getItem("mcdonalds")){ // name
    sessionStorage.setItem("mcdonalds", "McDonald's")
  }
  if (!sessionStorage.getItem("mcdonaldsAddress")){ // address
    sessionStorage.setItem("mcdonaldsAddress", "675 Yonge St, Toronto, ON M4Y 1T2")
  }
  if (!sessionStorage.getItem("mcdonaldsContact")){ // contact
    sessionStorage.setItem("mcdonaldsContact", "+1(416)413-1442")
  }
  if (!sessionStorage.getItem("mcdonaldsDescription")){ // description
    sessionStorage.setItem("mcdonaldsDescription", "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.")
  }
  if (!sessionStorage.getItem("mcdonaldsPic")){ // img url
    sessionStorage.setItem("mcdonaldsPic", "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-tray.jpg")
  }

  if (!sessionStorage.getItem("subway")){ // name
    sessionStorage.setItem("subway", "Subway")
  }
  if (!sessionStorage.getItem("subwayAddress")){ // address
    sessionStorage.setItem("subwayAddress", "917 Bay St., Toronto, ON M5S 1Z9")
  }
  if (!sessionStorage.getItem("subwayContact")){ // contact
    sessionStorage.setItem("subwayContact", "+1(416)792-3500")
  }
  if (!sessionStorage.getItem("subwayDescription")){ // description
    sessionStorage.setItem("subwayDescription", "Subway is an American multi-national fast food restaurant franchise that primarily sells submarine sandwiches, wraps, salads and beverages.")
  }
  if (!sessionStorage.getItem("subwayPic")){ // img url
    sessionStorage.setItem("subwayPic", "https://www.nrn.com/sites/nrn.com/files/Subway-Melts-Franchisee-Alert.jpg")
  }
  
  const [restaurants, setRestaurants] = useState([
    // Hardcoded for phase 1
    { name: String(sessionStorage.getItem("popeyes")),
      image: String(sessionStorage.getItem("popeyesPic")),
      address: String(sessionStorage.getItem("popeyesAddress")),
      description: String(sessionStorage.getItem("popeyesDescription"))
    },
    { name: String(sessionStorage.getItem("mcdonalds")),
      image: String(sessionStorage.getItem("mcdonaldsPic")),
      address: String(sessionStorage.getItem("mcdonaldsAddress")),
      description: String(sessionStorage.getItem("mcdonaldsDescription"))
    },
    { name: String(sessionStorage.getItem("subway")),
      image: String(sessionStorage.getItem("subwayPic")),
      address: String(sessionStorage.getItem("subwayAddress")),
      description: String(sessionStorage.getItem("subwayDescription"))
    }
    ]);

  // useEffect(() => {
  //     async function fetchData() {
  //         const req = await axios.get('/tinder/cards');

  //         setRestaurant(req.data);
  //     }

  //     fetchData();
  // }, [])

  console.log(restaurants);

  const onCardSwipe = (direction, nameDelete) => {
    console.log("removing: " + nameDelete);
  };

  const onCardLeft = (name) => {
    console.log(name + " out!");
    console.log(restaurants);
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
