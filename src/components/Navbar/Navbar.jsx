import React from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
  const { handleInput, searchTerm } = props;
  return (
    <>
      <section className="title">
        <h1>Brewdog</h1>
      </section>
      <section className="abv-filter"></section>
      <div className="navbar">
        <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default Navbar;
