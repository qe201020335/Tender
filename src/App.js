import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import RestaurantCards from "./Components/RestaurantCards";
import SwipeButtonsBar from "./Components/SwipeButtonsBar";
import RestaurantDetail from "./Components/RestaurantDetail";
import RestaurantProfile from "./Components/RestaurantProfile";
import Fav from "./Components/Fav";
import Login from "./Components/Login";

const App = () => {
  const [openRestDetail,  setOpenRestDetail] = useState(false);
  const [clicked_restaurant, setRest] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const [loggedInAsRestaurant, setLoggedInAsRestaurant] = useState(false);
  const [myRestaurant, setMyRestaurant] = useState(null);

  const onCardClick = (restaurant) => {
    setOpenRestDetail(true);
    setRest(restaurant);
    console.log(restaurant);
  }

  const onClickOutside = () => {
    setOpenRestDetail(false);
  }

  return (
    <div>
      <BrowserRouter>

        <NavBar/>

        <Switch>

          <Route exact path="/" render={() =>
            <div>
              <RestaurantCards onCardClick={onCardClick} />
              {openRestDetail && <RestaurantDetail restaurant={clicked_restaurant} OnClickOutside={onClickOutside}/>}
              <SwipeButtonsBar />
            </div>}
          />

          <Route exact path="/my-restaruant" render={() =>
            <div>
              <RestaurantProfile restaurant={myRestaurant} setMyRestaurant={setMyRestaurant}/>
            </div>}
          />

          <Route exact path="/fav" render={() =>
            <div>
              <Fav loginStatus={loginStatus}/>
            </div>}
          />

          <Route exact path="/login-restaurant" render={() =>
            <div>
              <Login
                setLoginStatus={setLoginStatus}
                setLoggedInAsRestaurant={setLoggedInAsRestaurant}
                isRestaurant={true}
                setMyRestaurant={setMyRestaurant}/>
            </div>}
          />
          <Route exact path="/login-user" render={() =>
            <div>
              <Login
                setLoginStatus={setLoginStatus}
                setLoggedInAsRestaurant={setLoggedInAsRestaurant}
                isRestaurant={false}/>
            </div>}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
