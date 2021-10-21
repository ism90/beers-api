import React from "react";
import "./Navbar.scss";

import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
import logo from "../../assets/logo.png";

const NavBar = (props) => {
  const { beerFilters, handleSearchInput, handleCheckedBoxes } = props;

  return (
    <section className="nav">
      <div className="nav__content">
        <div className="nav__logo">
          <img src={logo} alt="logo of brewdog" />
        </div>
        <SearchBox
          placeholder="Search..."
          handleSearchInput={handleSearchInput}
        />
        <FiltersList
          beerFilters={beerFilters}
          handleCheckedBoxes={handleCheckedBoxes}
        />
      </div>
    </section>
  );
};

export default NavBar;
