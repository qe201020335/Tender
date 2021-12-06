import React, {useEffect, useState} from 'react'
import "./RestaurantProfile.css";
import { styled } from '@mui/material/styles';
import {TextField} from "@material-ui/core";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const RestaurantProfile = ({restaurantID, editingState, setEditedRest}) => {
  const [isEditing, setIsEditing] = useState(editingState);
  const [currRestaurant, setCurrRestaurant] = useState(null);

  useEffect(() => {
    // TODO: get current restaurant from backend
    console.log(restaurantID)
    setCurrRestaurant({ name: "McDonald's",
      contact: "+1(416)413-1442",
      image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-tray.jpg",
      address: "675 Yonge St, Toronto, ON M4Y 1T2",
      description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States."
    })
    console.log(currRestaurant)
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

      <div className='restaurantInfo_container'>

        <ThemeProvider theme={theme}>
          <TextField className="restaurant_input" type="text" placeholder="Enter Name" disabled={!isEditing}
                     name="name" label="Name" variant="outlined" value={currRestaurant.name}
                     onChange={onRestaurantEdit} margin="normal"/>

          <TextField className="restaurant_input" type="text" placeholder="Enter Contact Info" disabled={!isEditing}
                     name="contact" label="Contact" variant="outlined" value={currRestaurant.contact}
                     onChange={onRestaurantEdit} margin="normal"/>

          <TextField className="restaurant_input" type="text" placeholder="Enter Address" disabled={!isEditing}
                     name="address" label="Address" variant="outlined" value={currRestaurant.address}
                     onChange={onRestaurantEdit} margin="normal"/>

          <TextField className="restaurant_input" type="text" placeholder="Enter Description" disabled={!isEditing}
                     name="description" label="Description" variant="outlined" value={currRestaurant.description}
                     onChange={onRestaurantEdit} margin="normal" minRows="6" multiline/>
        </ThemeProvider>
      </div>



      <div className='button_container'>
        <ThemeProvider theme={theme}>
          <Button type="submit" onClick={isEditing ? onEditSubmit : onEditClick}
                  variant="contained" color="tender" fullWidth>
            {isEditing ? "Save Changes!" : "Edit"}
          </Button>
        </ThemeProvider>
      </div>

      <div className="restaurant_pic">
        <img className="restaurant_pic" src={currRestaurant.image} alt="restaurant"/>
      </div>

    </div>
  )
}
export default RestaurantProfile