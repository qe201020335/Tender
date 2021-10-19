import React from "react";
import './App.css';
import Header from "./Header";
import RestaurantCards from "./RestaurantCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <RestaurantCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
