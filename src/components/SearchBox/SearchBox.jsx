import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInputSearch, inputSearch } = props;

  const startSearch = () => {};

  const resetSearch = () => {};

  return (
    <input
      onChange={startSearch}
      onBlur={resetSearch}
      type="text"
      className="search-box"
      placeholder="..."
    />
  );
};

export default SearchBox;
