import "./App.scss";
import React, { useState, useEffect } from "react";

import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [beers, setBeers] = useState([]);
  //for search (second part allows us to update state)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
      .then((res) => {
        return res.json();
      })
      .then(
        (beers) => {
          console.log(beers);
          return setBeers(beers);
        },
        [searchTerm]
      );
  });

  const beersToLowerCase = beers.filter((beer) => {
    const searchToLower = beer.name.toLowerCase();

    return searchToLower.includes(searchTerm);
  });

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  return (
    <div className="app">
      <Navbar
        placeholder="Search"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />

      <Main beers={beersToLowerCase} />
    </div>
  );
};

export default App;
