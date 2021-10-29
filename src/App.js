import React from "react";
import { useState } from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import RestaurantCards from "./Components/RestaurantCards";
import SwipeButtonsBar from "./Components/SwipeButtonsBar";
import UserLogin from "./Components/UserLogin";
import RestaurantDetail from "./Components/RestaurantDetail";
import Fav from "./Components/Fav";

const App = () => {
  const [openRestDetail, setOpenRestDetail] = useState(false);

  const onCardClick = (restaurant) => {
    setOpenRestDetail(true);
    console.log(restaurant);
  }

  return (
    <div>
      <BrowserRouter>

        <NavBar/>

        <Switch>

          <Route exact path="/" render={() =>
            <div>
              <RestaurantCards onCardClick={onCardClick} />
              {openRestDetail && <RestaurantDetail />}
              <SwipeButtonsBar />
            </div>}
          />

          <Route exact path="/UserLogin" component={UserLogin}/>

          <Route exact path="/fav"component={Fav}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
