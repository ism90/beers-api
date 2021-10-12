import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { placeholder, handleSearchInput } = props;
  return (
    <div className="search-box">
      <input className="search-box__input" type="text" placeholder={placeholder} onChange={handleSearchInput} />
    </div>
  );
};

export default SearchBox;


