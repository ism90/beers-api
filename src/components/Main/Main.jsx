import React from "react";

import CardList from "../CardList/CardList";

const Main = (props) => {
  const { beers, searchTerm, beerFilters } = props;

  const filteredBySearchTerm = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const activeFilters = beerFilters.filter(filter => filter.active);

  const reducedBeers = activeFilters.reduce(
    (beersToFilter, activeFilter) => beersToFilter.filter(activeFilter.filterBy),
    filteredBySearchTerm
  );

  return <CardList beers={reducedBeers} />;
};

export default Main;
