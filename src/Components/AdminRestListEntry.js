"use strict";
import React from 'react';
import {useHistory} from "react-router-dom";

const AdminRestListEntry = ( {restaurant, onClickEdit} ) => {

  // const history = useHistory();

  const onClickEditButton = () => {
    onClickEdit(restaurant)
    // history.push("/adminEditing")
  }
  return (
    <li className="AdminRestEntry">
      <p> <span><strong>{restaurant.name}</strong></span>  {restaurant.address} <button type="button" onClick={onClickEditButton}>View</button> </p>

    </li>
  )
}

export default AdminRestListEntry