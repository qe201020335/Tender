import React from 'react';
import "./RestaurantDetail.css"
import logo_rec from "../Images/tender_rec.png";

const RestaurantDetail = ({ restaurant, OnClickOutside}) => {
  console.log(restaurant)

  const onClick = (event) => {
    console.log(event);
    if (event.target.className !== "restDetailContainer") {
      // click outside
      OnClickOutside()
    }
  }


  return (
    <div className="restDetailBackground" onClick={onClick}>
      <div className="restDetailContainer">
        <img className="image" src={!restaurant.image ? logo_rec : restaurant.image} alt="restaurant"/>
        <br/>
        <div className="title"><h1>{restaurant.name ?? `Restaurant ${restaurant._id}`}</h1></div>
        <div className="address"><h4>{restaurant.address ?? "Address"}</h4></div>
        <br/>
        <div className="card_body"><p>{restaurant.description}</p></div>
      </div>
    </div>
  );
};

export default RestaurantDetail;