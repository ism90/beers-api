import "./App.scss";
import React, { useState, useEffect } from "react";

import FilterItem from "./components/FilterItem/FilterItem";
import FilterList from "./components/FilterList/FilterList";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import SearchBox from "./components/SearchBox/SearchBox";
// import beers from "./data/beers";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beersRes, setBeersRes] = useState([]);

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => {
        return res.json();
      })
      .then(
        (beers) => {
          console.log(beers);
          return setBeersRes(beers);
        },
        [searchTerm]
      );
  });

  return (
    <div className="app">
      <Navbar handleInput={handleInput} searchTerm={searchTerm} />
      {beersRes && (
        <Main
          beers={beersRes.filter((beer) => {
            return beer.name.includes(searchTerm);
          })}
        />
      )}
    </div>
  );
};

export default App;
