"use strict";
import React from 'react';
import {IconButton} from "@material-ui/core";
import EditIcon from "@mui/icons-material/EditRounded";
import "./AdminRestListEntry.css"

const AdminRestListEntry = ( {restaurant, onClickEdit} ) => {

  const onClickEditButton = () => {
    onClickEdit(restaurant)
  }

  return (
    <div className="li_container">
      <li className="AdminRestEntry">
        <img className="rest_image" src={restaurant.image}/>
        <div className="rest_info">
          <b className='rest_name'>{restaurant.name}</b>
          <IconButton className='edit_button'>
            <EditIcon onClick={onClickEditButton}> Edit </EditIcon>
          </IconButton><br/>
          <a>{restaurant.contact}</a><br/>
          <a>{restaurant.address}</a>
        </div>
      </li>
      <br/>
      <br/>
    </div>
  )
}

export default AdminRestListEntry