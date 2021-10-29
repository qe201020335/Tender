import React from 'react';
import "./RestaurantDetail.css"

const RestaurantDetail = ({ restaurant }) => {
  return (
    <div className="restDetailBackground">
      <div className="restDetailContainer">
        <div className="title"><h1>Mcdonald's</h1></div>
        <div className="address"><h3>675 Yonge St, Toronto, ON M4Y 1T2</h3></div>
        <div className="card_body"><p>McDonald's is an American fast food company,
         founded in 1940 as a restaurant operated by Richard and Maurice McDonald, 
         in San Bernardino, California, United States.</p></div>
      </div>
    </div>
  );
};

export default RestaurantDetail;