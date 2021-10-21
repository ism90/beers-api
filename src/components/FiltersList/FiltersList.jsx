import React from "react";
import "./FiltersList.scss";

import FilterItem from "../FilterItem/FilterItem";

const FiltersList = props => {
  const { handleCheckedBoxes, beerFilters } = props;
  const getFilterJSX = (filter, index) => (
    <div key={index}>
      <FilterItem filter={filter} handleCheckedBoxes={handleCheckedBoxes} />
    </div>
  );

  return (
    <section className="filters-list">
      <h3 className="filters-list__title">Filters</h3>
      {beerFilters.map(getFilterJSX)}
    </section>
  );
};

export default FiltersList;
