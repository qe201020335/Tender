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
import Signup from "./Components/Signup";
import checkSessionHandler from './Actions/check-session';

const App = () => {
  const [openRestDetail,  setOpenRestDetail] = useState(false);
  const [clicked_restaurant, setRest] = useState(null);
  const [myAccountID, setMyAccountID] = useState("");
  const [loginType, setLoginType] = useState("LOGGED_OUT");

  useEffect( () => {
    // React suggest this to avoid race condition
    const fetchData = async () => {
      await checkSessionHandler(setMyAccountID, setLoginType);
    }
    fetchData()
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

        <NavBar loginStatus={myAccountID !== ""} loginType={loginType} setLoginType={setLoginType} setUserID={setMyAccountID}/>

        <Switch>

          <Route exact path="/" render={() =>
            <div>
              <RestaurantCards onCardClick={onCardClick}/>
              {openRestDetail && <RestaurantDetail restaurant={clicked_restaurant} OnClickOutside={onClickOutside}/>}
            </div>}
          />

          <Route exact path="/my-restaurant" render={() => {
            if (loginType !== "RESTAURANT" && loginType !== "ADMIN") {
              return <Redirect to="/login"/>
            }
            return <RestaurantProfile restaurantID={myAccountID} editingState={false} setEditedRest={null}/>
          }}
          />

          <Route exact path="/my-favourites" render={() =>
            {
              if (loginType !== "USER" && loginType !== "ADMIN") {
                return <Redirect to="/login"/>
              }
              return <MyFavourites  myAccount={myAccountID}/>}
            }
          />

          <Route exact path="/login" render={() => {
            if (myAccountID !== "") {
              return <Redirect to="/"/>
            }
            return <Login setUserID={setMyAccountID} setLoginType={setLoginType}/>}}/>

          <Route exact path="/signup" render={() => {
            if (myAccountID !== "") {
              return <Redirect to="/"/>
            }
            return <Signup/>
          }}/>

          <Route exact path="/admin" render={ () => {
            if (loginType !== "ADMIN") {
              return <Redirect to="/login"/>
            }
            return <Admin/>
          }}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
