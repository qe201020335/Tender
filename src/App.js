import React from "react";
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import RestaurantCards from "./RestaurantCards";
import SwipeButtons from "./SwipeButtons";
import UserLogin from "./UserLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" render={() => 
            <div>
              <Header />
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
