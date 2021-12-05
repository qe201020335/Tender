import React from 'react';
import FavouritesCard from './FavouritesCard';
import { Redirect } from 'react-router-dom';
import "./MyFavourites.css";

const MyFavourites = ({ myAccount }) => {
  
  const unfavourite = (restaurant) => {
    const restaruantsLeft = user.favorites.filter((curRestaurant) => { 
      return restaurant !== curRestaurant;
    });
    setMyUser({favorites: restaruantsLeft});
  }

  return (
    <div>
      <h2 className="fav_title">My Favourites</h2>
      <br/>
      <div className='list_container'>
        <ul>
          { user.favorites.map((restaurant) => {
              return (<FavouritesCard restaurant={restaurant} handleUnFavorite={unfavourite}/>);
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default MyFavourites;