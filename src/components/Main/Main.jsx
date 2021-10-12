import React from "react";

import CardList from "../CardList/CardList";

const Main = (props) => {
  const { beers, searchTerm, beerFilters } = props;
  return (
    <>
      <CardList beers={beers} searchTerm={searchTerm} beerFilters={beerFilters} />
    </>
  );
};

export default Main;
