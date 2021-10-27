import React from "react";
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import RestaurantCards from "./RestaurantCards";
import SwipeButtons from "./SwipeButtons";
import UserLogin from "./UserLogin";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" render={() => 
            <div>
              <NavBar />
              <RestaurantCards />
              <SwipeButtons />
            </div>
          }/>

          <Route exact path="/UserLogin" component={UserLogin}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
