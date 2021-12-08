import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
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
  const [myAccountID, setMyAccountID] = useState("");
  const [myUsername, setMyUsername] = useState("");
  const [loginType, setLoginType] = useState("LOGGED_OUT");


  useEffect( () => {
    const fetchData = async () => {
      await checkSessionHandler(setMyAccountID, setMyUsername, setLoginType);
    }
    fetchData()
  }, [])


  return (
    <div>
      <BrowserRouter>

        <NavBar loginStatus={myAccountID !== ""} loginType={loginType} setLoginType={setLoginType} setUserID={setMyAccountID}/>

        <Switch>

          <Route exact path="/" render={() =>
            <div>
              <RestaurantCards myAccountID={myAccountID} />
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
              return <MyFavourites  myAccountID={myAccountID}/>}
            }
          />

          <Route exact path="/login" render={() => {
            if (myAccountID !== "") {
              return <Redirect to="/"/>
            }
            return <Login setUserID={setMyAccountID} setLoginType={setLoginType} setMyUsername={setMyUsername}/>}}/>

          <Route exact path="/signup" render={() => {
            if (myAccountID !== "") {
              return <Redirect to="/"/>
            }
            return <Signup setUserID={setMyAccountID} setLoginType={setLoginType}/>
          }}/>

          <Route exact path="/admin" render={ () => {
            if (loginType !== "ADMIN") {
              return <Redirect to="/login"/>
            }
            return <Admin/>
          }}/>

          <Route exact path="/restaurant/:id" render={ () => {
            return <RestaurantDetail myAccountID={myAccountID} myUsername={myUsername}/>
          }}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
