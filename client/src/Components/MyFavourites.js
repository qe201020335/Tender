import React, {useEffect, useState} from 'react';
import FavouritesCard from './FavouritesCard';
import {getUserFavorites, removeUserFavorites} from "../Apis/User";
import {getRestaurant} from "../Apis/Restaurant";
import "./MyFavourites.css";

const MyFavourites = ({ myAccountID }) => {
  const [myFavourites, setMyFavourites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const favourites =  await getUserFavorites(myAccountID);
      const favouriteRestaurants = await Promise.all(favourites.favourites.map(async (restaurantId) => {
        return await getRestaurant(restaurantId)
      }))
      setMyFavourites(favouriteRestaurants)
    }
    fetchData();
  }, [])

  const unfavourite = async (restaurant) => {
    const restaurantsLeft = myFavourites.filter((curRestaurant) => {
      return restaurant !== curRestaurant;
    });
    const favourites = { favourites: restaurantsLeft}

    const updateFavourites = await removeUserFavorites(myAccountID, { favourite: restaurant._id });

    const favouriteRestaurants = await Promise.all(updateFavourites.favourites.map(async (restaurantId) => {
      return await getRestaurant(restaurantId)
    }))
    setMyFavourites(favouriteRestaurants);
  }

  return (
    <div>
      <h2 className="fav_title">My Favourites</h2>
      <br/>
      <div className='list_container'>
        <ul>
          { myFavourites.map((restaurant) => {
              return (<FavouritesCard restaurant={restaurant} handleUnFavorite={unfavourite}/>);
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default MyFavourites;