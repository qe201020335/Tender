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
        <img className="image" src={restaurant.image}/>
        <br/>
        <div className="title"><h1>{restaurant.name}</h1></div>
        <div className="address"><h4>{restaurant.address}</h4></div>
        <br/>
        <div className="card_body"><p>{restaurant.description}</p></div>
      </div>
    </div>
  );
};

export default RestaurantDetail;