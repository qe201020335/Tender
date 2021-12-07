import React from 'react';
import {IconButton} from "@material-ui/core";
import EditIcon from "@mui/icons-material/EditRounded";
import "./AdminRestListEntry.css"
import logo_rec from "../Images/tender_rec.png";

const AdminRestListEntry = ( {restaurant, onClickEdit} ) => {

  const onClickEditButton = () => {
    onClickEdit(restaurant._id)
  }

  return (
    <div className="li_container">
      <li className="AdminRestEntry">
        <img className="rest_image" src={!restaurant.image ? logo_rec : restaurant.image} alt="restaurant"/>
        <div className="rest_info">
          <b className='rest_name'>{restaurant.name ?? `Restaurant ${restaurant._id}`}</b>
          <IconButton className='edit_button'>
            <EditIcon onClick={onClickEditButton}> Edit </EditIcon>
          </IconButton><br/>
          <span className="rest_info_span">{restaurant.phoneNumber ?? "Phone"}</span><br/>
          <span className="rest_info_span">{restaurant.address ?? "Address"}</span>
        </div>
      </li>
      <br/>
      <br/>
    </div>
  )
}

export default AdminRestListEntry