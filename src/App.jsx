import "./App.scss";
import React, { useState, useEffect } from "react";

import FilterItem from "./components/FilterItem/FilterItem";
import FilterList from "./components/FilterList/FilterList";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SearchBox from "./components/SearchBox/SearchBox";
// import beers from "./data/beers";

const App = () => {
  // State for Search
  const [searchTerm, setSearchTerm] = useState("");

  // State for Beers
  const [beers, setBeers] = useState([]);

  const handleInput = (event) => {
    const userInput = event.target.value;
    setSearchTerm(userInput);
  };

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
      .then((response) => {
        return response.json();
      })
      .then(
        (beers) => {
          console.log(beers);
          return setBeers(beers);
        },
        [searchTerm]
      );
  });

  console.log("useEffect run");

  return (
    <div className="app">
      <Navbar handleInput={handleInput} />

      {beers && <Main beers={beers} />}
    </div>
  );
};

export default App;
