import React, { useEffect, useState } from 'react'
import "./RestaurantProfile.css";
import { styled } from '@mui/material/styles';
import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getRestaurant, saveRestaurant } from "../Apis/Restaurant";
import defaultImg from "../Images/tender_rec.png";

const RestaurantProfile = ({restaurantID, editingState, setEditedRest}) => {
  const [isEditing, setIsEditing] = useState(editingState);
  const [currRestaurant, setCurrRestaurant] = useState(null);
  const [currImage, setCurrImage] = useState("")

  useEffect(() => {
    const fetchRest = async () => {
      console.log(restaurantID)
      const restaurant = await getRestaurant(restaurantID)
      console.log(restaurant)
      setCurrRestaurant(restaurant)
      setCurrImage(restaurant.image)
    }
    fetchRest()
  }, [])

  const onEditClick = () => {
    setIsEditing(true);
  }

  const onEditSubmit = async () => {
    currRestaurant.image = currImage
    // save the new image url
    setCurrRestaurant(currRestaurant)
    setIsEditing(false);

    console.log(currRestaurant)

    const saved = await saveRestaurant(currRestaurant, restaurantID)

    if (setEditedRest) {
      // for admin viewing state change
      setEditedRest(saved)
    }
  }

  const onRestaurantEdit = (event) => {
    setCurrRestaurant(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      tender: {
        main: '#ca3b28',
        contrastText: '#ffffff',
      },
    },
  });

  const ColorTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
        borderWidth: '2px'
      },
      // '&:hover fieldset': {
      //   borderColor: 'blue',
      // },
      '&.Mui-focused fieldset': {
        borderColor: '#ca3b28',
      },
      '&.Mui-disabled': {
        borderColor: 'black',
        color: 'black'
      }
    },
  });

  return( currRestaurant &&
    <div>
      <br/> <br/>
      <h2 className='txtheader'>Store Profile</h2>
      <ThemeProvider theme={theme}>
        <div className='restaurantInfo_container'>
          <TextField className="restaurant_input" type="text" placeholder="Enter Name" disabled={!isEditing}
                     name="name" label="Name" variant="outlined" value={currRestaurant.name}
                     onChange={onRestaurantEdit} margin="normal"/>

          <TextField className="restaurant_input" type="text" placeholder="Enter Contact Info" disabled={!isEditing}
                     name="phoneNumber" label="Contact" variant="outlined" value={currRestaurant.phoneNumber}
                     onChange={onRestaurantEdit} margin="normal"/>

          <TextField className="restaurant_input" type="text" placeholder="Enter Address" disabled={!isEditing}
                     name="address" label="Address" variant="outlined" value={currRestaurant.address}
                     onChange={onRestaurantEdit} margin="normal"/>

          <TextField className="restaurant_input" type="text" placeholder="Enter Description" disabled={!isEditing}
                     name="description" label="Description" variant="outlined" value={currRestaurant.description}
                     onChange={onRestaurantEdit} margin="normal" minRows="8" multiline/>
        </div>

        <div className="restaurant_pic_div">
          <div className="pic_container">
            <img className="restaurant_pic" src={!currRestaurant.image ? defaultImg : currRestaurant.image} alt="restaurant"/> <br/><br/>
          </div>
          <TextField className="restaurant_image_input" type="url" placeholder="Restaurant Image URL" disabled={!isEditing}
                     name="image" label="Image URL" variant="outlined" value={currImage} margin="normal"
                     onChange={(e) => setCurrImage(e.target.value)} />
        </div>

        <div className='button_container'>
            <Button type="submit" onClick={isEditing ? onEditSubmit : onEditClick}
                    variant="contained" color="tender" fullWidth>
              {isEditing ? "Save Changes!" : "Edit"}
            </Button>
        </div>
      </ThemeProvider>


    </div>
  )
}
export default RestaurantProfile