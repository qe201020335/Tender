import React from "react";
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import RestaurantCards from "./Components/RestaurantCards";
import SwipeButtonsBar from "./Components/SwipeButtonsBar";
import UserLogin from "./Components/UserLogin";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" render={() => 
            <div>
              <NavBar />
              <RestaurantCards />
              <SwipeButtonsBar />
            </div>
          }/>

          <Route exact path="/UserLogin" component={UserLogin}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
