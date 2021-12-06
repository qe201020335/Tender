import React, {useEffect, useState} from 'react'
import RestaurantProfileView from './RestaurantProfileView'
import RestaurantProfileForm from './RestaurantProfileForm'
import "./RestaurantProfile.css";
import { Redirect } from 'react-router-dom';

const RestaurantProfile = ({restaurantID, editingState, setEditedRest}) => {
  const [isEditing, setIsEditing] = useState(editingState);
  const [currRestaurant, setCurrRestaurant] = useState(null);

  useEffect(() => {
    // TODO: get current restaurant from backend
    console.log(restaurantID)
    setCurrRestaurant(null)
  }, [])

  const onEditClick = () => {
    setIsEditing(true);
  }

  const onEditSubmit = () => {
    setIsEditing(false);
    console.log(currRestaurant)

    //TODO: update database

    if (setEditedRest) {
      // for admin viewing state change
      setEditedRest(currRestaurant)
    }
  }

  const onRestaurantEdit = (event) => {
    setCurrRestaurant(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  return(
    <div>
      <br/> <br/>
      <h2 className='txtheader'>Store Profile</h2>

      { isEditing ? <RestaurantProfileForm restaurant={currRestaurant} onRestaurantEdit={onRestaurantEdit}/>
        : <RestaurantProfileView restaurant={currRestaurant}/> }

      <div className='button_container'>
        { isEditing ? <button type="submit" onClick={onEditSubmit}>Save Changes</button>
          : <button type="submit" onClick={onEditClick}>Edit</button> }
      </div>

      <div className="restaurant_pic">
        <img className="restaurant_pic" src={currRestaurant.image} alt="restaurant"/>
      </div>

    </div>
  )
}
export default RestaurantProfile