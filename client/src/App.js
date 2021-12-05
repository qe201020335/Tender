import React, { useState, useEffect } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import RestaurantCards from "./Components/RestaurantCards";
import RestaurantDetail from "./Components/RestaurantDetail";
import RestaurantProfile from "./Components/RestaurantProfile";
import MyFavourites from "./Components/MyFavourites";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Register from "./Components/Register";
import checkSessionHandler from './Actions/check-session';

const App = () => {
  const [openRestDetail,  setOpenRestDetail] = useState(false);
  const [clicked_restaurant, setRest] = useState(null);
  const [loginType, setLoginType] = useState("LOGGED_OUT");
  const [myRestaurant, setMyRestaurant] = useState(null);
  const [myUser, setMyUser] = useState(null);

  useEffect(async () => {
    await checkSessionHandler(setMyUser, setLoginType);
  }, [])

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

        <NavBar loginStatus={myUser !== null} loginType={loginType} setLoginType={setLoginType} setMyUser={setMyUser}/>

        <Switch>

          <Route exact path="/" render={() =>
            <div>
              <RestaurantCards onCardClick={onCardClick}/>
              {openRestDetail && <RestaurantDetail restaurant={clicked_restaurant} OnClickOutside={onClickOutside}/>}
            </div>}
          />

          <Route exact path="/my-restaurant" render={() => {
            if (loginType !== "RESTAURANT") {
              return <Redirect to="/login"/>
            }
            return <RestaurantProfile restaurant={myRestaurant} setMyRestaurant={setMyRestaurant} loginType={loginType} editingState={false}/>
          }}
          />

          <Route exact path="/my-favourites" render={() =>
            <MyFavourites user={myUser} setMyUser={setMyUser} loginType={loginType}/>}
          />

          <Route exact path="/login" render={() => {
            if (myUser != null) {
              return <Redirect to="/"/>
            }
            return <Login setMyUser={setMyUser} setLoginType={setLoginType}/>}}/>

          <Route exact path="/register" render={() => {
            if (myUser != null) {
              return <Redirect to="/"/>
            }
            return <Register/>
          }}/>

          <Route exact path="/admin" render={ () => <Admin loginType={loginType}/>
          }/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
