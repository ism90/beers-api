import React, { useState } from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { filter, handleCheckedBoxes } = props;

  const [active, setActive] = useState(false);

  const toggleCheckbox = () => {
    handleCheckedBoxes(filter, !active);
    setActive(!active);
  };
  const {filterName, value } = filter;

  return (
    <div className="filter-item">
      <p>{filterName}</p>
      <input type="checkbox" value={value} onClick={toggleCheckbox} />
    </div>
  );
};

export default FilterItem;
