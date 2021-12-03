import React, { useState } from "react";
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import RestaurantCards from "./Components/RestaurantCards";
import SwipeButtonsBar from "./Components/SwipeButtonsBar";
import RestaurantDetail from "./Components/RestaurantDetail";
import RestaurantProfile from "./Components/RestaurantProfile";
import MyFavourites from "./Components/MyFavourites";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Register from "./Components/Register";

const App = () => {
  const [openRestDetail,  setOpenRestDetail] = useState(false);
  const [clicked_restaurant, setRest] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginType, setLoginType] = useState("LOGGED_OUT");
  const [myRestaurant, setMyRestaurant] = useState(null);
  const [myUser, setMyUser] = useState(null);
  const [dislike, setDislike] = useState(false);
  const [like, setLike] = useState(false);


  // const [adminEditingRest , setAdminEditingRest] = useState(null);

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

        <NavBar loginStatus={loginStatus} loginType={loginType}/>

        <Switch>

          <Route exact path="/" render={() =>
            <div>
              <RestaurantCards onCardClick={onCardClick} like={like} setLike={setLike} dislike={dislike} setDislike={setDislike}/>
              {openRestDetail && <RestaurantDetail restaurant={clicked_restaurant} OnClickOutside={onClickOutside}/>}
              <SwipeButtonsBar like={like} setLike={setLike} dislike={dislike} setDislike={setDislike}/>
            </div>}
          />

          <Route exact path="/my-restaruant" render={() => {
            if (loginType !== "RESTAURANT") {
              return <Redirect to="login-restaurant"/>
            }
            return (<div><RestaurantProfile restaurant={myRestaurant} setMyRestaurant={setMyRestaurant} loginType={loginType} editingState={false}/></div>)
          }}
          />

          <Route exact path="/my-favourites" render={() =>
            <div>
              <MyFavourites user={myUser} setMyUser={setMyUser} loginType={loginType}/>
            </div>}
          />

          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>

          <Route exact path="/admin" render={ () =>
            <div>
              <Admin loginType={loginType}/>
            </div>
          }/>

          {/*<Route path="/adminEditing" render={() => {*/}
          {/*  if (adminEditingRest === null) {*/}
          {/*    return <Redirect to="/"/>*/}
          {/*  }*/}
          {/*  return (<div><RestaurantProfile restaurant={adminEditingRest} setMyRestaurant={setAdminEditingRest} loginType={loginType}/></div>)*/}
          {/*}}/>*/}


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
