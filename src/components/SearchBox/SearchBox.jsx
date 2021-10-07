import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInput, searchTerm } = props;

  return (
    <input
      onInput={handleInput}
      value={searchTerm}
      type="text"
      className="search-box"
      placeholder="..."
      id="search"
    />
  );
};

export default SearchBox;
