import "./App.scss";
import React, { useState, useEffect } from "react";

import FilterItem from "./components/FilterItem/FilterItem";
import FilterList from "./components/FilterList/FilterList";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SearchBox from "./components/SearchBox/SearchBox";
// import beers from "./data/beers";

const App = () => {
  // State for Beers
  const [beers, setBeers] = useState(0);

  // State for Search

  console.log("App refresh");
  // Fetch for all Punk Beers
  useEffect(() => {
    console.log("useEffect run");
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((res) => {
        return res.json();
      })
      .then((beersArray) => {
        console.log(beersArray);
        return setBeers(beers);
        // const mealsArray = mealsObj.meals;
        // // to deal with error message from search
        // if(mealsArray) {
        //   setMeals(mealsArray);
        // } else {setMeals([]);
        // }
      });
  }, [beers]);

  return (
    <div className="app">
      {/* <Navbar />

      <Main /> */}
    </div>
  );
};

export default App;
