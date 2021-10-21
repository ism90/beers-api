import React from "react";
import "./CardList.scss";

import Card from "../Card/Card";

const CardList = (props) => {
  const { beers, searchTerm, beerFilters } = props;

  const activeFilters = beerFilters
    .filter((filter) => filter.active)
    .map((filter) => filter.value);

  //@Charlie - would love thoughts on how to make this prettier!
  const filteredBeers = beers
    .filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((beer) => (activeFilters.includes("abv") ? beer.abv > 6 : beer))
    .filter((beer) =>
      activeFilters.includes("classic")
        ? beer.first_brewed.slice(-4) < 2010
        : beer
    )
    .filter((beer) => (activeFilters.includes("acidic") ? beer.ph < 4 : beer))
    .filter((beer) => (activeFilters.includes("IBU") ? beer.ibu > 90 : beer))
    .filter((beer) =>
      activeFilters.includes("smoke") ? beer.description.includes("smok") : beer
    )
    .filter((beer) =>
      activeFilters.includes("cheese")
        ? beer.food_pairing.find((element) => element.includes("cheese "))
        : beer
    )
    .filter((beer) =>
      activeFilters.includes("chocolate")
        ? beer.food_pairing.find((element) => element.includes("chocolate "))
        : beer
    )
    .map((beer) => <Card key={beer.id} beer={beer} />);

  return <section className="card-list">{filteredBeers}</section>;
};

export default CardList;
