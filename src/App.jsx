import React, { useState, useEffect } from "react";
import "./App.scss";

import NavBar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Get all Punks
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=3&per_page=80")
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.log(error));
  }, []);

  // setSearchTerm to match user input
  const handleSearchInput = element => setSearchTerm(element.target.value);

  // Preset filters
  // I HAVE ADDED THE METHODS TO FILTER BY ONTO EACH OF THE OBJECTS
  // NOW ALL OF THE FILTER DATA IS IN ONE PLACE
  const [beerFilters, setBeerFilters] = useState([
    { filterName: "High ABV (> 6.0%)", value: "abv", active: false, filterBy: beer => beer.abv > 6 },
    {
      filterName: "Classic Range",
      value: "classic",
      active: false,
      filterBy: beer => beer.first_brewed.slice(-4) < 2010,
    },
    { filterName: "Acidic (pH < 4)", value: "acidic", active: false, filterBy: beer => beer.ph < 4 },
    { filterName: "Bitter (IBU > 100)", value: "IBU", active: false, filterBy: beer => beer.ibu > 90 },
    { filterName: "Smokey", value: "smoke", active: false, filterBy: beer => beer.description.includes("smok") },
    {
      filterName: "Nice With Something Cheesy",
      value: "cheese",
      active: false,
      filterBy: beer => beer.food_pairing.find(element => element.includes("cheese ")),
    },
    {
      filterName: "Nice With Something Chocolatey",
      value: "chocolate",
      active: false,
      filterBy: beer => beer.food_pairing.find(element => element.includes("chocolate ")),
    },
  ]);

  // Filter - takes applied filters and makes copy array with only those in
  const handleCheckedBoxes = (beerFilter, active) => {
    const beerFiltersCopy = beerFilters.map(beer => ({ ...beer }));
    // const beerFiltersCopy = [...beerFilters];
    const index = beerFiltersCopy.findIndex(beerFilterCopy => beerFilterCopy.value === beerFilter.value);
    beerFiltersCopy[index].active = active;
    // console.log(beerFilters);
    setBeerFilters(beerFiltersCopy);
  };

  return (
    <>
      <NavBar handleSearchInput={handleSearchInput} beerFilters={beerFilters} handleCheckedBoxes={handleCheckedBoxes} />
      <Main beers={beers} searchTerm={searchTerm} beerFilters={beerFilters} />
    </>
  );
};

export default App;
