import React from 'react';
import "./RestaurantDetail.css"

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
        <div className="title"><h1>{restaurant.name}</h1></div>
        <div className="address"><h3>{restaurant.address}</h3></div>
        <div className="card_body"><p>{restaurant.description}</p></div>
      </div>
    </div>
  );
};

export default RestaurantDetail;