import React from "react";
import { useState } from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import RestaurantCards from "./Components/RestaurantCards";
import SwipeButtonsBar from "./Components/SwipeButtonsBar";
import Profile from "./Components/Profile";
import RestaurantDetail from "./Components/RestaurantDetail";
import Fav from "./Components/Fav";
import Restaurant from "./Components/Restaurant";

const App = () => {
  const [openRestDetail,  setOpenRestDetail] = useState(false);
  const [clicked_restaurant, setRest] = useState(null);
  const [loginStatus, setLoginStatus] = useState(0);

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

          <Route exact path="/Profile" render={() =>
            <div>
              <Profile loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
            </div>}
          />

          <Route exact path="/fav" render={() =>
            <div>
              <Fav loginStatus={loginStatus}/>
            </div>}
          />

          <Route exact path="/restaurant" render={() =>
            <div>
              <Profile loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
            </div>}
          />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
