import React, { useState, useEffect } from "react";
import "./App.scss";

import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Get all Punks
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=3&per_page=80")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.log(error));
  }, []);

  // setSearchTerm to match user input
  const handleSearchInput = (element) => setSearchTerm(element.target.value);


// Preset filters
  const [beerFilters, setBeerFilters] = useState([
    { filterName: "High ABV (> 6.0%)", value: "abv", active: false },
    { filterName: "Classic Range", value: "classic", active: false },
    { filterName: "Acidic (pH < 4)", value: "acidic", active: false },
    { filterName: "Bitter (IBU > 100)", value: "IBU", active: false },
    { filterName: "Smokey", value: "smoke", active: false },
    {
      filterName: "Nice With Something Cheesy",
      value: "cheese",
      active: false,
    },
    {
      filterName: "Nice With Something Chocolatey",
      value: "chocolate",
      active: false,
    },
  ]);

  // Filter - takes applied filters and makes copy array with only those in -> update state
  const handleCheckedBoxes = (beerFilter, active) => {
    const beerFiltersCopy = [...beerFilters];
    const index = beerFiltersCopy.findIndex(
      (beerFilterCopy) => beerFilterCopy.value === beerFilter.value
    );

    beerFiltersCopy[index].active = active;
    setBeerFilters(beerFiltersCopy);
  };

  return (
    <>
      <NavBar
        handleSearchInput={handleSearchInput}
        beerFilters={beerFilters}
        handleCheckedBoxes={handleCheckedBoxes}
      />
      <Main beers={beers} searchTerm={searchTerm} beerFilters={beerFilters} />
    </>
  );
};

export default App;
