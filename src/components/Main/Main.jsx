import React from "react";

import CardList from "../CardList/CardList";

const Main = props => {
  const { beers, searchTerm, beerFilters } = props;
  // FILTER BEERS BY THE SEARCH TERM
  const filteredBySearchTerm = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm.toLowerCase()));
  // GET THE ACTIVE FILTERS
  const activeFilters = beerFilters.filter(filter => filter.active);
  // ITERATE OVER THE ACTIVE FILTERS AND USE THE FILTERBY METHOD STORED ON THE EACH OF THE beerFilter OBJECTS
  // ALL OF YOUR FILTER METHODS ARE IN APP.JSX
  const reducedBeers = activeFilters.reduce(
    (beersToFilter, activeFilter) => beersToFilter.filter(activeFilter.filterBy),
    filteredBySearchTerm
  );

  return <CardList beers={reducedBeers} />;
};

export default Main;
