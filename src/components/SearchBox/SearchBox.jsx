import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInputSearch, inputSearch } = props;

  return (
    <input
      onInput={handleInputSearch}
      value={inputSearch}
      type="text"
      className="search-box"
      placeholder="..."
    />
  );
};

export default SearchBox;
