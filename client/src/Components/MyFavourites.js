import React, { useState, useEffect } from 'react';
import FavouritesCard from './FavouritesCard';
import { getUserFavorites, saveUserFavorites } from "../Apis/User";
import { getRestaurant } from "../Apis/Restaurant";
import { Redirect } from 'react-router-dom';
import "./MyFavourites.css";

const MyFavourites = ({ myAccountID }) => {
  const [myfavourites, setMyfavourites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const favourites =  await getUserFavorites(myAccountID);
      const favouriteRestaurants = await Promise.all(favourites.favourites.map(async (restaurantId) => {
        const restaurant = await getRestaurant(restaurantId)
        return restaurant
      }))
      console.log(favouriteRestaurants)
      setMyfavourites(favouriteRestaurants)
    }
    fetchData();
  }, [])

  const unfavourite = async (restaurant) => {
    const restaruantsLeft = myfavourites.filter((curRestaurant) => { 
      return restaurant !== curRestaurant;
    });
    console.log(restaruantsLeft)
    const favourites = { favourites: restaruantsLeft}
    const updateFavourites = await saveUserFavorites(myAccountID, favourites)
    const favouriteRestaurants = await Promise.all(updateFavourites.favourites.map(async (restaurantId) => {
      const restaurant = await getRestaurant(restaurantId)
      return restaurant
    }))
    setMyfavourites(favouriteRestaurants);
  }

  return (
    <div>
      <h2 className="fav_title">My Favourites</h2>
      <br/>
      <div className='list_container'>
        <ul>
          { myfavourites.map((restaurant) => {
              return (<FavouritesCard restaurant={restaurant} handleUnFavorite={unfavourite}/>);
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default MyFavourites;