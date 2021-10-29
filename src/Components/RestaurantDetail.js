import React from 'react';
import "./RestaurantDetail.css"

const RestaurantDetail = ({ restaurant }) => {
  console.log(restaurant)
  return (
    <div className="restDetailBackground">
      <div className="restDetailContainer">
        <div className="title"><h1>{restaurant.name}</h1></div>
        <div className="address"><h3>{restaurant.address}</h3></div>
        <div className="card_body"><p>{restaurant.description}</p></div>
      </div>
    </div>
  );
};

export default RestaurantDetail;